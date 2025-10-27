import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>My CI/CD test app deployed to netlify...</div>
      <h1>Trigger</h1>

      <h2>Assignment presentation</h2>
    </>
  );
}

export default App;
