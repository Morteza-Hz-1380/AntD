import { Button, Input, Select, Form, Table } from "antd";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";

function All() {
  const [loading, setloading] = useState(false);
  const fruits = ["Banana", "Mango", "Orange", "Cherry"];

  const onButtonClick = (e: any) => {
    console.log("Button clicked");
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  };

  const onFinish = (e: any) => {
    console.log(e);
  };

  const data = [
    {
      name: "Morteza",
      age: 22,
      address: "Address 1",
      key: "1",
    },
    {
      name: "Ali",
      age: 23,
      address: "Address 2",
      key: "2",
    },
    {
      name: "Yones",
      age: 20,
      address: "Address 3",
      key: "3",
    },
    {
      name: "Hojjat",
      age: 21,
      address: "Address 4",
      key: "4",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "key",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "key",
      sorter : (a: { age: number; },b: { age: number; })=>a.age-b.age
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "key",
    },
  ];

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
            className="bg-blue-800 text-white"
            block
            type="default"
            htmlType="submit"
          >
            Log In
          </Button>
        </Form.Item>
      </Form>



      <Table dataSource={data} columns={columns}></Table>
    </div>
  );
}

export default All;
