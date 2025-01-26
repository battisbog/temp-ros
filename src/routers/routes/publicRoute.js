import History from "@/pages/History/HIstory";
import HomePage from "@/pages/HomePage/HomePage";
import PlayerDetails from "@/pages/PlayerDetails/PlayerDetails";
import QuestionInfoForm from "@/pages/QuestionInfoForm/QuestionInfoForm.jsx";
import Roster from "@/pages/Roster/Roster";
import React from "react";

export const publicRoutes = [
  {
    path: "/",
    element: React.createElement(HomePage),
  },
  {
    path: "/home",
    element: React.createElement(HomePage),
  },
  {
    path: "/roster",
    element: React.createElement(Roster),
  },
  {
    path: "/player-details/:year/:no",
    element: React.createElement(PlayerDetails),
  },
  {
    path: "/question-form",
    element: React.createElement(QuestionInfoForm),
  },
  {
    path: "/history",
    element: React.createElement(History),
  },
];
