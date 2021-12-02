import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Album = React.lazy(() => import('./views/dashboard/Album')) ;

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/Album', exact: true, name:'Album', component: Album, requireAuth : true }
];

export default routes;
