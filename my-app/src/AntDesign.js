import { Select } from "antd";
import { useState } from "react";
import "./App.css";

export const AntDesign = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const onChange = (label) => {
    setSelectedValue(label);
  };

  return (
    <>
      <label>{selectedValue}</label>
      <Select
        defaultValue={["lucy"]}
        placeholder="Outlined"
        popupClassName="margin-top"
        onChange={onChange}
        loading={true}
        open={true}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
        ]}
      />
    </>
  );
};
