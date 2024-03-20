import React, { useState } from 'react';
import { IconContainer } from '../iconContainer/IconContainer';
import { themeTogglerButtonStyle } from './themeTogglerButton.css';

export const ThemeTogglerButton = ({ onToggleTheme }) => {

  const lightIcon = "/light-icon.svg";
  const darkIcon = "/dark-icon.svg";

  const [iconSrc, setIconSrc] = useState(lightIcon);

  const handleToggleClick = () => {
    const newIconSrc = iconSrc === lightIcon ? darkIcon : lightIcon;
    setIconSrc(newIconSrc);

    onToggleTheme();
  };

  return (
    <button className={themeTogglerButtonStyle} onClick={handleToggleClick}>
      <IconContainer src={iconSrc} alt={`Toggle theme mode`} />
    </button>
  );
};