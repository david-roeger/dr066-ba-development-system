import React from "react";

export function Grid({ cols, children, full }) {
  let responsive =
    "grid-cols-sm md:grid-cols-md lg:grid-cols-lg xl:grid-cols-xl";
  let size = full ? "lg:min-h-screen w-full" : "lg:min-h-full w-full ";
  return (
    <div
      style={
        cols != undefined
          ? { gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr)` }
          : {}
      }
      className={` ${size} relative grid ${
        cols === undefined ? responsive : ""
      } gap-sm md:gap-md lg:gap-lg xl:gap-xl`}>
      {children}
    </div>
  );
}

Grid.defaultProps = {};
