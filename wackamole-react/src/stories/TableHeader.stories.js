import TableHeader from "../components/TableHeader";

export default {
  title: "Wackamole/Table/TableHeader",
  component: TableHeader,
};

const Template = (args) => <TableHeader {...args} />;

export const Main = Template.bind({});
Main.args = {
  backgroundColor: "rgb(4,170,109)",
  size: "md",
  padding: "1rem",
  fontSize: "1rem",
  border: "black solid 2px",
};
