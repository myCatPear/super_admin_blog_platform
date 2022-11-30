import React from 'react';

import { NavLink } from 'react-router-dom';

import style from './CollapsedBlog.module.scss';

import { ReactComponent as BLOG_AVATAR_SVG } from 'assets/img/blog/blog.svg';
import { ROUTE_TO_BLOGS } from 'common/constants';
import { IBlogResponse } from 'common/types/api';

export const CollapsedBlog: React.FC<IBlogResponse> = props => {
  const { name, id, websiteUrl, description } = props;

  return (
    <div className={style.blogCollapsed}>
      <div className={style.blogIMG}>
        <BLOG_AVATAR_SVG />
      </div>
      <div className={style.blogCollapsed__main}>
        <NavLink to={`${ROUTE_TO_BLOGS}/${id}`} className={style.blogCollapsed__title}>
          {name}
        </NavLink>
        <div className={style.blogCollapsed__description}>
          Website:
          <a href={websiteUrl} className={style.blogCollapsed__link}>
            {websiteUrl}
          </a>
        </div>
        <p className={style.blogCollapsed__text}>{description}</p>
      </div>
    </div>
  );
};
