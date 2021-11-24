import React from "react";
import Input from "antd/lib/input";
import Form from "antd/lib/form";
import Button from "antd/lib/button";
import axios from "axios";
import getJWT from "@common/methods/getJWT";

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
  const [qAndAForm] = Form.useForm();
  const [replyForm] = Form.useForm();
  const jwt = getJWT(undefined, true);

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
              refId: "1",
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
      .then((data) => console.log(data, "success"))
      .then(() => {
        qAndAForm.resetFields();
      })
      .catch((err) => console.error(err));
  };

  const handleReplyFinish = (commentId?: number) => (value: any) => {
    if (!commentId) return console.log("No Comment ID Received");
    if (!value?.reply) return console.log("No Reply Received");
    if (!courseId) return console.log("No Course ID Received");

    axios
      .post(
        `${process.env.API_URL}/comments/unit:${courseId}`,
        {
          content: value?.reply,
          threadOf: commentId,
          related: [
            {
              refId: "1",
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
      .then((data) => console.log(data, "success"))
      .then(() => {
        replyForm.resetFields();
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="QandA-section">
      <div className="comment-form-wrapper">
        <Form form={qAndAForm} onFinish={handleQAndAFinish}>
          <div className="comment-container">
            <Form.Item name="comment" label="Ask Here">
              <TextArea className="text-input-container" />
            </Form.Item>
            <Button htmlType="submit" type="primary" className="submit-btn">
              Ask question
            </Button>
          </div>

          <Button
            htmlType="submit"
            type="primary"
            className="submit-btn-mobile"
          >
            Ask question
          </Button>
        </Form>
      </div>

      {courseComments?.map?.((comment, idx) => {
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

        return (
          <div key={`comment-${idx}`}>
            <div className="comment-display-container">
              <div className="name-container">{fullName}</div>
              <div className="description-container">
                {comment?.authorUser?.organization_type}
              </div>
              <p className="question-display-container">{comment?.content}</p>
            </div>
            <div className="conversation-container">
              {comment?.children?.map?.((reply, idx) => {
                const hasName =
                  !!reply?.authorUser?.given_name &&
                  !!reply?.authorUser?.family_name;
                const hasOrganization = !!reply?.authorUser?.organization_type;
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
                return (
                  <div className="item-wrapper" key={`reply-${idx}`}>
                    <div className="name-container">{fullName}</div>
                    <div className="label-container">
                      {reply?.authorUser?.organization_type}
                    </div>
                    <p className="question-display-container">
                      {reply?.content}
                    </p>
                  </div>
                );
              })}
              <Form form={replyForm} onFinish={handleReplyFinish(commentId)}>
                <div className="reply-container">
                  <Form.Item name="reply" className="reply-container">
                    <TextArea
                      className="reply-input-container"
                      placeholder="Comment"
                    />
                  </Form.Item>
                  <Button htmlType="submit" className="reply-btn">
                    Reply
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default QandA;
