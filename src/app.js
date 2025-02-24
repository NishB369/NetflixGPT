import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);

export default App;
