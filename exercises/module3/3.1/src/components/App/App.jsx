import React, { useState } from "react";
import Display from "components/Display/Display";
import Button from "components/Button/Button";
import useLocalStorage from "hooks/useLocaleStorage";
import Loading from "components/Loading/Loading";

const STORAGE_COUNTER_KEY = "counter";

const App = () => {
  const [counter, setCounter] = useLocalStorage(STORAGE_COUNTER_KEY, 0);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const changeCount = (delta) => {
    setCounter(counter + delta);
  };

  return loading ? (
    <Loading />
  ) : (
    <div>
      <Display counter={counter} />
      <Button changeCount={changeCount} delta={1} text="plus" />
      <Button changeCount={changeCount} delta={-counter} text="zero" />
      <Button changeCount={changeCount} delta={-1} text="minus" />
    </div>
  );
};

export default App;
