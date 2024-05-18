"use client";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IDrawerItem } from '@/types';
import { usePathname } from 'next/navigation';

interface ISidebarItemsProps {
    item:IDrawerItem;
}

const SidebarItems: React.FunctionComponent<ISidebarItemsProps> = ({item}) => {
    const linkPaths = `/dashboard/${item.path}`;
    const pathname = usePathname();
    console.log(pathname);
  return <Link href={linkPaths}>
      <ListItem 
      sx={{
        ...pathname === linkPaths ? {
            borderRight:"3px solid #1586fd","& svg":{
                color:"#1586fd"
            }
        } :{}
      }}
       disablePadding>
          <ListItemButton>
              <ListItemIcon>
                  {
                    item?.icon && <item.icon/>
                  }
              </ListItemIcon>
              <ListItemText primary={item.title} />
          </ListItemButton>
      </ListItem>
  </Link>;
};

export default SidebarItems;
