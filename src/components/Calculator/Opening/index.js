import * as React from "react"
import InputGroup from "./InputGroup";
import { XCircleIcon } from "@heroicons/react/outline";
import { motion, usePresence, AnimatePresence } from "framer-motion";

export default function Opeining({ item, group, setCasingInfo, groupName, setBaseInfo }) {

  const { width, height, qty, id, length } = item;

  const handleOpeningChange = (label, dimensions) => {
    let mapped = group.map((item) => {
      return item.id == id ? { ...item, [label]: dimensions } : { ...item };
    });



    if (setCasingInfo) {
      setCasingInfo((prevState) => ({
        ...prevState,
        [groupName] : mapped,
      }))

    } else {
      setBaseInfo(prevState => ({
        ...prevState,
        [groupName] : mapped
      }))

    }
  };

  const removeItem = () => {
    const filteredArray = group.filter((item) => item.id !== id);

    if (setCasingInfo) {
      setCasingInfo((prevState) => ({
        ...prevState,
        [groupName]: filteredArray,
      }));
    } else {
      setBaseInfo((prevState) => ({
        ...prevState,
        [groupName]: filteredArray,
      }));
    }
  }

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}

    >
    <div className="py-4 px-2 md:px-4 flex relative flex-wrap md:flex-nowrap">
      <InputGroup
        label="width"
        dimensions={width}
        handleChange={handleOpeningChange}
      />
      <InputGroup
        label={length ? `length` : "height"}
        dimensions={length ? length : height}
        handleChange={handleOpeningChange}
      />

      {setCasingInfo &&
        <div className="font-overpass w-24">
          <label
            htmlFor="qty"
            className="block text-xs md:text-sm font-medium text-gray-700"
          >
            qty
          </label>
          <div className="mt-1 relative">
            <input
              type="text"
              name="qty"
              className="focus:ring-gray-500 focus:border-gray-500 block w-full text-xs md:text-sm border-black bg-calc-tan"
              placeholder="0"
              aria-describedby="casing-width"
              value={qty}
              onChange={(e) => {
                const { name, value } = e.target;
                let mapped = group.map((item) => {
                  return item.id == id ? { ...item, [name]: value } : { ...item };
                });

                setCasingInfo((prevState) => ({
                  ...prevState,
                  [groupName]: mapped,
                }));
              }}
            />
          </div>
        </div>
      }

        <button
          className="border-none absolute w-6 h-6 -right-6 top-2/4"
          onClick={removeItem}
        >
          <XCircleIcon className="text-calc-red" />
        </button>
    </div>
    </motion.div>
  );
}