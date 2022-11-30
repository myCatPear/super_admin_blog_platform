import React from 'react';

import ContentLoader from 'react-content-loader';

export const BlogSkeletonLoading = (props: any): React.ReactElement => (
  <ContentLoader
    speed={2}
    width={600}
    height={150}
    viewBox="0 0 600 150"
    backgroundColor="#DEDBDC"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="78" cy="73" r="72" />
    <rect x="155" y="79" rx="0" ry="0" width="280" height="62" />
    <rect x="107" y="455" rx="0" ry="0" width="17" height="0" />
    <rect x="157" y="5" rx="0" ry="0" width="112" height="30" />
    <rect x="159" y="44" rx="0" ry="0" width="149" height="16" />
  </ContentLoader>
);
