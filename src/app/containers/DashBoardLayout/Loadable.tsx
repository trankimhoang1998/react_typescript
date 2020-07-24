/**
 * Asynchronously loads the component for MainLayout
 */

import { lazyLoad } from 'utils/loadable';

export const DashBoard = lazyLoad(
  () => import('./index'),
  module => module.default,
);
