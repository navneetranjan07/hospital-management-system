# Hospital Management System Frontend

This is a modern, responsive frontend application built with React for managing hospital operations. It provides user authentication, protected routes for core features like viewing patients, doctors, appointments, and hospital information. The app is designed for hospital staff to efficiently handle daily tasks.

## Features

- **User Authentication**: Secure login, registration, forgot password, and email verification flows.
- **Protected Dashboard**: Access to hospital info, patient management, doctor profiles, and appointment scheduling (requires authentication).
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS.
- **Smooth Animations**: Enhanced user experience with Framer Motion.
- **API Integration Ready**: Uses Axios for backend communication (backend not included in this repo).
- **Routing**: Client-side navigation with React Router DOM.

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React, React Icons
- **Animations**: Framer Motion
- **HTTP Client**: Axios
- **Other**: PostCSS, Autoprefixer

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```
   git clone <your-repo-url>
   cd hospital-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure environment variables (if needed):
   - Create a `.env` file in the root directory.
   - Add your backend API URL, e.g., `VITE_API_URL=http://localhost:5000/api`.

## Running the Application

### Development Server
Start the development server with hot reloading:
```
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
Build the optimized production version:
```
npm run build
```
The output will be in the `dist` directory.

### Preview Production Build
Preview the production build locally:
```
npm run preview
```

## Project Structure

```
hospital-frontend/
├── public/
│   └── vite.svg          # Default Vite logo (replace as needed)
├── src/
│   ├── assets/           # Images for backgrounds and doctors
│   │   ├── backgrounds/
│   │   └── doctors/
│   ├── components/       # Reusable components
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/            # Page components
│   │   ├── auth/         # Authentication pages
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   └── EmailVerification.jsx
│   │   ├── Appointments.jsx
│   │   ├── Doctors.jsx
│   │   ├── HospitalInfo.jsx
│   │   └── Patients.jsx
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
├── postcss.config.js     # PostCSS configuration
└── README.md             # This file
```

## Usage

1. **Public Routes**:
   - `/login`: User login form.
   - `/register`: New user registration.
   - `/forgot-password`: Password recovery.
   - `/email-verification`: Verify email after registration.

2. **Protected Routes** (after login):
   - `/home`: Hospital information overview.
   - `/patients`: Manage patient records.
   - `/doctors`: View doctor profiles.
   - `/appointments`: Schedule and view appointments.

The app redirects unauthenticated users to the login page. Protected routes use a simple auth check (extend with JWT or similar for production).

## Backend Integration

This frontend assumes a backend API for data operations (e.g., user auth, CRUD for patients/doctors/appointments). Update API endpoints in the relevant components (e.g., using Axios in auth and data pages).

Example API endpoints (customize as per your backend):
- `POST /api/auth/login`
- `GET /api/patients`
- `POST /api/appointments`

## Deployment

- **Vercel**: Push to GitHub and connect to Vercel. The `vercel.json` file is pre-configured for easy deployment.
- **Netlify/Vercel/Netlify**: Build with `npm run build` and deploy the `dist` folder.
- Ensure environment variables are set in the deployment platform.

## Contributing

1. Fork the project.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

This project is open-source and available under the MIT License.

## Contact

For questions or issues, open a GitHub issue or contact the maintainer.

---

*Built with ❤️ for efficient hospital management.*

👨‍💻 Author

Navneet Ranjan
Backend Developer — CityCare Multispeciality Hospital Project

📧 Email: navnitranjan919904@gmail.com

🔗 GitHub: navneetranjan07