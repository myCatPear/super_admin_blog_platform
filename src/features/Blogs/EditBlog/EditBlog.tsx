import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import style from './EditBlog.module.scss';

import { ReactComponent as BackArrowSVG } from 'assets/img/blog/backArrow.svg';
import { ReactComponent as AvatarSVG } from 'assets/img/blog/photo_size_select_actual.svg';
import { ReactComponent as TriangleSVG } from 'assets/img/blog/triangle.svg';
import { ROUTE_TO_BLOGS } from 'common/constants';
import commonStyle from 'common/style/CommonStyle.module.scss';

export const EditBlog: FC = () => {
  return (
    <div className={style.addBlog}>
      <div className={style.addBlog__wrapper}>
        <div className={style.header}>
          <h2 className={style.addBlog__title}>Blogs</h2>
          <TriangleSVG />
          <span className={style.header__action}>Add</span>
        </div>
        <hr className={commonStyle.line} />
        <div className={style.addBlog__backToBlogs}>
          <BackArrowSVG />
          <NavLink to={ROUTE_TO_BLOGS} className={style.addBlog__backToBlogsLink}>
            Back to blogs
          </NavLink>
        </div>
        <div className={style.addBlog__img}>
          <AvatarSVG className={style.addBlog__avatar} />
        </div>
        <div className={style.addBlog__button}>
          <button type="button" className={commonStyle.button}>
            Add blog
          </button>
        </div>
      </div>
    </div>
  );
};
