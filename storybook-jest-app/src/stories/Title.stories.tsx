// // https://velog.io/@kimbiyam/React%EC%97%90-Storybook-%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0
import React from "react";

import { Meta, Story } from "@storybook/react";
import Title, { TitleProps } from "./Title";

export default {
  title: "Components/Title", // 컴포넌트 이름
  component: Title, // 실제로 가져올 컴포넌트
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Basic = Template.bind({});
Basic.args = { text: "Title!" };
