import React from "react";
import { CheckBox } from "components";

export default {
  title: "harrry_s_adminapp/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = { label: "Checkbox", inputClassName: "mr-1" };
