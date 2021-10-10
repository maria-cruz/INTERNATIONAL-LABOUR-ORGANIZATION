import React from "react";
import Input from "antd/lib/input";
import Form from "antd/lib/form";
import Button from "antd/lib/button";

const QandA = () => {
  const { TextArea } = Input;
  return (
    <section className="QandA-section">
      <div className="comment-form-wrapper">
        <Form.Item
          name="comment"
          label="Ask Here"
          className="comment-container"
        >
          <TextArea className="text-input-container" />
          <Button htmlType="submit" type="primary" className="submit-btn">
            Ask question
          </Button>
        </Form.Item>
      </div>
      <div className="comment-display-container">
        <div className="name-container">Khashifa Omen</div>
        <div className="description-container">
          Training/academic institution – Student/Trainee
        </div>
        <p className="question-display-container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor
          lacinia ornare. Sed venenatis viverra pretium. Suspendisse potenti.
          Sed commodo cursus nunc vel fermentum. Aliquam porttitor est diam?
        </p>
      </div>
      <div className="conversation-container">
        <div className="item-wrapper">
          <div className="name-container">Reyhan Mahfouz</div>
          <div className="label-container">Instructor</div>
          <p className="question-display-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            auctor lacinia ornare. Sed venenatis viverra pretium. Suspendisse
            potenti. Sed commodo cursus nunc vel fermentum. Aliquam porttitor
            est diam?
          </p>
        </div>
        <div className="item-wrapper">
          <div className="name-container">Khashifa Omen</div>
          <div className="label-container">
            Training/academic institution – Student/Trainee
          </div>
          <p className="question-display-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            auctor lacinia ornare. Sed venenatis viverra pretium. Suspendisse
            potenti. Sed commodo cursus nunc vel fermentum. Aliquam porttitor
            est diam?
          </p>
        </div>
        <Form.Item className="reply-container">
          <TextArea className="reply-input-container" placeholder="Comment" />
          <Button className="reply-btn">Reply</Button>
        </Form.Item>
      </div>

      <div className="comment-display-container">
        <div className="name-container">Khashifa Omen</div>
        <div className="description-container">
          Training/academic institution – Student/Trainee
        </div>
        <p className="question-display-container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor
          lacinia ornare. Sed venenatis viverra pretium. Suspendisse potenti.
          Sed commodo cursus nunc vel fermentum. Aliquam porttitor est diam?
        </p>
      </div>
      <div className="conversation-container">
        <Form.Item className="reply-container">
          <TextArea className="reply-input-container" placeholder="Comment" />
          <Button className="reply-btn">Reply</Button>
        </Form.Item>
      </div>
    </section>
  );
};
export default QandA;
