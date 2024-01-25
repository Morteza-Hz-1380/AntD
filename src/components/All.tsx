import { Button, Input, Select } from "antd";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";

function All() {
  const [loading, setloading] = useState(false);
  const fruits = ["Banana", "Mango", "Orange", "Cherry"];

  const onButtonClick = (e) => {
    console.log("Button clicked");
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  };
  return (
    <div className="flex flex-col mx-2 my-2 gap-5">
      <Button loading={loading} onClick={onButtonClick}>
        My First button
      </Button>
      <Input.Search
        className="max-w-lg "
        placeholder="Name"
        maxLength={12}
        prefix={<UserOutlined />}
        allowClear
      ></Input.Search>

      <div>
        <h1>What are your favorite fruit</h1>
        <Select maxTagCount={2} allowClear mode="multiple" placeholder="Select fruit">
          {fruits.map((fruit, index) => (
            <Select.Option key={index} value={fruit}>
              {fruit}
            </Select.Option>
          ))}
        </Select>
      </div>
    </div>
  );
}

export default All;
