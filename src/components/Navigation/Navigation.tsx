import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import style from './Navigation.module.scss';

import { ReactComponent as GridIcon } from 'assets/img/navigation/grid_view.svg';
import { ReactComponent as ListIcon } from 'assets/img/navigation/list.svg';
import { ROUTE_TO_BLOGS, ROUTE_TO_POSTS } from 'common/constants';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const isCurrentRouteBlogs = location.pathname === ROUTE_TO_BLOGS;
  const isCurrentRoutePosts = location.pathname === ROUTE_TO_POSTS;

  return (
    <nav className={style.nav}>
      <ul className={style.menu}>
        <li className={style.menu__item}>
          <ListIcon
            className={`${style.svg} ${isCurrentRouteBlogs && style.activeSVG}`}
          />
          <NavLink
            className={`${style.menu__link} ${isCurrentRouteBlogs && style.activeLink}`}
            to={ROUTE_TO_BLOGS}
          >
            Blogs
          </NavLink>
          {isCurrentRouteBlogs && <span className={style.menu__activeBorder} />}
        </li>
        <li className={style.menu__item}>
          <GridIcon
            className={`${style.svg} ${isCurrentRoutePosts && style.activeSVG}`}
          />
          <NavLink
            className={`${style.menu__link} ${isCurrentRoutePosts && style.activeLink}`}
            to="/posts"
          >
            Posts
          </NavLink>
          {isCurrentRoutePosts && <span className={style.menu__activeBorder} />}
        </li>
      </ul>
    </nav>
  );
};
