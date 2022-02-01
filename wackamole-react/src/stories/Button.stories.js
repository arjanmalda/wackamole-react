import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Submit!",
  size: "md",
  cursor: "pointer",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "#04AA6D",
  label: "Submit!",
  size: "md",
  cursor: "pointer",
  margin: "0px",
  fontFamily: "Arial, Helvetica, sans-serif",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "red",
  label: "Submit!",
  size: "sm",
  cursor: "pointer",
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "red",
  label: "Submit!",
  size: "lg",
  cursor: "pointer",
};

export const Long = Template.bind({});
Long.args = {
  backgroundColor: "red",
  label:
    "[aweogkas]poigjads[opgihjea[ouigndae[oujn]]]][aweogkas]poigjads[opgihjea[ouigndae[oujn]]]]",
  size: "md",
  cursor: "pointer",
};
