import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import style from './EditMenuBlog.module.scss';

import { useAppDispatch } from 'app/hooks';
import { ReactComponent as EditSVG } from 'assets/img/blog/editMenu/editPen.svg';
import { ReactComponent as TrashSVG } from 'assets/img/blog/editMenu/trash.svg';
import { ROUTE_TO_EDIT_BLOG } from 'common/constants';
import { deleteBlog } from 'features';

interface IEditMenuBlog {
  blogID: string;
}

export const EditMenuBlog: FC<IEditMenuBlog> = ({ blogID }) => {
  const dispatch = useAppDispatch();
  const onDivDeleteBlogClick = (): any => dispatch(deleteBlog(blogID));

  return (
    <div className={style.editMenuBlog}>
      <div
        className={style.editMenuBlog__delete}
        onClick={onDivDeleteBlogClick}
        role="presentation"
      >
        <TrashSVG />
        <span>Delete</span>
      </div>
      <NavLink
        to={`${ROUTE_TO_EDIT_BLOG}/${blogID}`}
        className={style.editMenuBlog__edit}
      >
        <EditSVG />
        <span>Edit</span>
      </NavLink>
      <div className={style.arrowUp} />
    </div>
  );
};
