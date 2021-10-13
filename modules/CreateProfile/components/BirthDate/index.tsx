import React, { useState } from "react";
import Form, { FormInstance } from "antd/lib/form";
import Input from "antd/lib/input";
import Select from "antd/lib/select";
import { DAYS, MONTH } from "@modules/CreateProfile/helpers/constants";
import DatePicker from "antd/lib/date-picker";

interface BirthDateProps {
  value?: any;
  onChange?: any;
}

const BirthDate = ({ value = {}, onChange }: BirthDateProps) => {
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [year, setYear] = useState();

  const triggerChange = (changedValue: any) => {
    console.log("change", month);

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

  const handleYearChange = (e: any) => {
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
      />
    </div>
  );
};

export default BirthDate;
