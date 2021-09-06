import * as React from "react"
export default function InputGroup({label, dimensions, handleChange}) {

  const handleDimensionChange = (e) => {
    const { name, value } = e.target;
    const newDimensions = { ...dimensions, [name]: value };
    handleChange(label, newDimensions);
  }

  return (
    <div className="font-overpass mb-2">
      <label
        // htmlFor="casingWidth"
        className="block text-xs md:text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="flex">
        <div className="mt-1 relative mr-2">
          <input
            type="text"
            name="feet"
            className="focus:ring-gray-500 focus:border-gray-500 block w-full text-xs md:text-sm border-black bg-calc-tan"
            placeholder="0"
            aria-describedby="casing-width"
            value={dimensions.feet}
            onChange={handleDimensionChange}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm" id="case-inch">
              ft
            </span>
          </div>
        </div>

        <div className="mt-1 relative mr-2">
          <input
            type="text"
            name="inches"
            className="focus:ring-gray-500 focus:border-gray-500 block w-full text-xs md:text-sm border-black bg-calc-tan"
            placeholder="0"
            aria-describedby="casing-width"
            value={dimensions.inches}
            onChange={handleDimensionChange}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm" id="case-inch">
              in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}