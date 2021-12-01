import React, { useState } from "react";
import Select from "antd/lib/select";
import { DAYS, MONTHS } from "@modules/CreateProfile/helpers/constants";
import DatePicker from "antd/lib/date-picker";
import DownArrow from "@common/components/Icons/DownArrow";
import { Moment } from "moment";
import useTranslation from "next-translate/useTranslation";

interface BirthDateProps {
  value?: any;
  onChange?: ({}) => void;
}

const BirthDate = ({ value = {}, onChange }: BirthDateProps) => {
  const { t } = useTranslation("create-profile");

  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [year, setYear] = useState<Moment | null>();

  const triggerChange = (changedValue: {}) => {
    onChange?.({
      month,
      day,
      year,
      ...value,
      ...changedValue,
    });
  };

  const handleMonthChange = (e: any) => {
    if (!("month" in value)) {
      setMonth(e);
    }
    triggerChange({
      month: e,
    });
  };

  const handleDayChange = (e: any) => {
    if (!("day" in value)) {
      setDay(e);
    }

    triggerChange({
      day: e,
    });
  };

  const handleYearChange = (e: Moment | null) => {
    if (!("year" in value)) {
      setYear(e);
    }

    triggerChange({
      year: e,
    });
  };

  return (
    <div className="birth-date-container">
      <Select
        className="month-select"
        placeholder={t("month")}
        onChange={handleMonthChange}
        value={month || (value?.month ? value?.month : undefined)}
        suffixIcon={<DownArrow width={"1.3rem"} height={"1.3rem"} />}
      >
        {MONTHS?.map((month) => (
          <Select.Option value={month.value} key={month.value}>
            {month.label}
          </Select.Option>
        ))}
      </Select>

      <Select
        className="width-day"
        placeholder={t("day")}
        onChange={handleDayChange}
        value={value.day || day}
        suffixIcon={<DownArrow width={"1.5rem"} height={"1.5rem"} />}
      >
        {DAYS?.map((day) => (
          <Select.Option value={day.value} key={day.value}>
            {day.label}
          </Select.Option>
        ))}
      </Select>

      <DatePicker
        className="date-picker-year"
        picker="year"
        placeholder={t("year")}
        onChange={handleYearChange}
        value={value.year || year}
        suffixIcon={<DownArrow width={"1.5rem"} height={"1.5rem"} />}
      />
    </div>
  );
};

export default BirthDate;
