import React from "react";
import SurveyBody from "../components/SurveyBody";

const routes = [
  {
    path: "/dashboard",
    exact: true,
    name: "Survey",
    toolbar: () => <p className="text-white">JTI Sheikh LEP</p>,
    main: () => <SurveyBody />,
  },
];

export default routes;
