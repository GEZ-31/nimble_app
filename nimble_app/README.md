# Miniapp de Aplicación a Vacantes

Esta es una mini aplicación desarrollada como parte de una prueba técnica.  
Permite obtener una lista de ofertas de trabajo y aplicar enviando la URL de un repositorio como parte de la postulación. 
La app está configurada para que sólo se pueda aplicar enviando los datos obtenidos de la API del candidato especificado (el candidato seleccionado soy yo), se agrega sólo la URL de mi repositorio de Github (de esta miniapp) y al presionar el botón se agrega un POST a la API de Nimble con mis datos de postulación.

## 🚀 Tecnologías utilizadas
- React
- Vite
- React Bootstrap
- Fetch API para comunicación con backend

## 📌 Funcionalidad
- Muestra una lista de vacantes obtenidas desde la API.
- Cada vacante se renderiza en una card con título y botón de aplicar.
- El candidato puede ingresar la URL de su repositorio en un campo de texto.
- Al presionar **Aplicar**, se envía un POST a la API con:
  - `uuid`
  - `candidateId`
  - `jobId`
  - `repoUrl`

## ▶️ Cómo ejecutar
1. Clonar el repositorio:
   ```bash
   git clone <url-del-repo>
2. Instalar dependencias
    npm install
3. Levantar el proyecto
    npm run dev