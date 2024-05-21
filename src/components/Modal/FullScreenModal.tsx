import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box, SxProps } from '@mui/material';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
interface IFullScreenModalProps {
    open:boolean;
    setOpen:React.Dispatch<React.SetStateAction<boolean>>;
    children:React.ReactNode
    sx?:SxProps
}
const  FullScreenModal:React.FunctionComponent<IFullScreenModalProps> = ({open,setOpen,children,sx}) =>  {



    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
        
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                sx={{...sx}}
            >
                <AppBar  sx={{ position: 'relative' }}>
                    <Toolbar  sx={{
                        backgroundColor:"#fff",
                        boxShadow:"0 0 0 5px #fff"
                    }}>
                       
                        <Typography  sx={{ ml: 2, flex: 1 ,color:"gray"}} variant="h6" component="div">
                            Create Doctor
                        </Typography>
                        <IconButton
                            edge="start"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
               <Box sx={{
                margin:"5rem 2rem"
               }}>
                {children}
               </Box>
            </Dialog>
        </React.Fragment>
    );
}
export default FullScreenModal;