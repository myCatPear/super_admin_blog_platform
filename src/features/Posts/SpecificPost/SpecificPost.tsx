import React, { FC, useEffect } from 'react';

import { NavLink, useParams } from 'react-router-dom';

import style from './SpecificPost.module.scss';
import { SpecificPostDescription } from './SpecificPostDescription';
import { fetchSpecificPost, setEmptySpecificPost } from './SpecificPostSlice';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { ReactComponent as BackArrowSVG } from 'assets/img/blog/backArrow.svg';
import { ReactComponent as TriangleSVG } from 'assets/img/blog/triangle.svg';
import { ROUTE_TO_POSTS } from 'common/constants';
import { getCurrentSpecificPost, getIsFetchPosts } from 'common/selectors';
import commonStyle from 'common/style/CommonStyle.module.scss';
import { PostSkeletonLoading } from 'components';

export const SpecificPost: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currentSpecificPost = useAppSelector(getCurrentSpecificPost);
  const isFetchSpecificPost = useAppSelector(getIsFetchPosts);

  useEffect(() => {
    if (id) dispatch(fetchSpecificPost(id));

    return () => {
      dispatch(setEmptySpecificPost());
    };
  }, []);
  const { title, blogName, createdAt, content } = currentSpecificPost;

  return (
    <div className={style.specificPost}>
      <div className={style.specificPost__wrapper}>
        <header className={style.specificPost__header}>
          <h2 className={style.specificPost__title}>Posts</h2>
          <TriangleSVG />
          <h3 className={style.specificPost__blogName}>{title}</h3>
        </header>
        <hr className={commonStyle.line} />
        <div className={style.specificPost__backToBlogs}>
          <BackArrowSVG />
          <NavLink to={ROUTE_TO_POSTS} className={style.specificPost__backToBlogsLink}>
            Back to posts
          </NavLink>
        </div>
        <section className={style.mainSection}>
          {isFetchSpecificPost ? (
            <PostSkeletonLoading />
          ) : (
            <SpecificPostDescription
              blogName={blogName}
              title={title}
              createdDate={createdAt}
              content={content}
            />
          )}
        </section>
      </div>
    </div>
  );
};
