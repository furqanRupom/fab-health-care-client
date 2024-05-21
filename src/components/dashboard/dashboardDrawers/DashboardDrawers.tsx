"use client"
import AccountCircle from '@mui/icons-material/AccountCircle';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Sidebar from '../sidebar/Sidebar';
import { getUserInfo } from '@/services/auth.services';
import { useGetMyProfileQuery } from '@/redux/api/userApi';
import { Avatar, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const drawerWidth = 240;

interface Props {

    children: React.ReactNode
}

export default function DashBoardDrawers({ children }: Props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [user, setUser] = React.useState<Record<string, any>>({});
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
    const router = useRouter();
    const { data: getProfile } = useGetMyProfileQuery({});
    const name = user?.name;
    const email = user?.email
    React.useEffect(() => {
        setUser(getProfile)
        
    }, [getProfile])




    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };
    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    const handleMenu = () => {
        setIsMenuOpen(true)
    }

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        router.push("/login");
    }



    // Remove this const when copying and pasting into your project.

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: "#f4f7fe",
                    boxShadow: 0,
                    borderBottom: "1px solid lightgray"

                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: "primary.main" }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box>
                        <Typography variant="h6" noWrap component="div" color="gray">
                            {name || "Annoymous ... "}
                        </Typography>
                        <Typography variant="h6" noWrap component="div" color="primary.main">
                            Welcome to Fab Health Care
                        </Typography>
                    </Box>
                    <Box sx={{
                        marginLeft: "auto",
                        px: 3
                    }}>
                        <IconButton size="small" >
                            <Avatar sx={{ backgroundColor: "#fff", border: "1px solid lightgray" }} src={getProfile?.profilePhoto} />

                        </IconButton>
                        <IconButton size="medium" sx={{ m: 1, backgroundColor: "#fff", border: "1px solid lightgray" }}>
                            <NotificationsIcon color='primary' />
                        </IconButton>
                        <IconButton
                            size="medium"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="primary"
                            sx={{
                                border: "1px solid lightgray",
                                backgroundColor: "#fff"
                            }}
                        >
                            <KeyboardArrowDownIcon />
                        </IconButton>
                        <Menu  sx={{ mt: '45px', px: 3, py: 3 }}
                            open={isMenuOpen}
                            id="menu-appbar"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                          
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            onClose={() => setIsMenuOpen(false)}
                        >
                            <MenuItem  >
                                <HomeIcon  /><Typography paddingX={1} variant="body1" component={Link} href="/">Home</Typography></MenuItem>
                                <hr />
                            <MenuItem onClick={() => setIsMenuOpen(false)}>
                                <PersonOutlineIcon /> <Typography paddingX={1}>Profile</Typography>
                            </MenuItem>
                            <hr/>
                        
                            <MenuItem onClick={() => handleLogout()}>
                                <ExitToAppIcon color='error' />  <Typography paddingX={1}>Logout</Typography></MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>

            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <Sidebar />
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    <Sidebar />
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Box>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}
