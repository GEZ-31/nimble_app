import { useState } from "react";
import { applyJobs } from "../../api";
import { Alert, Button, Card, Form } from "react-bootstrap";

const JobCard = ({ job, candidato, loadingCandidato }) => {
  const [repoURL, setRepoURL] = useState("");
  const [estado, setEstado] = useState(null);
  const [variante, setVariante] = useState("success");
  const [loading, setLoading] = useState(false);

  const handleApplyJob = async () => {
    if (!candidato.uuid || !candidato.candidateId) {
      setEstado("Error: Los datos del candidato no están disponibles.");
      setVariante("danger");
      return;
    }
    if (!repoURL) {
      setEstado("Por favor, ingresa la URL de tu repositorio de Github.");
      setVariante("danger");
      return;
    }
    setLoading(true);
    try {
      const response = await applyJobs({
        uuid: candidato.uuid,
        candidateId: candidato.candidateId,
        jobId: job.id,
        repoURL: repoURL,
      });
      console.log("Respuesta de la aplicación:", response);
      setEstado("Aplicación exitosa");
      setVariante("success");
      setRepoURL("");
    } catch (error) {
      console.error("Error al aplicar a la vacante:", error);
      setEstado("Error al aplicar a la vacante");
      setVariante("danger");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Ingresa la URL de tu repositorio de Github"
            value={repoURL}
            onChange={(e) => setRepoURL(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleApplyJob} disabled={loading || loadingCandidato || !candidato.uuid}>
          {loading ? "Aplicando..." : "Aplicar a la vacante"}
        </Button>
        {estado && (
          <Alert variant={variante} className="mt-3">
            {estado}
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
};

export default JobCard;
