import { useEffect, useState } from "react";
import { getProjects } from "./api";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <a href={p.link} target="_blank">View Project</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
