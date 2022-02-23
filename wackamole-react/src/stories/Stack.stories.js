import Stack from "../components/Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { time: "number", defaultValue: 4 },
  },
};
const label = "hello";

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {label}
      </div>
    ))}
  </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  numberOfChildren: 5,
  direction: "row",
  spacing: 2,
  wrap: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
  numberOfChildren: 5,
  direction: "column",
  spacing: 2,
  wrap: false,
};

export const noSpacing = Template.bind({});
noSpacing.args = {
  numberOfChildren: 5,
  direction: "row",
  spacing: 0,
  wrap: false,
};

export const wrapOverflow = Template.bind({});
wrapOverflow.args = {
  numberOfChildren: 105,
  direction: "row",
  spacing: 2,
  wrap: true,
};

export const Empty = Template.bind({});
Empty.args = {
  numberOfChildren: 0,
  direction: "row",
  spacing: 2,
  wrap: true,
};
