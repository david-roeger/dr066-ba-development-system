import { colorClasses as iconStateColorClasses } from "../StateIcon.config";

let cc = { ...iconStateColorClasses };
cc.default = {
  outline: "text-black",
  base: "text-white",
  fill: "text-yellow-500",
};

export let colorClasses = cc;
