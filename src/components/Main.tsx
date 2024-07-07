import { forwardRef } from "react";
import Buy from "./Buy";
import Cars from "./Cars";
import InterestingForUs from "./InterestingForUs";
import Intro from "./Intro";
import Team from "./Team";

const Main = forwardRef<HTMLDivElement>((props, ref:any) => {
    return (
        <>
        <Intro ref={ref?.mainRef} />
        <Cars ref={ref?.autoRef} />
        <Buy ref={ref?.buyRef} />
        <Team ref={ref?.teamRef} />
        <InterestingForUs ref={ref?.interestingRef} />
        </>
    )
})

export default Main;