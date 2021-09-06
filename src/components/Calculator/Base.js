import * as React from "react"
import classNames from "../../lib/classNames";
import Opeining from "./Opening";
import { motion, usePresence, AnimatePresence } from "framer-motion";

export default function Base({ baseInfo, setBaseInfo }) {
  const { areas } = baseInfo;

  const addNewElement = (group, name) => {
    let copy = [...group];
    copy = [
      ...copy,
      {
        id: group.length + 1,
        width: { feet: 0, inches: 0 },
        length: { feet: 0, inches: 0 },
      },
    ];
    setBaseInfo((prevState) => ({
      ...prevState,
      [name]: copy,
    }));
  };

  return (
    <div className="flex border-b border-black border-solid">
      <div className="py-4 px-2 border-r border-black border-solid w-1/4">
        <p className="font-overpass font-semibold text-sm md:text-base">
          area sizes
        </p>
      </div>
      {/* INPUT */}
      <div className="w-3/4">
        <AnimatePresence>
        {areas.map((area) => (
          <Opeining
            key={area.id}
            item={area}
            group={areas}
            groupName="areas"
            setBaseInfo={setBaseInfo}
            isLength
          />
        ))}
        </AnimatePresence>
        <button
          className={classNames(
            areas.length ? `my-0` : `my-4`,
            `border-none bg-calc-green font-overpass py-2 px-2 text-xs mr-auto ml-auto mb-4 block hover:bg-opacity-60 transition-all duration-300`
          )}
          onClick={() => addNewElement(areas, "areas")}
        >
          {areas.length !== 0 && `add another area`}
          {areas.length === 0 && `add area`}
        </button>
      </div>
    </div>
  );
}
