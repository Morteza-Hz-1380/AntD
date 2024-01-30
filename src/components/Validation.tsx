import { Form, Button, Checkbox, DatePicker, Input, Select, Modal } from "antd";
import { useState } from "react";

function Validation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { Option } = Select;

  return (
    <div className="mx-10 my-10">
      <Form autoComplete="off" labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
        <Form.Item
          name="full name"
          label="Full Name"
          rules={[
            { required: true, message: "Please input your full name!" },
            {
              whitespace: true,
            },
            {
              min: 3,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Full Name" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter Your Email" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true },
            {
              min: 6,
            },
            {
              validator: (_, value) =>
                value && value.includes("A")
                  ? Promise.resolve()
                  : Promise.reject("Password must contain at least one A"),
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Confirm Your Password" />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select gender!" }]}
          hasFeedback
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="dob"
          label="Date of Birth"
          rules={[
            { required: true, message: "Please input your date of birth!" },
          ]}
          hasFeedback
        >
          <DatePicker
            style={{ width: "100%" }}
            picker="date"
            placeholder="Chose date of birth"
          />
        </Form.Item>
        <Form.Item
          name="website"
          label="Website"
          rules={[
            { required: true, message: "Please input your website url!" },
          ]}
          hasFeedback
        >
          <Input placeholder="Add Your website Url" />
        </Form.Item>
        <Form.Item
          name="agreement"
          wrapperCol={{ span: 24 }}
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject("Should accept agreement"),
            },
          ]}
        >
          <Checkbox>
            Agree to our{" "}
            <Button type="link" onClick={showModal}>
              Terms and police
            </Button>
            <Modal
              title="Terms And Police"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti aliquam magnam sint repellat assumenda, ea cupiditate
                totam rerum ducimus quasi saepe repudiandae odit repellendus
                dolore dolorem aspernatur id? Porro, at.
              </p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Beatae, est?
              </p>
            </Modal>
          </Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button block type="default" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Validation;
