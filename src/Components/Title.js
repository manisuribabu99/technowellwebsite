import React from "react";

export default function Title(props){
  return (
    <div className="title">
      <div className="title-text">
        <h1 className='titletextcolors'>{props.text}</h1>
      </div>
    </div>
  );
};
