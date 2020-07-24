import { DashboardOutlined, TableOutlined } from '@ant-design/icons';
import { RouterType } from './types';
import RouterPath from './RouterPath';

const Routers: RouterType[] = [
  {
    title: 'Dashboard',
    name: 'dashboard',
    icon: DashboardOutlined,
    path: RouterPath.DASHBOARD,
    submenu: [
      {
        title: 'Analysis',
        icon: TableOutlined,
        path: RouterPath.DASHBOARD_ANALYSIS,
      },
    ],
  },
  {
    title: 'List',
    name: 'list',
    icon: TableOutlined,
    path: RouterPath.LIST,
    submenu: [
      {
        title: 'Products',
        icon: TableOutlined,
        path: RouterPath.LIST_PRODUCT,
      },
      {
        title: 'Campaigns',
        icon: TableOutlined,
        path: RouterPath.LIST_CAMPAIGN,
      },
      {
        title: 'Vouchers',
        icon: TableOutlined,
        path: RouterPath.LIST_VOUCHER,
      },
      {
        title: 'Customer Segment',
        icon: TableOutlined,
        path: RouterPath.LIST_CUSOMER_SEGMENT,
      },
    ],
  },
  {
    title: 'Setting',
    name: 'setting',
    icon: TableOutlined,
    path: '/setting',
  },
];

export default Routers;
