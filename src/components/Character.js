// Write your Character component here
import React from "react";
import "../App.css";
import styled from "styled-components";

const Styledbox = styled.div`
  display: flex;
  justify-content: center;
`;
const Styledtext = styled.p`
  color: #990000;
`;
const Styledcard = styled.div`
  width: 35%;
  background-color: #000000;
  border: 5px solid white;
  border-radius: 30px;
`;
const Styledname = styled.h1`
  color: #ffe81f;
`;

const StarWarsCard = (props) => {
  return (
    <Styledbox>
      <Styledcard className="charCard">
        <div className="skew">
          <Styledname className="charName">{props.info.name}</Styledname>
          <Styledtext>
            {props.info.name} was born in the year {props.info.birth_year}
          </Styledtext>
          <Styledtext>
            {(() => {
              switch (props.info.gender) {
                case "male":
                  return (
                    <p>
                      He is {props.info.height} units tall and weighs{" "}
                      {props.info.mass} units
                    </p>
                  );
                case "female":
                  return (
                    <p>
                      She is {props.info.height} units tall and weighs... well
                      that would be rude to say
                    </p>
                  );
                default:
                  return (
                    <p>
                      It is {props.info.height} units tall and weighs{" "}
                      {props.info.mass} units
                    </p>
                  );
              }
            })()}
          </Styledtext>
        </div>
      </Styledcard>
    </Styledbox>
  );
};
export default StarWarsCard;
