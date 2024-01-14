import React from 'react';
import { IconContainer } from '../iconContainer/IconContainer';
import { themeTogglerButtonStyle } from './themeTogglerButton.css';
import { ThemeContext } from '../../contexts/themeContext';
import { useContext } from 'react';

export const ThemeTogglerButton = () => {

  const { theme, updateTheme } = useContext(ThemeContext);

  const toggleFunction = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    updateTheme(newTheme)
  }

  const lightIcon = "/src/icons/light-icon.svg";
  const darkIcon = "/src/icons/dark-icon.svg";
  const iconSrc = theme === 'light' ? lightIcon : darkIcon;

  return (
    <button className={themeTogglerButtonStyle} onClick={toggleFunction}>
      <IconContainer src={iconSrc} alt={`Toggle theme icon (${theme} mode)`} />
    </button>
  );
};