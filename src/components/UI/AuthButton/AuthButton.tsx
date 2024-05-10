"use client"
import { getUserInfo, loggedOut } from '@/services/auth.services';
import { Button, Link } from '@mui/material';
import { useRouter } from 'next/navigation';
import * as React from 'react';

interface IAuthButtonProps {
}

const AuthButton: React.FunctionComponent<IAuthButtonProps> = (props) => {
    const user = getUserInfo();
    const router = useRouter();
    const handleLogout = () => {
        loggedOut();
        router.refresh();
        router.push('/login');
    }
  return <>
      {
          user && user?.email ? <>
              <Button onClick={handleLogout} color='error'>Logout</Button>
          </> : <Button LinkComponent={Link} href="/login" >Login</Button>
      }
  </>;
};

export default AuthButton;
