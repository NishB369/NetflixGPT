import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body/Body";

const App = () => {
  return (
    <>
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);

export default App;
