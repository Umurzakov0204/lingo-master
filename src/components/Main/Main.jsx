import React from "react";
import Teachers from '../Teachers/Teachers'
import Students from '../Students/Students'
import Courses from '../Courses/Courses'
import Results from "../Results/Results";

function Main() {
    return (
        <>
            <Courses />
            <Teachers />
            <Students />
            <Results />
        </>
    );
}

export default Main;
