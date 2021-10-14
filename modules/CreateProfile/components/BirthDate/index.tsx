import React, { useState } from "react";
import Select from "antd/lib/select";
import { DAYS, MONTH } from "@modules/CreateProfile/helpers/constants";
import DatePicker from "antd/lib/date-picker";
import DownArrow from "@common/components/Icons/DownArrow";
import { Moment } from "moment";

interface BirthDateProps {
  value?: any;
  onChange?: ({}) => void;
}

const BirthDate = ({ value = {}, onChange }: BirthDateProps) => {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
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
    <div className="column-container">
      <Select
        className="form-select-country"
        placeholder="Month"
        onChange={handleMonthChange}
        value={value.month || month}
        suffixIcon={<DownArrow width={"1.3rem"} height={"1.3rem"} />}
      >
        {MONTH.map((month: any) => (
          <Select.Option value={month.value} key={month.value}>
            {month.label}
          </Select.Option>
        ))}
      </Select>

      <Select
        className="form-width-day"
        placeholder="Day"
        onChange={handleDayChange}
        value={value.day || day}
        suffixIcon={<DownArrow width={"1.5rem"} height={"1.5rem"} />}
      >
        {DAYS.map((day) => (
          <Select.Option value={day.value} key={day.value}>
            {day.label}
          </Select.Option>
        ))}
      </Select>

      <DatePicker
        className="date-picker-year"
        picker="year"
        placeholder="Year"
        onChange={handleYearChange}
        value={value.year || year}
        suffixIcon={<DownArrow width={"1.5rem"} height={"1.5rem"} />}
      />
    </div>
  );
};

export default BirthDate;
