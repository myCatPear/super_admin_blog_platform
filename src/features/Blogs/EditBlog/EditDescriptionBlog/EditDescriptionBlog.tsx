import React, { FC } from 'react';

import style from './EditBlogDescription.module.scss';

export const EditDescriptionBlog: FC = () => {
  return (
    <div className={style.editBlog__description}>
      <div className={style.editBlog__newBlogName}>
        <label className={style.editBlog__label} htmlFor="newBlogName">
          Blog name
          <input className={style.editBlog__input} name="blogName" type="text" />
        </label>
      </div>
      <div className={style.editBlog__newBlogWebsiteUrl}>
        <label className={style.editBlog__label} htmlFor="newBlogWebsiteUrl">
          Website
          <input className={style.editBlog__input} name="newBlogWebsiteUrl" type="text" />
        </label>
      </div>
      <div className={style.editBlog__editBlog}>
        <label className={style.editBlog__label} htmlFor="editBlog">
          Blog Description
          <textarea className={style.editBlog__textarea} name="editBlog" />
        </label>
      </div>
    </div>
  );
};
