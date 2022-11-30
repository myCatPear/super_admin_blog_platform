import React from 'react';

import style from './MainPanel.module.scss';

interface IMainPanel {
  children: React.ReactNode;
}

export const MainPanel: React.FC<IMainPanel> = ({ children }) => {
  return <div className={`${style.mainPanel}`}>{children}</div>;
};
