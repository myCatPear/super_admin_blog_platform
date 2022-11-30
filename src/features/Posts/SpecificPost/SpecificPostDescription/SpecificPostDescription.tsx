import React, { FC } from 'react';

import style from './SpecificPostDescription.module.scss';

import {
  ReactComponent as BlogAvatarSVG,
  ReactComponent as PostAvatarSVG,
} from 'assets/img/post/photo_size_select_actual.svg';

interface ISpecificPostDescription {
  blogName: string;
  title: string;
  createdDate: string;
  content: string;
}

export const SpecificPostDescription: FC<ISpecificPostDescription> = props => {
  const { content, createdDate, title, blogName } = props;

  return (
    <div className={style.specificPostDescription}>
      <div className={style.specificPostDescription__blogInfo}>
        <div className={style.specificPostDescription__blogImg}>
          <BlogAvatarSVG className={style.specificPostDescription__blogAvatar} />
        </div>
        <div className={style.specificPostDescription__blogName}>{blogName}</div>
      </div>
      <div className={style.specificPostDescription__postInfo}>
        <h3 className={style.specificPostDescription__postTitle}>{title}</h3>
        <h6 className={style.specificPostDescription__createdDate}>{createdDate}</h6>
      </div>
      <div className={style.specificPostDescription__postImg}>
        <PostAvatarSVG className={style.specificPostDescription__postAvatar} />
      </div>
      <p className={style.specificPostDescription__text}>{content}</p>
    </div>
  );
};
