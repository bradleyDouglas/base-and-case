import * as React from "react"
import classNames from '../../../lib/classNames'
import {XCircleIcon} from '@heroicons/react/outline'

export default function Total({isTotalOpen, setIsTotalOpen, totals}) {

  return (
    <div
      className={classNames(
        isTotalOpen ? `pointer-events-auto` : `pointer-events-none`,
        `w-screen h-screen fixed top-0 left-0 z-50 pointer-events-none`
      )}
    >
      <div
        className={classNames(
          isTotalOpen ? `opacity-100` : `opacity-0`,
          `transition-opacity duration-300 overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50`
        )}
      ></div>
      <div
        className={classNames(
          isTotalOpen ? `transform-none` : `translate-x-full`,
          `transform transition-transform duration-300 px-4 py-6 drawer absolute top-0 right-0 h-full w-full md:w-3/5 lg:w-3/5 max-w-md bg-calc-tan`
        )}
      >
        <div className="flex justify-between mb-12">
          <h2 className="text-3xl font-medium font-overpass">totals</h2>
          <button className="border-none" onClick={() => setIsTotalOpen(false)}>
            <XCircleIcon className="text-calc-red w-10 h-10" />
          </button>
        </div>
        <div className="flex mb-4">
          <p className="text-xl font-light">
            casing: <span className="font-medium ml-6">{totals.casing}</span> linear feet
          </p>
        </div>
        <div className="flex mb-4">
          <p className="text-xl font-light">
            base: <span className="font-medium ml-6">{totals.base}</span> linear feet
          </p>
        </div>
      </div>
    </div>
  );
}