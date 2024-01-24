import { Button } from "antd";
import { useState } from "react";

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
    <div>
      <Button
        className="mx-2 my-2 hover:bg-black hover:scale-105"
        loading={loading}
        onClick={onButtonClick}
      >
        My First button
      </Button>
    </div>
  );
}

export default All;
