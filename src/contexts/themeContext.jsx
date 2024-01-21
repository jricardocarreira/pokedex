import { createContext, useState } from 'react';

export const ThemeContext = createContext({ });

export const ThemeProvedor = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const updateTheme = (newTheme) => {
    setTheme(newTheme)
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
{/*       <ThemeProvider theme={themes[theme]} key={theme}>
 */}        {children}
{/*       </ThemeProvider>
 */}    </ThemeContext.Provider>
  );
};