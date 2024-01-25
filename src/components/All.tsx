import { Button, Input, Select, Form } from "antd";
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

  const onFinish = (e) => {
    console.log(e);
    
  }
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

      <h1>What are your favorite fruit</h1>
      <Select
        maxTagCount={2}
        allowClear
        mode="multiple"
        placeholder="Select fruit"
      >
        {fruits.map((fruit, index) => (
          <Select.Option key={index} value={fruit}>
            {fruit}
          </Select.Option>
        ))}
      </Select>

      <Form onFinish={onFinish} className="max-w-lg ">
        <Form.Item label="User-Name" name="username">
          <Input placeholder="User Name" required></Input>
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password placeholder="Password" required></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button
            className="bg-blue-500 text-white"
            block
            type="default"
            htmlType="submit"
          >
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default All;
