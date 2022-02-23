import Highscores from "../components/Highscores";

export default {
  title: "Wackamole/Highscores",
  component: Highscores,
};

const Template = (args) => <Highscores {...args} />;

export const General = Template.bind({});
General.args = {
  backgroundColor: "black",
  label: "Name...",
  size: "md",
  cursor: "text",
  padding: "1rem",
  fontSize: "1rem",
};
