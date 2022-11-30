import React, { useEffect } from 'react';

import style from './Blogs.module.scss';
import { fetchBlogs } from './blogsSlice';
import { CollapsedBlog } from './CollapsedBlog';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getAllBlogs, getIsFetchBlogs } from 'common/selectors';
import commonStyle from 'common/style/CommonStyle.module.scss';
import { BlogSkeletonLoading } from 'components';

export const Blogs: React.FC = () => {
  const blogs = useAppSelector(getAllBlogs);
  const isFetchBlogs = useAppSelector(getIsFetchBlogs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <div className={style.blogs}>
      <div className={style.blogs__wrapper}>
        <h2 className={style.blogs__title}>Blogs</h2>
        <hr className={commonStyle.line} />
        <div className={style.blogs__filter}>
          <input className={style.blogs__search} type="search" placeholder="Search" />
          <select className={style.blogs__sort}>
            <option className={style.blogs__sortOption}>New blogs first</option>
            <option className={style.blogs__sortOption}>2</option>
            <option className={style.blogs__sortOption}>3</option>
          </select>
        </div>
        <div className={style.blogs__blogsList}>
          {/* eslint-disable-next-line no-nested-ternary */}
          {isFetchBlogs ? (
            <>
              <BlogSkeletonLoading />
              <BlogSkeletonLoading />
              <BlogSkeletonLoading />
            </>
          ) : blogs.length === 0 ? (
            <div>no blogs</div>
          ) : (
            blogs.map(blog => <CollapsedBlog {...blog} key={blog.id} />)
          )}
        </div>
      </div>
    </div>
  );
};
