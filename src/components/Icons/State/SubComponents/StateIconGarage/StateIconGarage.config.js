import { colorClasses as iconStateColorClasses } from "../StateIcon.config";

let cc = { ...iconStateColorClasses };
cc.default = {
  outline: "text-black",
  base: "text-white",
  fillLight: "text-gray-300",
};

export let colorClasses = cc;
