import React from 'react';
import { IconContainer } from '../iconContainer/IconContainer';
import { themeTogglerButtonStyle } from './themeTogglerButton.css';
import { ThemeContext } from '../../contexts/themeContext';
import { useContext } from 'react';

export const ThemeTogglerButton = ({ onToggleTheme }) => {

/*   const lightIcon = "/src/icons/light-icon.svg";
  const darkIcon = "/src/icons/dark-icon.svg";
  const iconSrc = theme === 'light' ? lightIcon : darkIcon; */

  return (
    <button className={themeTogglerButtonStyle} onClick={onToggleTheme}>
      <IconContainer src="/src/icons/light-icon.svg" alt={`Toggle theme icon light mode)`} />
    </button>
  );
};