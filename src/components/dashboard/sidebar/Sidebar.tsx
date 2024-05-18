import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';
import assets from '@/assets';
import Link from 'next/link';
import { drawerItems } from '@/utils/drawerItems';
import { IUserRole } from '@/types';
import SidebarItems from './SidebarItems';
import { getUserInfo } from '@/services/auth.services';

interface ISidebarProps {
}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  const [adjustRole,setAdjustRole] = React.useState<string>("");
  React.useEffect(()=>{
    const { role } = getUserInfo();
    setAdjustRole(role);
  },[adjustRole])
  
  return <>
  <Box>
      <Stack direction="row" alignItems="center" gap={1} py={2} px={2}>
        <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
        <Typography variant='h6'>
          <Link href="/">Fab Health Care</Link>
        </Typography>
      </Stack>
      <List>
        {drawerItems(adjustRole as IUserRole).map((item, index) => (
      <SidebarItems item={item} />
        ))}
      </List>
  </Box>
  </>;
};

export default Sidebar;
