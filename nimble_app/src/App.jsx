import { useEffect, useState } from "react";
import { getData, getJobs} from "../api";

function App() {
  const [candidato, setCandidato] = useState(
    {
    uuid: "",
    candidateId: "",
    applicationId: "",
    firstName: "",
    lastName: "",
    email: ""
    }
  );
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getData()
    .then((data) => setCandidato(
      {
        uuid: data.uuid,
        candidateId: data.candidateId,
        applicationId: data.applicationId,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email
      }
    ))
    .catch((error) => console.error("Error al obtener mis datos:", error));
    
  }, []);
  useEffect(() => {
    getJobs()
      .then((data) => {
        setJobs(data);
        console.log("Jobs:", data);
      })
      .catch((err) => console.error(err));
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