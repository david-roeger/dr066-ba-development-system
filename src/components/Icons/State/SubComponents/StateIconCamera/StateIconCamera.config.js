import { colorClasses as iconStateColorClasses } from "../StateIcon.config";

let cc = { ...iconStateColorClasses };
cc.default = {
  outline: "text-black",
  base: "text-white",
  fillLight: "text-gray-300",
  fillDark: "text-red-500",
};

export let colorClasses = cc;
