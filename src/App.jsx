import { ThemeProvedor } from "./contexts/themeContext"
import { AppRoutes } from "./pages/routes"
import "./styles/app.css"
import { themes } from "./styles/constants.css"

function App() {

  return (
    <ThemeProvedor theme={themes}>
      <AppRoutes />
    </ThemeProvedor>
  )
}

export default App
