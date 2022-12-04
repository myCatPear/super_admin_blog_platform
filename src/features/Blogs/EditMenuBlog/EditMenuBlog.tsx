import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import style from './EditMenuBlog.module.scss';

import { useAppDispatch } from 'app/hooks';
import { ReactComponent as EditSVG } from 'assets/img/blog/editMenu/editPen.svg';
import { ReactComponent as TrashSVG } from 'assets/img/blog/editMenu/trash.svg';
import { ROUTE_TO_EDIT_BLOGS } from 'common/constants';
import { deleteBlog } from 'features';

interface IEditMenuBlog {
  blogID: string;
}

export const EditMenuBlog: FC<IEditMenuBlog> = ({ blogID }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onDivDeleteBlogClick = (): any => dispatch(deleteBlog(blogID));
  const onDivEditBlogClick = (): void => navigate(ROUTE_TO_EDIT_BLOGS);

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
      <div
        className={style.editMenuBlog__edit}
        onClick={onDivEditBlogClick}
        role="presentation"
      >
        <EditSVG />
        <span>Edit</span>
      </div>
      <div className={style.arrowUp} />
    </div>
  );
};
