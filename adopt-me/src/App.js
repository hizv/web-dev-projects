import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Ka",
      animal: "Dog",
      breed: "Afghan Hound",
    }),
    React.createElement(Pet, {
      name: "Ki",
      animal: "Cat",
      breed: "Kitty",
    }),
    React.createElement(Pet, { name: "Ko", animal: "Rabbit", breed: "Bunny" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
