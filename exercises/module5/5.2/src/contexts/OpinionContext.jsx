import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [opinions, setOpinions] = useState([{id: uuidv4(), title: "Default title", vote:0}]);

  const sortedOpinions = opinions.sort((a, b) => b.vote - a.vote);

  const increaseOpinion = (opinionID) => {
    const increasedOpinion = opinions.find(
      (opinion) => (opinion.id = opinionID)
    );

    increasedOpinion.id = increaseOpinion.id + 1;
  };

  const addOpinion = (titleOpi) => {
    setOpinions(opinions.concat({ id: uuidv4(), title: titleOpi, vote: 0 }));
  };

  const exposedValue = {
    sortedOpinions,
    increaseOpinion,
    addOpinion
  };

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };
