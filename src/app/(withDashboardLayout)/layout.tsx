import DashBoardDrawers from '@/components/dashboard/dashboardDrawers/DashboardDrawers';
import * as React from 'react';

interface IDashboardLayoutProps {
    children:React.ReactNode
}

const DashboardLayout: React.FunctionComponent<IDashboardLayoutProps> = ({children}) => {
  return <DashBoardDrawers>{children}</DashBoardDrawers>;
};

export default DashboardLayout;
