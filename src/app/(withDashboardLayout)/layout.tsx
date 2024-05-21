"use client";
import DashBoardDrawers from '@/components/dashboard/dashboardDrawers/DashboardDrawers';
import * as React from 'react';
import { useRouter } from "next/navigation";
import { isLoggedIn } from '@/services/auth.services';

interface IDashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: React.FunctionComponent<IDashboardLayoutProps> = ({ children }) => {
  const router = useRouter();
  if (!isLoggedIn) {
    router.push('/login');
    return <></>
  };
  return <DashBoardDrawers>{children}</DashBoardDrawers>;
};

export default DashboardLayout;
