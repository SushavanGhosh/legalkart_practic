import React from "react";

const FilterComp = ({ item }) => {
  return (
    <li className="w-full">
      <label className="text-sm text-gray-700 flex items-baseline gap-2">
        <input
          type="checkbox"
          name={item.check}
          value={item.value}
          className="w-4 h-4 relative top-0.5"
        />
        {item.label}
      </label>
    </li>
  );
};

export default FilterComp;
