import React, { ChangeEvent, FC } from 'react';

import style from './NewBlogDescription.module.scss';

interface INewBlogDescription {
  newBlogName: string;
  setNewBlogName: (value: string) => void;
  newBLogWebsiteUrl: string;
  setNewBLogWebsiteUrl: (value: string) => void;
  newBLogDescription: string;
  setNewBLogDescription: (value: string) => void;
}

export const NewBlogDescription: FC<INewBlogDescription> = props => {
  const {
    newBlogName,
    setNewBlogName,
    newBLogWebsiteUrl,
    setNewBLogWebsiteUrl,
    newBLogDescription,
    setNewBLogDescription,
  } = props;
  const onNewBlogNameChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setNewBlogName(event.currentTarget.value);

  const onNewBLogWebsiteUrlChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setNewBLogWebsiteUrl(event.currentTarget.value);

  const onNewBLogDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>): void =>
    setNewBLogDescription(event.currentTarget.value);

  return (
    <div className={style.newBlogDescription__description}>
      <div className={style.newBlogDescription__newBlogName}>
        <label className={style.newBlogDescription__label} htmlFor="newBlogName">
          Blog name
          <input
            className={style.newBlogDescription__input}
            name="blogName"
            type="text"
            value={newBlogName}
            onChange={onNewBlogNameChange}
          />
        </label>
      </div>
      <div className={style.newBlogDescription__newBlogWebsiteUrl}>
        <label className={style.newBlogDescription__label} htmlFor="newBlogWebsiteUrl">
          Website
          <input
            className={style.newBlogDescription__input}
            name="newBlogWebsiteUrl"
            type="text"
            value={newBLogWebsiteUrl}
            onChange={onNewBLogWebsiteUrlChange}
          />
        </label>
      </div>
      <div className={style.newBlogDescription__newBlogDescription}>
        <label className={style.newBlogDescription__label} htmlFor="newBlogDescription">
          Blog Description
          <textarea
            className={style.newBlogDescription__textarea}
            name="newBlogDescription"
            value={newBLogDescription}
            onChange={onNewBLogDescriptionChange}
          />
        </label>
      </div>
    </div>
  );
};
