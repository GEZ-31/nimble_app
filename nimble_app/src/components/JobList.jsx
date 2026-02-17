import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { getData, getJobs } from "../../api";
import { Col, Container, Row } from "react-bootstrap";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [candidato, setCandidato] = useState({
    uuid: "",
    candidateId: "",
    applicationId: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [loadingCandidato, setLoadingCandidato] = useState(true);
  const [errorCandidato, setErrorCandidato] = useState(null);
  useEffect(() => {
    getJobs()
      .then((data) => {
        setJobs(data);
        console.log("Jobs:", data);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    getData()
      .then((data) => {
        setCandidato({
          uuid: data.uuid,
          candidateId: data.candidateId,
          applicationId: data.applicationId,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        });
        setLoadingCandidato(false);
      })
      .catch((error) => {
        console.error("Error al obtener mis datos:", error);
        setErrorCandidato("No se pudo cargar tus datos");
        setLoadingCandidato(false);
      });
  }, []);
  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <h2 className="mb-4 text-center">Vacantes Disponibles</h2>
      {loadingCandidato && (
        <div className="alert alert-info">Cargando tus datos...</div>
      )}
      {errorCandidato && (
        <div className="alert alert-danger">{errorCandidato}</div>
      )}
      <Row className="w-100 justify-content-center">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <Col key={job.id} xs={12} md={6} lg={4} className="mb-4">
              <JobCard job={job} candidato={candidato} loadingCandidato={loadingCandidato} />
            </Col>
          ))
        ) : (
          <Col>
            <p>No hay vacantes disponibles</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default JobList;
