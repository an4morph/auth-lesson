import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home'
import { NotFoundPage } from './pages/not-found'
import { LoginPage } from './pages/auth/login'
import { SignUpPage } from './pages/auth/sign-up'
import { MainLayout } from './components/layout/main'
import { AuthLayout } from './components/layout/auth'
import { Theme } from './styles/theme'


function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route 
              index
              element={<HomePage />} 
            />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route 
              path="/auth/login"
              element={<LoginPage />} 
            />
            <Route 
              path="/auth/signup"
              element={<SignUpPage />}
            />
          </Route>
          <Route 
            path="*"
            element={<NotFoundPage />} 
          />
        </Routes>
      </BrowserRouter>
    </Theme>
  )
}

export default App