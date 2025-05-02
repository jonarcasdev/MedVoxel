import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home.jsx'
import Quiz from './pages/quiz/Quiz.jsx'
import About from './pages/About/About.jsx'
import NotFound from './pages/not-found/NotFound.jsx'
import Enfermedades from './pages/Enfermedades/Enfermedades.jsx'
import Trombosis from './pages/Enfermedades/Trombosis/Trombosis.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layout/layout.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/enfermedades' element={<Enfermedades />}>
          <Route path='/enfermedades/trombosis' element={<Trombosis />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter >
)
