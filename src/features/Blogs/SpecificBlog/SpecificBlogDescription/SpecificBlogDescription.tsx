import React, { FC, useState } from 'react';

import style from './SpecificBlogDescription.module.scss';

import { ReactComponent as ArrowDown } from 'assets/img/blog/arrowDown.svg';
import { ReactComponent as ArrowUP } from 'assets/img/blog/arrowUp.svg';
import { ReactComponent as ChooseAvatarSVG } from 'assets/img/blog/blog.svg';
import { ReactComponent as ChoosePreviewPictureSVG } from 'assets/img/blog/photo_size_select_actual.svg';
import commonStyle from 'common/style/CommonStyle.module.scss';
import { IBlogResponse } from 'common/types/api';
import { dateParse, cutString } from 'utils';

interface ISpecificBlogDescription extends IBlogResponse {}

export const SpecificBlogDescription: FC<ISpecificBlogDescription> = props => {
  const { name, description, websiteUrl, createdAt } = props;
  const [isClickShowMoreText, setIsClickShowMoreText] = useState(false);
  const text = description;
  const textLength = text.length;
  const maxAllowedTextLength = 200;
  const onShowMoreButtonClick = (): void => setIsClickShowMoreText(!isClickShowMoreText);

  return (
    <div className={style.specificBlogDescription}>
      <div className={style.specificBlogDescription__previewPicture}>
        <ChoosePreviewPictureSVG />
      </div>
      <div className={style.specificBlogDescription__main}>
        <ChooseAvatarSVG className={style.specificBlogDescription__avatar} />
        <div className={style.specificBlogDescription__description}>
          <h3 className={style.specificBlogDescription__title}>{name}</h3>
          <h6 className={style.specificBlogDescription__createdDate}>
            Blog creation date: {dateParse(createdAt)}
          </h6>
          <h6 className={style.specificBlogDescription__url}>
            Website:<a href={websiteUrl}>{websiteUrl}</a>
          </h6>
          <p className={style.specificBlogDescription__text}>
            {textLength > maxAllowedTextLength && !isClickShowMoreText
              ? cutString(text, maxAllowedTextLength)
              : text}
          </p>
          {textLength > maxAllowedTextLength && (
            <div className={style.specificBlogDescription__showMoreText}>
              <button
                className={style.specificBlogDescription__button}
                type="button"
                onClick={onShowMoreButtonClick}
              >
                {isClickShowMoreText ? 'hide text' : 'show more'}
              </button>
              {isClickShowMoreText ? <ArrowUP /> : <ArrowDown />}
            </div>
          )}
        </div>
      </div>
      <hr className={commonStyle.line} />
    </div>
  );
};
