/**
 * Asynchronously loads the component for MainLayout
 */

import { lazyLoad } from 'utils/loadable';

export const MainLayout = lazyLoad(
  () => import('./index'),
  module => module.MainLayout,
);
