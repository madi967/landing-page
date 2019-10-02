import React from "react";
import Timer from "react-compound-timer";

export default function Timer_() {
  const objectiveDate = new Date("10 octobre 2019");
  return (
    <div className="carcam_timer">
      <div style={{ marginBottom: 10 }}>Nouveau site dans </div>
      <Timer
        initialTime={objectiveDate.getTime() - new Date().getTime()}
        direction="backward"
      >
        <Timer.Days /> jours <Timer.Hours /> heures <Timer.Minutes /> minutes{" "}
        <Timer.Seconds /> secondes
      </Timer>
    </div>
  );
}
