import React from "react";
import { useState } from "react";

const Create = (props) => {
  //   const { person } = props;
  //   console.log(props);
  const [bday, setBday] = useState(props);

  const increaseBday = () => {
    // console.log(bday);
    console.log(setBday({ ...bday, age: bday.age + 1 }));
  };

  return (
    <div>
      <p>
        <b>
          {props.fName} {props.lName}
        </b>
      </p>
      <p>Age: {bday.age}</p>
      <p>Hair Color:{props.hairColor} </p>
      <button onClick={increaseBday}>
        Birthday Button for {props.fName} {props.lName}
      </button>
    </div>
  );
};

export default Create;
