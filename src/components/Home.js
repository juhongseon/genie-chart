import React from "react";
import Home_calendar from "./Home_calendar";
import Home_list from "./Home_list";

export default function Home() {
    return (
        <React.Fragment>
            <Home_calendar/>
            <Home_list/>
        </React.Fragment>
    )
}