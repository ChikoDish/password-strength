import React from "react";
import zxcvbn from "zxcvbn";

const StrengthMeter = ({ password }) => {
  const strength = zxcvbn(password);
  let score = (strength.score * 100) / 4;
  const progressColor = () => {
    switch (score) {
      case 0:
        return "#828282";
      case 25:
        return "#EA1111";
      case 50:
        return "#FFAD00";
      case 75:
        return "#9bc158";
      case 100:
        return "#00b500";
      default:
        return "none";
    }
  };
  const textColor = () => {
    switch (score) {
      case 0:
        return "Very Weak";
      case 25:
        return "Weak";
      case 50:
        return "Fair";
      case 75:
        return "Good";
      case 100:
        return "Strong";
      default:
        return "none";
    }
  };
  const progressStyle = () => ({
    width: `${score}%`,
    height: "7px",
    background: progressColor(),
  });
  return (
    <>
      <div className="progress" style={{ height: "7px" }}>
        <div className="progress-bar" style={progressStyle()}></div>
      </div>
      <p style={{ color: progressColor() }}>{textColor()}</p>
    </>
  );
};

export default StrengthMeter;
