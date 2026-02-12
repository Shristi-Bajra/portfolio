import { useEffect, useState } from "react";
import { getProjects } from "./api";
import Home from "./pages/Home";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
