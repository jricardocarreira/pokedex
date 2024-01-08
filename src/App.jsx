import { ThemeProvider } from "./contexts/themeContext"
import { AppRoutes } from "./pages/routes"
import "./styles/app.css"

function App() {

  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
