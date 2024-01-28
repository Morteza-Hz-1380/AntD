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
  Tag,
  Modal,
} from "antd";
import { useEffect, useState } from "react";
import {
  AppleFilled,
  LogoutOutlined,
  PieChartFilled,
  UserOutlined,
} from "@ant-design/icons";

function All() {
  const [loading, setloading] = useState(false);
  const fruits = ["Banana", "Mango", "Orange", "Cherry"];
  const [dataSurce, setDataSource] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  }

  const handleOk = () => {
    setIsModalOpen(false);
  }
  const handleCancle = () => {
    setIsModalOpen(false);
  }

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

  const saton = [
    {
      title: "Student ID",
      dataIndex: "id",
    },

    {
      title: "Student Name",
      dataIndex: "name",
    },

    {
      title: "Student Grade",
      dataIndex: "grade",
      render: (tag) => {
        const color = tag.includes("A")
          ? "Green"
          : tag.includes("B")
          ? "Blue"
          : "Red";
        return (
          <Tag color={color} key={tag}>
            {tag}
          </Tag>
        );
      },
    },
  ];

  const datamanba = [
    {
      key: "1",
      id: 1,
      name: "Student Name 1",
      grade: "A+",
    },
    {
      key: "2",
      id: 2,
      name: "Student Name 2",
      grade: "A",
    },
    {
      key: "3",
      id: 3,
      name: "Student Name 3",
      grade: "B",
    },
    {
      key: "4",
      id: 4,
      name: "Student Name 4",
      grade: "c",
    },
    {
      key: "5",
      id: 5,
      name: "Student Name 5",
      grade: "A",
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

      <Table
        columns={saton}
        dataSource={datamanba}
        rowSelection={{
          type: "checkbox",
          onSelect: (record) => {
            console.log(record);
          },
          selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
          ],
        }}
      ></Table>

      <PieChartFilled rotate={45} className="text-red-500 text-9xl" />
      <AppleFilled className="text-red-500 text-9xl" />
      <Button icon={<LogoutOutlined className="text-red-500" />}>
        Button with custon Icon
      </Button>




      <Button onClick={showModal}>Open Modal</Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancle}>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
      </Modal>
    </div>
  );
}

export default All;
