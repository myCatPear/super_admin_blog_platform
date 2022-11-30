import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { ROUTE_TO_POSTS } from '../../../common/constants';

import style from './CollapsedPost.module.scss';

import { ReactComponent as CollapsedPostAvatarSVG } from 'assets/img/post/photo_size_select_actual.svg';
import { dateParse } from 'utils';

interface ICollapsedPost {
  id: string;
  title: string;
  shortDescription: string;
  date: string;
}

export const CollapsedPost: FC<ICollapsedPost> = props => {
  const { id, shortDescription, date, title } = props;

  return (
    <div className={style.collapsedPost}>
      <div className={style.collapsedPost__img}>
        <CollapsedPostAvatarSVG className={style.collapsedPost__avatar} />
      </div>
      <div className={style.collapsedPost__description}>
        <div className={style.collapsedPost__descriptionIMG}>
          <CollapsedPostAvatarSVG className={style.collapsedPost__descriptionAvatar} />
        </div>
        <div className={style.collapsedPost__descriptionMain}>
          <NavLink
            to={`${ROUTE_TO_POSTS}/${id}`}
            className={style.collapsedPost__descriptionTitle}
          >
            {title}
          </NavLink>
          <h6 className={style.collapsedPost__descriptionShortDescription}>
            {shortDescription}
          </h6>
          <h6 className={style.collapsedPost__descriptionDate}>{dateParse(date)}</h6>
        </div>
      </div>
    </div>
  );
};
