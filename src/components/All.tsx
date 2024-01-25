import { Button, Input } from "antd";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";

function All() {
  const [loading, setloading] = useState(false);

  const onButtonClick = (e) => {
    console.log("Button clicked");
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  };
  return (
    <div className="md:flex">
      <Button className="mx-2 my-2 " loading={loading} onClick={onButtonClick}>
        My First button
      </Button>
      <Input.Search className="max-w-lg mx-2 my-2" placeholder="Name" maxLength={12}
      prefix={<UserOutlined />}
      allowClear
      ></Input.Search>
    </div>
  );
}

export default All;
