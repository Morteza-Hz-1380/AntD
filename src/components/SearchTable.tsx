import { SearchOutlined } from "@ant-design/icons";
import { Input, Table } from "antd";
import { useState } from "react";

function SearchTable() {
  const [dataSource, setDataSource] = useState([
    {
      name: "John",
      age: 32,
      address: "New York",
    },
    {
      name: "Jim",
      age: 42,
      address: "London",
    },
    {
      name: "Joe",
      age: 32,
      address: "Sidney",
    },
    {
      name: "Lim",
      age: 47,
      address: "London",
    },
    {
      name: "Moe",
      age: 36,
      address: "japan",
    },
  ]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filterDropdown: (setSelectedKeys , selectedKeys , confirm) => {
        return (
          <Input
            autoFocus
            placeholder="Type text here"
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
            }}
            onPressEnter={() => {}}
            onBlur={() => {}}
          ></Input>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];
  return (
    <div className="mx-10 my-10">
      <Table columns={columns} dataSource={dataSource}></Table>
    </div>
  );
}

export default SearchTable;
