import React, { FC, useState } from 'react';

import { NavLink } from 'react-router-dom';

import style from './AddBlog.module.scss';
import { NewBlogDescription } from './NewBlogDescription/NewBlogDescription';

import { useAppDispatch } from 'app/hooks';
import { ReactComponent as BackArrowSVG } from 'assets/img/blog/backArrow.svg';
import { ReactComponent as AvatarSVG } from 'assets/img/blog/photo_size_select_actual.svg';
import { ReactComponent as TriangleSVG } from 'assets/img/blog/triangle.svg';
import { EMPTY_STRING, ROUTE_TO_BLOGS } from 'common/constants';
import commonStyle from 'common/style/CommonStyle.module.scss';
import { createBlog } from 'features';

export const AddBlog: FC = () => {
  const [newBLogName, setNewBlogName] = useState(EMPTY_STRING);
  const [newBLogWebsiteUrl, setNewBLogWebsiteUrl] = useState(EMPTY_STRING);
  const [newBLogDescription, setNewBLogDescription] = useState(EMPTY_STRING);
  const dispatch = useAppDispatch();
  const onButtonAddBlogClick = (): any => {
    console.warn('NEED TO FIX ANY');
    dispatch(
      createBlog({
        name: newBLogName,
        websiteUrl: newBLogWebsiteUrl,
        description: newBLogDescription,
      }),
    );
  };

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
        <NewBlogDescription
          newBlogName={newBLogName}
          setNewBlogName={setNewBlogName}
          newBLogWebsiteUrl={newBLogWebsiteUrl}
          setNewBLogWebsiteUrl={setNewBLogWebsiteUrl}
          newBLogDescription={newBLogDescription}
          setNewBLogDescription={setNewBLogDescription}
        />
        <div className={style.addBlog__button}>
          <button
            type="button"
            className={commonStyle.button}
            onClick={onButtonAddBlogClick}
          >
            Add blog
          </button>
        </div>
      </div>
    </div>
  );
};
