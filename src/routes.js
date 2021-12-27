import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Album = React.lazy(() => import('./views/dashboard/Album')) ;

const routes = [
  { path: '/', exact: true, key: 'Home' },
  { path: '/dashboard', exact: true, key: 'Dashboard', component: Dashboard },
  { path: '/Album', exact: true, key:'Album', component: Album, requireAuth : false }
];

export default routes;
