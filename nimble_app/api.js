const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getData() {
    const email = "geor2015zamboni@gmail.com"
    try {
        const response = await fetch(
            `${BASE_URL}/api/candidate/get-by-email?email=${email}`);
        if (!response.ok) {
            throw new Error(`Error en la petición de datos`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en el fetch:", error);
        throw error;
    }
}
export async function getJobs() {
    try {
        const response = await fetch(
            `${BASE_URL}/api/jobs/get-list`);
        if (!response.ok) {
            throw new Error(`Error en la petición de vacantes`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en el fetch:", error);
        throw error;
    }
}
export async function applyJobs({uuid, jobId, candidateId, repoURL}) {
    try {
        const response = await fetch(
        `${BASE_URL}/api/candidate/apply-to-job`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                uuid,
                jobId,
                candidateId,
                repoURL,
            }),
        });
        if (!response.ok) {
            throw new Error(`Error en la aplicación a la vacante`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en el fetch:", error);
        throw error;
    }
}