import React from "react";
import DisplayCard from "./DisplayCard";

const Profile = ({ person, shows }) => {
  return (
    <>
      {shows && (
        <DisplayCard
          fullName={person.fullName}
          bio={person.bio}
          imgSrc={person.imgSrc}
          profession={person.profession}
        />
      )}
    </>
  );
};

export default Profile;
