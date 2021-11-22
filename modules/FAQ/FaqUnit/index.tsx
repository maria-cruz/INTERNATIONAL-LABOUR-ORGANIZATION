import React, { VFC, useState, useMemo, ChangeEvent } from "react";
import Input from "antd/lib/input";
import SearchOutlined from "@ant-design/icons/SearchOutlined";
import Select from "antd/lib/select";
import CollapseSection from "../components/CollapseSection";
import { FaqsProps, Faq } from "../types/index";

interface FaqUnitProps {
  faqData: FaqsProps;
}
const FaqUnit: VFC<FaqUnitProps> = ({ faqData }) => {
  const [topicId, setTopicId] = useState<number>(0);
  const handleTopicChange = (value: number) => {
    setTopicId(value);
  };
  const [searchInput, setSearchInput] = useState("");
  const allFaqs = useMemo(() => {
    let list: Faq[] = [];

    faqData.topics.forEach((topic) => list.push(...topic.faqs));
    return list;
  }, [faqData.topics]);

  const topics = faqData?.topics ?? [];
  const faqs = topics.find((topic) => topic.id == topicId)?.faqs ?? allFaqs;
  const searchFaqs = faqs.filter((faq) =>
    faq?.question?.toLowerCase().includes(searchInput)
  );
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value.toLowerCase());
  };

  return (
    <div className="faq-unit-container">
      <div className="_subheading-label">{faqData?.title}</div>

      <section className="unit-body-container">
        <div className="search-question-container">
          <div className="search-label">Search questions</div>
          <Input.Search
            className="input-search"
            prefix={<SearchOutlined />}
            onChange={handleSearch}
          />
        </div>
        <div className="dropdown-container">
          <div className="select-label">Topic</div>
          <Select
            className="form-select"
            onChange={handleTopicChange}
            value={topicId}
          >
            <Select.Option value={0}>All Topics</Select.Option>
            {topics.map((topic, idx: number) => {
              const topicTitle = topic?.title ?? "";
              return (
                <Select.Option value={topic.id} key={idx}>
                  {topicTitle}
                </Select.Option>
              );
            })}
          </Select>
          {searchFaqs.map((faq, index) => {
            const question = faq?.question ?? "";
            const answer = faq?.answer ?? "";
            return (
              <CollapseSection
                question={question}
                answer={answer}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FaqUnit;
