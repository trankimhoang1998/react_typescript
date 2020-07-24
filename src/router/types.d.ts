import React from 'react';

export type SubMenuTypes = {
  title: string;
  icon: React.ReactNode;
  path: string;
  submenu?: SubMenuTypes[];
};

export type RouterType = {
  title: string;
  name: string;
  icon: React.ReactNode;
  path: string;
  submenu?: SubMenuTypes[];
};
