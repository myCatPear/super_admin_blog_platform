import React from 'react';

import style from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>Blogger Platform</h1>
    </header>
  );
};
