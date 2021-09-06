import * as React from "react"
import Opeining from "./Opening";
import classNames from '../../lib/classNames'
import { motion, usePresence, AnimatePresence } from "framer-motion";

export default function Casing({casingInfo, setCasingInfo}) {
  const {doors, windows} = casingInfo

  const addNewElement = (group,name) => {
    let copy = [...group]
    copy = [...copy, {
      id: group.length + 1,
      width: {feet: 0, inches: 0},
      height: {feet: 0, inches: 0},
      qty: 0
    }]
    setCasingInfo( prevState => ({
      ...prevState,
      [name]: copy
    }))
  }

  return (
    <>
      {/* WIDTH */}
      <div className="flex border-b border-black border-solid">
        <div className="py-4 px-2 border-r border-black border-solid w-1/4">
          <p className="font-overpass font-semibold text-sm md:text-base">
            casing size
          </p>
        </div>
        {/* INPUT */}
        <div className="py-4 px-2 md:px-4 w-3/4">
          <div className="font-overpass w-24">
            <label
              htmlFor="casingWidth"
              className="block text-xs md:text-sm font-medium text-gray-700"
            >
              width
            </label>
            <div className="mt-1 relative">
              <input
                type="text"
                name="casingWidth"
                className="focus:ring-gray-500 focus:border-gray-500 block w-full text-xs md:text-sm border-black bg-calc-tan"
                placeholder="0"
                aria-describedby="casing-width"
                value={casingInfo.casingWidth ? casingInfo.casingWidth : ""}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setCasingInfo((prevState) => ({
                    ...prevState,
                    [name]: value,
                  }));
                }}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm" id="case-inch">
                  in
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DOORS */}
      <div className="flex border-b border-black border-solid">
        <div className="py-4 px-2 md:px-4 border-r border-black border-solid w-1/4">
          <p className="font-overpass font-semibold text-sm md:text-base">
            door sizes
          </p>
        </div>
        {/* INPUT */}
        <div className="w-3/4">
          <AnimatePresence>
          {doors.map((door) => (
            <Opeining
              key={door.id}
              item={door}
              group={doors}
              groupName="doors"
              setCasingInfo={setCasingInfo}
            />
          ))}
          </AnimatePresence>
          <button
            className={classNames(
              doors.length ? `my-0` : `my-4`,
              `border-none bg-calc-green font-overpass py-2 px-4 text-xs mr-auto ml-auto mb-4 block hover:bg-opacity-60 transition-all duration-300`
            )}
            onClick={() => addNewElement(doors, "doors")}
          >
            {doors.length !== 0 && `add another door size`}
            {doors.length === 0 && `add door size`}
          </button>
        </div>
      </div>

      {/* WINDOWS */}
      <div className="flex border-b border-black border-solid">
        <div className="py-4 px-2 md:px-4 border-r border-black border-solid w-1/4">
          <p className="font-overpass font-semibold text-sm md:text-base">
            window sizes
          </p>
        </div>
        {/* INPUT */}
        <div className="w-3/4">
          <AnimatePresence>
          {windows.map((window) => (
            <Opeining
              key={window.id}
              item={window}
              group={windows}
              groupName="windows"
              setCasingInfo={setCasingInfo}
            />
          ))}
          </AnimatePresence>
          <button
            className={classNames(
              windows.length ? `my-0` : `my-4`,
              `border-none bg-calc-green font-overpass py-2 px-4 text-xs mr-auto ml-auto mb-4 block hover:bg-opacity-60 transition-all duration-300`
              )}
              onClick={() => addNewElement(windows, "windows")}
              >
            {windows.length !== 0 && `add another window size`}
            {windows.length === 0 && `add window size`}
          </button>

        </div>
      </div>
    </>
  );
}