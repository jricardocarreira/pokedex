import React from 'react';
import { IconContainer } from '../iconContainer/IconContainer';
import { themeTogglerButtonStyle } from './themeTogglerButton.css';
import { useTheme } from '../../contexts/themeContext';

export const ThemeTogglerButton = ({ lightIcon, darkIcon }) => {
  const { theme, toggleTheme } = useTheme();

  const lightIcon = "/src/icons/light-icon.svg";
  const darkIcon = "/src/icons/dark-icon.svg";
  const iconSrc = theme === 'light' ? lightIcon : darkIcon;

  return (
    <button className={themeTogglerButtonStyle} onClick={toggleTheme}>
      <IconContainer src={iconSrc} alt={`Toggle theme icon (${theme} mode)`} />
    </button>
  );
};