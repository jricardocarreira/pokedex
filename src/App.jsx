import { useState } from "react";
import { AppRoutes } from "./routes"
import "./styles/app.css"
import { darkTheme } from "./styles/themes/darkTheme.css";
import { lightTheme } from "./styles/themes/lightTheme.css";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkTheme((currentValue) => !currentValue);
  };

  return (
    <div id="app" className={isDarkTheme ? darkTheme : lightTheme}>
      <AppRoutes onToggleTheme={handleToggleTheme} />
    </div>
  );
};

export default App
