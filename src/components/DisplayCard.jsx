import React from "react";

const DisplayCard = ({ fullName, bio, imgSrc, profession }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <img src={imgSrc} alt="Profile" width="150" />
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>
        <strong>Profession:</strong> {profession}
      </p>
    </div>
  );
};

export default DisplayCard;
