import React, { FC, useEffect } from 'react';

import { NavLink, useParams } from 'react-router-dom';

import style from './EditBlog.module.scss';
import { EditDescriptionBlog } from './EditDescriptionBlog';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { ReactComponent as BackArrowSVG } from 'assets/img/blog/backArrow.svg';
import { ReactComponent as AvatarSVG } from 'assets/img/blog/photo_size_select_actual.svg';
import { ReactComponent as TriangleSVG } from 'assets/img/blog/triangle.svg';
import { ROUTE_TO_BLOGS } from 'common/constants';
import { getCurrentSpecificBlog, getIsFetchBlogs } from 'common/selectors';
import commonStyle from 'common/style/CommonStyle.module.scss';
import { BlogSkeletonLoading } from 'components';
import { fetchSpecificBlog } from 'features';

export const EditBlog: FC = () => {
  const { blogID } = useParams();
  const dispatch = useAppDispatch();
  const isFetchSpecificBlog = useAppSelector(getIsFetchBlogs);
  const currentBlog = useAppSelector(getCurrentSpecificBlog);
  // const [currentBlogName, setCurrentBlogName] = useState(currentBlog.name);
  // const [currentBlogWebsiteUrl, setCurrentBlogWebsiteUrl] = useState(
  //   currentBlog.websiteUrl,
  // );
  // const [currentBlogDescription, setCurrentBlogDescription] = useState(
  //   currentBlog.description,
  // );

  useEffect(() => {
    if (blogID) dispatch(fetchSpecificBlog(blogID));
  }, []);

  return (
    <div className={style.editBlog}>
      <div className={style.editBlog__wrapper}>
        {isFetchSpecificBlog ? (
          <BlogSkeletonLoading />
        ) : (
          <>
            <div className={style.header}>
              <h2 className={style.editBlog__title}>Blogs</h2>
              <TriangleSVG />
              <span className={style.header__action}>{currentBlog.name}</span>
              <TriangleSVG />
              <span className={style.header__action}>Edit</span>
            </div>
            <hr className={commonStyle.line} />
            <div className={style.editBlog__backToBlogs}>
              <BackArrowSVG />
              <NavLink to={ROUTE_TO_BLOGS} className={style.editBlog__backToBlogsLink}>
                Back to blogs
              </NavLink>
            </div>
            <div className={style.editBlog__img}>
              <AvatarSVG className={style.editBlog__avatar} />
            </div>
            <EditDescriptionBlog />
            <div className={style.editBlog__button}>
              <button type="button" className={commonStyle.button}>
                Edit blog
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
