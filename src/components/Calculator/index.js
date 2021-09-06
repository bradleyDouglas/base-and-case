import * as React from "react"
import { useState } from 'react';
import Header from './Header'
import Case from './Casing'
import Base from './Base'
import Total from './Total';

export default function Calculator() {
   const [tabsState, setCurrentTab] = useState({
     case: true,
     base: false,
   });

   const [casingInfo, setCasingInfo] = useState({
     casingWidth: null,
     doors: [],
     windows: [],
   });

   const [ baseInfo, setBaseInfo] = useState({
     areas: []
   })

   const [isTotalOpen, setIsTotalOpen] = useState(false)

   const [totals, setTotals] = useState({
     casing: 0,
     base: 0
   })

  return (
    <div className="h-screen w-screen pt-8 bg-calc-tan">
      <div className="w-full max-w-screen-sm p-4 m-auto">
        <Header
          tabsState={tabsState}
          setCurrentTab={setCurrentTab}
          setIsTotalOpen={setIsTotalOpen}
          casingInfo={casingInfo}
          setTotals={setTotals}
          setCasingInfo={setCasingInfo}
          baseInfo={baseInfo}
          setBaseInfo={setBaseInfo}
        />
        <div className="">
          {tabsState.case && (
            <Case casingInfo={casingInfo} setCasingInfo={setCasingInfo} />
          )}
          {tabsState.base && (
            <Base baseInfo={baseInfo} setBaseInfo={setBaseInfo} />
          )}
        </div>
      </div>
      <Total
        isTotalOpen={isTotalOpen}
        setIsTotalOpen={setIsTotalOpen}
        totals={totals}
      />
    </div>
  );
}