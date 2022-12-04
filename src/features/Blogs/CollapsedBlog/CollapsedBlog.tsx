import React, { useEffect, useRef, useState } from 'react';

import { NavLink } from 'react-router-dom';

import { EditMenuBlog } from '../EditMenuBlog';

import style from './CollapsedBlog.module.scss';

import { ReactComponent as BLOG_AVATAR_SVG } from 'assets/img/blog/blog.svg';
import { ReactComponent as EDIT_MENU_TO_BLOG_SVG } from 'assets/img/blog/iconMenu.svg';
import { ROUTE_TO_BLOGS } from 'common/constants';
import { IBlogResponse } from 'common/types/api/Blogs';

export const CollapsedBlog: React.FC<IBlogResponse> = props => {
  const { name, id, websiteUrl, description } = props;
  const [isClickEditMenuBlog, setIsClickEditMenuBlog] = useState(false);
  const refEditMenuSVG = useRef<SVGSVGElement | null>(null);
  const onEditMenuToBlogSvgClick = (): void =>
    setIsClickEditMenuBlog(prevState => !prevState);

  useEffect(() => {
    const closeEditBlogMenu = (event: Event): void => {
      if (
        event.composedPath()[0] !== refEditMenuSVG.current &&
        event.composedPath()[1] !== refEditMenuSVG.current
      )
        setIsClickEditMenuBlog(false);
    };

    document.body.addEventListener('click', closeEditBlogMenu);

    return () => {
      document.body.removeEventListener('click', closeEditBlogMenu);
    };
  }, []);

  return (
    <div className={style.blogCollapsed}>
      <div className={style.blogIMG}>
        <BLOG_AVATAR_SVG />
      </div>
      <div className={style.blogCollapsed__main}>
        <div className={style.blogCollapsed__actions}>
          <NavLink to={`${ROUTE_TO_BLOGS}/${id}`} className={style.blogCollapsed__title}>
            {name}
          </NavLink>
          <EDIT_MENU_TO_BLOG_SVG
            ref={refEditMenuSVG}
            className={style.blogCollapsed__menuSVG}
            onClick={onEditMenuToBlogSvgClick}
          />
          {isClickEditMenuBlog && <EditMenuBlog blogID={id} />}
        </div>
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
