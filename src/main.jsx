import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home.jsx'
import Quiz from './pages/quiz/Quiz.jsx'
import About from './pages/About/About.jsx'
import NotFound from './pages/not-found/NotFound.jsx'
import Enfermedades from './pages/Enfermedades/Enfermedades.jsx'
import Trombosis from './pages/Enfermedades/Trombosis/Trombosis.jsx'
import Hipertension from './pages/Enfermedades/Hipertension/Hipertension.jsx'
import Arritmia from './pages/Enfermedades/Arritmia/Arritmia.jsx'
import Login from './pages/Crud/Login/Login.jsx'
import Register from './pages/Crud/Register/Register.jsx'
import Dashboard from "./pages/Crud/Dashboard/Dashboard.jsx";
import Texto3DTest from './Texto3DTest';





import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from './components/PrivateRoute.jsx'
import Leaderboard from './pages/quiz/Leaderboard.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            {/* 🔒 Rutas protegidas */}
            <Route path='/quiz' element={
              <PrivateRoute>
                <Quiz />
              </PrivateRoute>
            } />

            <Route path='/dashboard' element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />

            <Route path='/medallero' element={
              <PrivateRoute>
                <Leaderboard />
              </PrivateRoute>
            } />


            <Route path='/enfermedades' element={<Enfermedades />}>
              <Route path='/enfermedades/trombosis' element={<Trombosis />} />
              <Route path='/enfermedades/hipertension' element={<Hipertension />} />
              <Route path='/enfermedades/arritmia' element={<Arritmia />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Texto3DTest />
  </React.StrictMode>
);
export default function App() {
  return <Texto3DTest />;
}