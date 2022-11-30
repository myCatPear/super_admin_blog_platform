import React, { useEffect } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { setIsInitializedApp } from './appSlice';
import { useAppDispatch, useAppSelector } from './hooks';

import { ROUTE_TO_BLOGS, ROUTE_TO_HOME } from 'common/constants';
import { publicRoutes } from 'common/routes';
import { getIsInitializedApp } from 'common/selectors';
import commonStyle from 'common/style/CommonStyle.module.scss';
import { AppLoadingBar, Header, MainPanel, MainSection, Navigation } from 'components';

export const App: React.FC = () => {
  const isInitializedApp = useAppSelector(getIsInitializedApp);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsInitializedApp({ value: true }));
  }, []);

  if (!isInitializedApp) {
    return <AppLoadingBar />;
  }

  return (
    <div className={commonStyle.container}>
      <Header />
      <MainPanel>
        <Navigation />
        <MainSection>
          <Routes>
            {publicRoutes.map(route => (
              <Route key={route.path} path={route.path} element={<route.Component />} />
            ))}
            <Route path={ROUTE_TO_HOME} element={<Navigate to={ROUTE_TO_BLOGS} />} />
          </Routes>
        </MainSection>
      </MainPanel>
    </div>
  );
};
