import React, { useState, useEffect } from "react";
import StarWarsCard from "./Character";
import axios from "axios";

export default function StarWars() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    const getChar = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/people/");
        const person = response.data.results;
        console.log(response);
        setChar(person);
      } catch (error) {
        console.log("Star Wars Machine broke: ", error);
      }
    };
    getChar();
  }, []);

  return (
    <>
      {char.map((person) => (
        <StarWarsCard info={person} />
      ))}
    </>
  );
}
