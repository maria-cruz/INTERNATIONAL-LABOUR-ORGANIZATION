import React, { useEffect, useState, ChangeEvent } from "react";
import Input from "antd/lib/input";
import Form from "antd/lib/form";
import Button from "antd/lib/button";
import axios from "axios";
import getJWT from "@common/methods/getJWT";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { SAMPLE_DATA_ORGANIZATION_TYPE } from "@common/constants/organizationType";

interface CommentAuthorType {
  family_name: string;
  given_name: string;
  organization_type: string;
}
interface CommentsType {
  authorUser: CommentAuthorType;
  children: [] | any[];
  content: string;
  id: number;
}

export interface QandAProps {
  courseId?: number;
  courseComments?: CommentsType[];
}

const QandA = ({ courseId, courseComments }: QandAProps) => {
  const { TextArea } = Input;
  const [comments, setComments] = useState(courseComments ?? []);
  const [replyValues, setReplyValues] = useState([""]);

  const router = useRouter();
  const slug = router?.query?.slug;

  const [qAndAForm] = Form.useForm();
  const jwt = getJWT(undefined, true);

  useEffect(() => {
    setComments(courseComments ?? []);
  }, [courseComments, slug]);
  const { t } = useTranslation("common");

  const handleQAndAFinish = (value: any) => {
    if (!value?.comment) return console.log("No Comment Received");
    if (!courseId) return console.log("No Course ID Received");

    axios
      .post(
        `${process.env.API_URL}/comments/unit:${courseId}`,
        {
          content: value?.comment,
          related: [
            {
              refId: courseId,
              ref: "unit",
              field: "comments",
            },
          ],
        },
        {
          headers: {
            Authorization: jwt,
          },
        }
      )
      .then((data) => {
        if (data?.data) {
          setComments([...comments, { ...data?.data, children: [] }]);
        }
        console.log(data, "success");
      })
      .then(() => {
        qAndAForm.resetFields();
      })
      .catch((err) => console.error(err));
  };

  const handleReplyFinish =
    (commentId?: number, replyIdx?: number) => (event: any) => {
      if (!replyIdx && replyIdx !== 0)
        return console.log("No Reply Index Received");
      if (!commentId) return console.log("No Comment ID Received");
      if (!replyValues?.[replyIdx]) return console.log("No Reply Received");
      if (!courseId) return console.log("No Course ID Received");

      axios
        .post(
          `${process.env.API_URL}/comments/unit:${courseId}`,
          {
            content: replyValues?.[replyIdx],
            threadOf: commentId,
            related: [
              {
                refId: courseId,
                ref: "unit",
                field: "comments",
              },
            ],
          },
          {
            headers: {
              Authorization: jwt,
            },
          }
        )
        .then((data) => {
          if (data?.data) {
            comments?.map((comment) => {
              if (comment?.id === data?.data?.threadOf?.id) {
                comment.children = [...comment.children, data?.data];
              }
              return comment;
            });
          }
          console.log(data, "success");
        })
        .then(() => {
          setReplyValues([""]);
        })
        .catch((err) => console.error(err));
    };

  const handleTextAreaChange =
    (idx: number) => (event: ChangeEvent<HTMLTextAreaElement>) => {
      let values = [...replyValues];
      values[idx] = event?.target?.value;
      setReplyValues(values);
    };

  return (
    <section className="QandA-section">
      <div className="qanda-container">
        <div className="comment-form-wrapper">
          <Form form={qAndAForm} onFinish={handleQAndAFinish}>
            <div className="comment-container">
              <Form.Item name="comment" label={`${t("askHere")}`}>
                <TextArea className="text-input-container" />
              </Form.Item>
              <Button htmlType="submit" type="primary" className="submit-btn">
                {t("askQuestion")}
              </Button>
            </div>

            <Button
              htmlType="submit"
              type="primary"
              className="submit-btn-mobile"
            >
              {t("askQuestion")}
            </Button>
          </Form>
        </div>

        {comments?.map?.((comment, idx) => {
          const commentId = comment?.id;

          const hasName =
            !!comment?.authorUser?.given_name &&
            !!comment?.authorUser?.family_name;
          const hasOrganization = !!comment?.authorUser?.organization_type;
          const hasContent = !!comment?.content;

          const shouldNotRenderComment = !(
            hasName &&
            hasOrganization &&
            hasContent
          );
          if (shouldNotRenderComment) return null;

          const fullName = hasName
            ? `${comment?.authorUser?.given_name} ${comment?.authorUser?.family_name}`
            : undefined;

          const checkOrganizationType = SAMPLE_DATA_ORGANIZATION_TYPE.find(
            (item) => item.value === comment?.authorUser?.organization_type
          );

          const organizationType = checkOrganizationType?.key
            ? checkOrganizationType.key
            : "";

          return (
            <div key={`comment-${idx}`}>
              <div className="comment-display-container">
                <div className="name-container">{fullName}</div>
                <div className="description-container">
                  {t(organizationType)}
                </div>
                <p className="question-display-container">{comment?.content}</p>
              </div>
              <div className="conversation-container">
                {comment?.children?.map?.((reply, idx) => {
                  const hasName =
                    !!reply?.authorUser?.given_name &&
                    !!reply?.authorUser?.family_name;
                  const hasOrganization =
                    !!reply?.authorUser?.organization_type;
                  const hasContent = !!reply?.content;

                  const shouldNotRenderreply = !(
                    hasName &&
                    hasOrganization &&
                    hasContent
                  );
                  if (shouldNotRenderreply) return null;

                  const fullName = hasName
                    ? `${reply?.authorUser?.given_name} ${reply?.authorUser?.family_name}`
                    : undefined;

                  const checkRepyOrganizationType =
                    SAMPLE_DATA_ORGANIZATION_TYPE.find(
                      (item) =>
                        item.value === reply?.authorUser?.organization_type
                    );

                  const replyOrganizationType = checkRepyOrganizationType?.key
                    ? checkRepyOrganizationType.key
                    : "";

                  return (
                    <div className="item-wrapper" key={`reply-${idx}`}>
                      <div className="name-container">{fullName}</div>
                      <div className="label-container">
                        {t(replyOrganizationType)}
                      </div>
                      <p className="question-display-container">
                        {reply?.content}
                      </p>
                    </div>
                  );
                })}

                <div className="reply-container">
                  <Form.Item className="reply-container">
                    <TextArea
                      className="reply-input-container"
                      placeholder={`${t("comment")}`}
                      value={replyValues[idx]}
                      onChange={handleTextAreaChange(idx)}
                    />
                  </Form.Item>
                  <Button
                    onClick={handleReplyFinish(commentId, idx)}
                    className="reply-btn"
                  >
                    {t("reply")}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default QandA;
