import * as React from "react"
import classNames from '../../lib/classNames'

export default function Header({
  tabsState,
  setCurrentTab,
  setIsTotalOpen,
  casingInfo,
  setTotals,
  setCasingInfo,
  baseInfo,
  setBaseInfo,
}) {
  const calculateOpeningTotals = async (group, opening) => {
    let totalFeet = 0;
    let totalInches = 0;
    let casing;
    let topMultiplier;
    let sides;

    if (opening === "door") {
      casing = casingInfo.casingWidth
        ? parseInt(casingInfo.casingWidth) * 2
        : 0;
      topMultiplier = 1;
      sides = 2;
    } else {
      casing = casingInfo.casingWidth
        ? parseInt(casingInfo.casingWidth) * 4
        : 0;
      topMultiplier = 2;
      sides = 1;
    }

    group.map((item) => {
      let qty = item.qty > 0 ? item.qty : 1;
      totalFeet =
        totalFeet +
        (parseInt(item.width.feet) * topMultiplier +
          parseInt(item.height.feet) * 2) *
          qty *
          sides;
      totalInches =
        totalInches +
        (parseInt(item.width.inches) + parseInt(item.height.inches) + casing) *
          qty *
          sides;
    });
    // Convert feet to inches and add everything together
    return (totalFeet = totalFeet + Math.ceil(totalInches / 12));
  };

  const calculateBaseTotals = async () => {
    let totalFeet = 0;
    let totalInches = 0;

    baseInfo.areas.map(area => {
      totalFeet =
        totalFeet +
        (parseInt(area.width.feet) * 2 + parseInt(area.length.feet) * 2);
      totalInches =
        totalInches +
        (parseInt(area.width.inches) * 2 + parseInt(area.length.inches) * 2);
    })

    return (totalFeet = totalFeet + Math.ceil(totalInches / 12));
  };

  const calculateTotals = async () => {
    let [doors, windows, base] = await Promise.all([
      calculateOpeningTotals(casingInfo.doors, "door"),
      calculateOpeningTotals(casingInfo.windows, "window"),
      calculateBaseTotals()
    ]);

    const casing = doors + windows;

    setTotals((prevState) => ({
      ...prevState,
      casing,
      base
    }));
  };

  const clearOut = () => {
    setCasingInfo({
      casingWidth: null,
      doors: [],
      windows: [],
    });

    setBaseInfo({
      areas: []
    })
  };

  const handleCalculate = () => {
    setIsTotalOpen(true);
    calculateTotals();
  };

  return (
    <div className="flex w-full justify-between items-center pb-4 border-b border-solid border-black">
      <nav className="flex">
        <button
          className={classNames(
            tabsState.case
              ? `bg-calc-yellow bg-opacity-100`
              : `bg-black bg-opacity-10`,
            `border-none py-2 px-3 font-overpass transition-all duration-300 mr-4 text-xs md:text-sm`
          )}
          onClick={() => {
            if (tabsState.case) {
              return;
            }
            setCurrentTab({ case: true, base: false });
          }}
        >
          casing
        </button>
        <button
          className={classNames(
            tabsState.base
              ? `bg-calc-yellow bg-opacity-100`
              : `bg-black bg-opacity-10`,
            `border-none py-2 px-3 font-overpass transition-all duration-300 mr-4 text-xs md:text-sm`
          )}
          onClick={() => {
            if (tabsState.base) {
              return;
            }
            setCurrentTab({ case: false, base: true });
          }}
        >
          base
        </button>
      </nav>

      <div className="flex">
        <button
          className="border-none font-overpass transition-all duration-300 py-2 px-4 bg-calc-red hover:bg-opacity-60 ml-4 text-xs md:text-sm"
          onClick={clearOut}
        >
          clear
        </button>
        <button
          className="border-none font-overpass transition-all duration-300 py-2 px-4 bg-calc-green hover:bg-opacity-60 ml-4 text-xs md:text-sm"
          onClick={handleCalculate}
        >
          calculate
        </button>
      </div>
    </div>
  );
}