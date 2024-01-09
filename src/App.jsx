import { ThemeProvider } from "./contexts/themeContext"
import { AppRoutes } from "./pages/routes"
import "./styles/app.css"
import { themes } from "./styles/constants.css"

function App() {

  return (
    <ThemeProvider theme={themes}>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
