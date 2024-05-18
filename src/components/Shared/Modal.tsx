"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { SxProps } from '@mui/material';
interface IModalProps {
    open:boolean;
    setOpen:React.Dispatch<React.SetStateAction<boolean>>;
    title:string;
    children:React.ReactNode
    sx?:SxProps

}

export const FabModal: React.FunctionComponent<IModalProps> = ({open = false,setOpen,title = "",children,sx}) => {


    const handleClose = () => {
        setOpen(false);
    };



    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                sx={{
                    ...sx
                }}
            >
                <DialogTitle>{title}</DialogTitle>
                {children}
                
            </Dialog>
        </React.Fragment>
    );
}
export default FabModal;