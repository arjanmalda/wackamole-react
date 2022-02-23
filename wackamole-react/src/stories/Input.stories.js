import Input from "../components/Input";

export default {
  title: "Wackamole/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const General = Template.bind({});
General.args = {
  backgroundColor: "black",
  label: "Name...",
  size: "md",
  cursor: "text",
  padding: "1rem",
  fontSize: "1rem",
};
