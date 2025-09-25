# Jarurat Care

A simple and responsive dashboard for viewing and managing patient records, built with React and styled with Tailwind CSS. This project fetches data mock JSON.

---

## Live Demo

**Live Site:** [https://jarurat-patient-dashboard.vercel.app/](https://jarurat-patient-dashboard.vercel.app/)

---

## Features

- **View Patients:** Fetches and displays a list of patients in a clean, responsive grid.
- **Live Search:** Instantly filter patients by name using the search bar.
- **Add Patients:** A simple form to add new patients to the list (local state only).
- **Responsive Design:** Looks great on both desktop and mobile devices.

---

## Tech Stack

- **React** (Vite)
- **React Router DOM** for page navigation
- **Tailwind CSS** for styling
- **Lucide React** for icons

---

## Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

You need to have **Node.js** (v14 or higher) installed on your computer.

### Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/Shubham-567/JaruratCare-Patient-Dashboard.git
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd JaruratCare-Patient-Dashboard
    ```

3.  **Install the dependencies:**

    ```sh
    npm install
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

Your application should now be running! Open your browser and go to `http://localhost:5173` (or the address provided by Vite).

---

## Project Structure

The project follows a standard React application structure.

-   **`src/components`**: Contains reusable UI components like `Navbar`, `Footer`, and `PatientCard`.
-   **`src/pages`**: Contains the main page components for different routes, such as `Home`, `About`, and `PatientPage`.
-   **`src/constants.jsx`**: Stores constants and mock data used throughout the application.
-   **`App.jsx`**: The main application component where routing is handled.


```plaintext

JaruratCare-Patient-Dashboard/
├── src
│   ├── components
│   │   ├── AddPatientModal.jsx
│   │   ├── Button.jsx
│   │   ├── CallToAction.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── PatientCard.jsx
│   │   ├── PatientDetailsModal.jsx
│   │   └── TeamCard.jsx
│   ├── pages
│   │   ├── About.jsx
│   │   ├── Home.jsx
│   │   └── PatientPage.jsx
│   ├── App.jsx
│   └── constants.jsx
├── index.html
├── LICENSE
├── package.json
├── README.md
├── vercel.json
└── vite.config.js
```

---

## License

This project is licensed under the **MIT License**.
