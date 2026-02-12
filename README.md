# Portfolio Website

This is a **fullstack portfolio website** built with:

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express
- **Database:** Supabase (PostgreSQL)

The project is structured to separate **frontend** and **backend** for maintainability and scalability.

---

2. Setup Backend (Express + Supabase)

Go to server folder:

cd server

Install dependencies:

npm install

Create a .env file with your Supabase credentials:

SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_supabase_service_key
PORT=5000

Start the backend server (with live reload):

npm run dev

Server runs at http://localhost:5000

Test with: GET http://localhost:5000/projects

3. Setup Frontend (React + Tailwind)

Go to client folder:

cd ../client/portfolio-client

Install dependencies:

npm install

Make sure Tailwind CSS is installed and configured. The index.css should include:

@tailwind base;
@tailwind components;
@tailwind utilities;

Start frontend:

npm run dev

Frontend runs at http://localhost:5173

Ensure backend is running to fetch projects dynamically.

4. Connect Frontend to Backend

In client/src/api.js, set the API base URL:

const BASE_URL = "http://localhost:5000";

Example API call:

export const getProjects = async () => {
const response = await fetch(`${BASE_URL}/projects`);
return response.json();
};

5. Project Deployment

Frontend: Build with npm run build inside client/portfolio-client

Backend: Deploy Express app to Heroku, Render, Railway, or Vercel

Database: Hosted on Supabase

Development Workflow

Design components first (Navbar, Hero, About, Projects, Contact)

Use dummy data before connecting to backend

Once design is ready, connect API endpoints

Test responsiveness on desktop and mobile

Add new projects via backend API (POST /projects)

Git Best Practices

Ignore unnecessary files: .env, node_modules, dist, build

Single .gitignore in root covers both frontend and backend

Future Enhancements

Smooth scrolling with active section highlighting

Add authentication for admin project submissions

Add blog posts dynamically from Supabase

Dark mode support using Tailwind
