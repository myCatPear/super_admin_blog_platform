import React from 'react';

import style from './MainSection.module.scss';

interface IMainSection {
  children: React.ReactNode;
}

export const MainSection: React.FC<IMainSection> = ({ children }) => {
  return <div className={style.mainSection}>{children}</div>;
};
