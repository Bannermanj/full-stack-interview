import React, { useState, useEffect } from "react";

import "./Robot.scss";
import { withRouter } from "react-router-dom";
import axios from "axios";

import RobotForm from "./RobotForm";
import RobotProfile from "./RobotProfile";

function Robot() {
  const [robots, setRobots] = useState([]);
  const [currentBattle, setCurrentBattle] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [showListing, setShowListing] = useState(true);
  const [showBattle, setShowBattle] = useState(false);
  const [showBattleResults, setShowBattleResults] = useState(false);

  useEffect(
    () => {
      axios
        .get("http://localhost:3001/api/robots/")
        .then(response => setRobots(response.data.profiles));
    },
    [isCreating, showListing, showBattle, showBattleResults]
  );

  useEffect(
    () => {
      if (currentBattle.length === 2) {
        setShowListing(false);
        setIsCreating(false);
        setShowBattle(true);
        setShowBattleResults(false);
      }
    },
    [currentBattle]
  );

  const handleViewSwitcher = view => {
    if (view === "listing") {
      setShowListing(true);
      setIsCreating(false);
      setShowBattle(false);
      setShowBattleResults(false);
    }
    if (view === "creating") {
      setShowListing(false);
      setIsCreating(true);
      setShowBattle(false);
      setShowBattleResults(false);
    }
    if (view === "past") {
      setShowListing(false);
      setIsCreating(false);
      setShowBattle(false);
      setShowBattleResults(true);
    }
  };

  const deleteRobot = robotId => {
    axios
      .post("http://localhost:3001/api/robots/delete", { _id: robotId })
      .then(response => console.log(response));
  };
  return (
    <div className="robot">
      <h1>State Your Purpose!</h1>
      <div className="robot-button-wrapper">
        <button onClick={() => handleViewSwitcher("listing")}>
          View All Robots
        </button>
        <button onClick={() => handleViewSwitcher("creating")}>
          Create New Robot
        </button>
        <button onClick={() => handleViewSwitcher("past")}>
          View Past Results
        </button>
      </div>
      {isCreating && <RobotForm />}
      {showListing &&
        robots.map((robot, i) => (
          <RobotProfile
            key={i}
            robot={robot}
            currentBattle={currentBattle}
            setCurrentBattle={setCurrentBattle}
            deleteRobot={deleteRobot}
          />
        ))}
    </div>
  );
}

export default withRouter(Robot);
