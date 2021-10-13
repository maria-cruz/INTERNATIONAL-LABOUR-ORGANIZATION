import React from "react";

import Select, { SelectProps } from "antd/lib/select";
import nationalities from "@common/constants/nationalities";
const { Option } = Select;

const NationalitiesSelect = (props: SelectProps<any>) => {
  return (
    <Select {...props}>
      {nationalities.map(({ countryCode, nationality }) => (
        <Option key={countryCode} value={countryCode}>
          {nationality}
        </Option>
      ))}
    </Select>
  );
};

export default NationalitiesSelect;
