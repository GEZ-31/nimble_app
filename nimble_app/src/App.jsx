import { useEffect, useState } from "react";
import { getData } from "../api";

function App() {
  const [candidato, setCandidato] = useState(null);

  useEffect(() => {
    getData()
    .then((data) => setCandidato(data))
    .catch((error) => console.error("Error al obtener mis datos:", error));
    
  }, []);

  return (
    <div>
      <h1>Datos del candidato</h1>
      {candidato ? (
        <p>{JSON.stringify(candidato)}</p>
      ) : (
        "Cargando..."
      )}
    </div>

  );
}

export default App;