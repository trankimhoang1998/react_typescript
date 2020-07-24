import { match } from 'react-router';
import { Location } from 'history';

export interface MainLayoutProps {
  match: match;
  location: Location;
}

export interface HeaderProps {
  menuData: any[];
  handleMenuCollapse: (collapsed: boolean) => void;
  logo: string;
  isMobile: boolean;
  collapsed?: boolean;
}
