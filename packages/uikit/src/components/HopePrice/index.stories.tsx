import React from "react";
import { HopePrice, HopePriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/HopePrice",
  component: CakePrice,
};

const Template: React.FC<HopePriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <HopePrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  cakePriceUsd: 20.0,
};
