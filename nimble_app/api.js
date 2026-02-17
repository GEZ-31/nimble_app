const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getData() {
    const email = "geor2015zamboni@gmail.com"
    try {
        const response = await fetch(
            `${BASE_URL}/api/candidate/get-by-email?email=${email}`);
        if (!response.ok) {
            throw new Error(`Error en la petición`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en el fetch:", error);
        throw error;
    }
}
