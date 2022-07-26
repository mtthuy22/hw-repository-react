import React from "React";

const Actor = ({ name, as }) => {
  return (
    <div className="movie__actor">
      <p><span className="bold_text">{name}</span> <br/>as {as} </p>
    </div>
  );
};

export default Actor;
