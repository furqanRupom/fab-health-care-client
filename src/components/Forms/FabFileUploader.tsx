import * as React from 'react';
import { SxProps, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Controller, useFormContext } from 'react-hook-form';
import { Input } from '@mui/material';



interface IFabFileUploader {
    name:string;
    label:string;
    sx?:SxProps
}

const FabFileUploader:React.FunctionComponent<IFabFileUploader> = ({name,sx,label}) => {
    const {control} = useFormContext();
    return (
        <Controller name={name} control={control} render={({field: {onChange,value,...field}}) => {
            return (<Button
                component="label"
                role={undefined}
                variant="contained"
                sx={{...sx}}
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                {label || "upload file"}
                <Input {...field} type={name} value={value?.fileName} 
                style={{display:"none"}}
                onChange={(e) => onChange((e.target as HTMLInputElement).files?.[0])}
                 />
            </Button>)
        }}/>

    );
}
export default FabFileUploader