import React from "react";
import Input from "antd/lib/input";
import SearchOutlined from "@ant-design/icons/SearchOutlined";
import Select from "antd/lib/select";
import CollapseSection from "../CollapseSection";

const SAMPLE_QUESTIONS = [
  {
    question:
      "Question Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    index: 1,
  },
  {
    question:
      "Question Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    index: 2,
  },
  {
    question:
      "Question Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    index: 3,
  },
  {
    question:
      "Question Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    index: 4,
  },
  {
    question:
      "Question Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    index: 5,
  },
  {
    question:
      "Question Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    index: 6,
  },
  {
    question:
      "Question Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    index: 7,
  },
  {
    question:
      "Question Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    index: 8,
  },
];

const SAMPLE_FAQ = [
  {
    label: "All topics",
    value: 1,
  },
  {
    label: "Termination of Employment Contracts",
    value: 2,
  },
  {
    label: "Social Security and Work Emergencies",
    value: 3,
  },
  {
    label: "Question Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr?",
    value: 4,
  },
];

const SearchQuestion = () => {
  const onSearch = (value: any) => console.log(value);

  return (
    <section className="unit-body-container">
      <div className="search-question-container">
        <div className="search-label">Search questions</div>
        <Input.Search
          className="input-search"
          prefix={<SearchOutlined />}
          onSearch={onSearch}
          onChange={onSearch}
        />
      </div>
      <div className="dropdown-container">
        <div className="select-label">Topic</div>
        <Select className="form-select">
          {SAMPLE_FAQ.map((item) => (
            <Select.Option value={item.value} key={item.value}>
              {item.label}
            </Select.Option>
          ))}
        </Select>
      </div>
      {SAMPLE_QUESTIONS.map((item) => {
        return (
          <CollapseSection
            question={item.question}
            answer={item.answer}
            key={item.index}
          />
        );
      })}
    </section>
  );
};
export default SearchQuestion;
