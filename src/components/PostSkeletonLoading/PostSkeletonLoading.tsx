import React, { FC } from 'react';

import ContentLoader from 'react-content-loader';

export const PostSkeletonLoading: FC = (props: any) => {
  return (
    <ContentLoader
      speed={2}
      width={230}
      height={270}
      viewBox="0 0 230 270"
      backgroundColor="#DEDBDC"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="5" y="4" rx="0" ry="0" width="218" height="180" />
      <circle cx="30" cy="231" r="29" />
      <rect x="69" y="204" rx="0" ry="0" width="151" height="28" />
      <rect x="69" y="244" rx="0" ry="0" width="81" height="13" />
    </ContentLoader>
  );
};
