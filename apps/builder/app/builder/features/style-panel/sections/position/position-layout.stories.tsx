import type { Meta } from "@storybook/react";
import type * as React from "react";
import { PositionLayout } from "./position-layout";
import { Grid, theme, Text } from "@webstudio-is/design-system";

const Cell = () => (
  <Text variant={"spaceSectionValueText"}>Auto{/*1.275&#8203;rem*/}</Text>
);

export const PositionLayoutComponent = (
  args: Omit<React.ComponentProps<typeof PositionLayout>, "renderCell">
) => (
  <Grid css={{ width: theme.spacing[22], height: theme.spacing[18] }}>
    <PositionLayout
      renderCell={() => <Cell />}
      activeProperties={args.activeProperties}
      onHover={(hoverProps) => {
        // eslint-disable-next-line no-console
        console.log(hoverProps);
      }}
    />
  </Grid>
);

export default {
  title: "Position/Layout",
  component: PositionLayoutComponent,

  argTypes: {
    activeProperties: {
      options: ["left", "right", "top", "bottom"],
      control: { type: "check" },
    },
  },
} as Meta<typeof PositionLayoutComponent>;
