import React, { useState, useEffect } from "react";
import moment from "moment";
import "./RobotProfile.scss";

function RobotProfile(props) {
  const { robot, currentBattle, setCurrentBattle, deleteRobot } = props;
  return (
    <div className="robot-profile">
      <div style={{ backgroundColor: `${robot.color}` }} className="robot">
        <h1>{robot?.name}</h1>
      </div>
      <h5>Attack: {robot?.attack} </h5>
      <h5>Defense: {robot?.defense}</h5>
      <h5>Color: {robot?.color}</h5>
      <h5>Special Move: {robot?.hasSuperMove}</h5>
      <h5>Created On: {moment(robot?.createdAt).format("MMM Do YY")}</h5>
      <button onClick={() => deleteRobot(robot._id)}>Delete</button>
      <br />
      {!currentBattle.includes(robot) &&
        currentBattle.length !== 2 && (
          <button
            onClick={() => setCurrentBattle(oldArray => [...oldArray, robot])}
          >
            Battle - Participant {currentBattle.length + 1}
          </button>
        )}
    </div>
  );
}

export default RobotProfile;
