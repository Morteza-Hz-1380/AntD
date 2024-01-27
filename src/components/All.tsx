import {
  Button,
  Input,
  Select,
  Form,
  Table,
  message,
  DatePicker,
  TimePicker,
  Spin,
  Progress,
} from "antd";
import { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";

function All() {
  const [loading, setloading] = useState(false);
  const fruits = ["Banana", "Mango", "Orange", "Cherry"];
  const [dataSurce, setDataSource] = useState([]);

  useEffect(() => {
    setloading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setDataSource(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  const onButtonClick = (e: any) => {
    console.log("Button clicked");
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  };

  const onFinish = (e: any) => {
    console.log(e);
    setTimeout(() => {
      message.success("Login success");
    }, 2000);
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
      sorter: (a: { age: number }, b: { age: number }) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "key",
    },
  ];

  const colmnss = [
    {
      key: "1",
      title: "ID",
      dateIndex: "id",
    },
    {
      key: "2",
      title: "User ID",
      dateIndex: "userid",
    },
    {
      key: "3",
      title: "Status",
      dateIndex: "completed",
      redner: (completed: any) => {
        return <p>{completed ? "Completed" : "Not Completed"}</p>;
      },
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

      <DatePicker />
      <DatePicker.RangePicker />
      <TimePicker />

      <Spin spinning={loading}></Spin>
      <Button onClick={() => setloading((preValue) => !preValue)}>
        Toggle Spinning
      </Button>

      <Spin spinning={loading}>
        <p>P spin 1</p>
        <p>P spin 2</p>
        <p>P spin 3</p>
      </Spin>

      <Progress percent={55} status="active" />
      <Progress percent={55} type="circle" strokeColor="red" />
      <Progress
        percent={55}
        type="line"
        strokeColor="blue"
        status="active"
        strokeWidth={50}
      />
      <Progress percent={55} type="line" status="success" strokeWidth={50} />
      <Progress percent={55} type="line" status="exception" strokeWidth={50} />
      <Progress percent={55} type="circle" status="success" />
      <Progress percent={55} type="circle" status="exception" />

      <Table loading={loading} columns={colmnss} dataSource={dataSurce}></Table>
    </div>
  );
}

export default All;
