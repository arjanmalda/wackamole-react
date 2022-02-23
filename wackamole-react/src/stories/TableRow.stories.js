import TableRow from "../components/TableRow";

export default {
  title: "Wackamole/Table/TableRow",
  component: TableRow,
};

const Template = (args) => <TableRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "white",
  size: "lg",
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "0.5rem",
  fontSize: "1rem",
  border: "black solid 2px",
  display: "flex",
  flexDiretion: "row",
  alignItems: "center",
};

export const Hover = Template.bind({});
Hover.args = {
  backgroundColor: "#f2f2f2",
  size: "md",
  padding: "1rem",
  fontSize: "1rem",
  border: "black solid 2px",
};
