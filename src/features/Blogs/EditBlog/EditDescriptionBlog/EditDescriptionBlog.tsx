import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import style from './EditBlogDescription.module.scss';

import { useAppSelector } from 'app/hooks';
import { getCurrentSpecificBlog } from 'common/selectors';

// interface IEditDescriptionBlog {
//   currentBlogName: string;
//   setCurrentBlogName: (value: string) => void;
//   currentBlogWebsiteUrl: string;
//   setCurrentBlogWebsiteUrl: (value: string) => void;
//   currentBlogDescription: string;
//   setCurrentBlogDescription: (value: string) => void;
// }

export const EditDescriptionBlog: FC = () => {
  // const {
  //   currentBlogDescription,
  //   setCurrentBlogDescription,
  //   currentBlogName,
  //   currentBlogWebsiteUrl,
  //   setCurrentBlogName,
  //   setCurrentBlogWebsiteUrl,
  // } = props;

  const currentBlog = useAppSelector(getCurrentSpecificBlog);

  const [currentBlogName, setCurrentBlogName] = useState(currentBlog.name);
  const [currentBlogWebsiteUrl, setCurrentBlogWebsiteUrl] = useState(
    currentBlog.websiteUrl,
  );
  const [currentBlogDescription, setCurrentBlogDescription] = useState(
    currentBlog.description,
  );

  useEffect(() => {
    // eslint-disable-next-line no-debugger
    debugger;
  }, [currentBlog]);
  console.log(currentBlog);
  const onInputCurrentBlogNameChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setCurrentBlogName(event.currentTarget.value);

  const onInputCurrentBlogWebsiteUrlChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => setCurrentBlogWebsiteUrl(event.currentTarget.value);

  const onTextAreaCurrentBlogDescriptionChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ): void => setCurrentBlogDescription(event.currentTarget.value);

  return (
    <div className={style.editBlog__description}>
      <div className={style.editBlog__newBlogName}>
        <label className={style.editBlog__label} htmlFor="newBlogName">
          Blog name
          <input
            className={style.editBlog__input}
            name="blogName"
            type="text"
            value={currentBlogName}
            onChange={onInputCurrentBlogNameChange}
          />
        </label>
      </div>
      <div className={style.editBlog__newBlogWebsiteUrl}>
        <label className={style.editBlog__label} htmlFor="newBlogWebsiteUrl">
          Website
          <input
            className={style.editBlog__input}
            name="newBlogWebsiteUrl"
            type="text"
            value={currentBlogWebsiteUrl}
            onChange={onInputCurrentBlogWebsiteUrlChange}
          />
        </label>
      </div>
      <div className={style.editBlog__newBlogDescription}>
        <label className={style.editBlog__label} htmlFor="editBlog">
          Blog Description
          <textarea
            className={style.editBlog__textarea}
            name="editBlog"
            value={currentBlogDescription}
            onChange={onTextAreaCurrentBlogDescriptionChange}
          />
        </label>
      </div>
    </div>
  );
};
