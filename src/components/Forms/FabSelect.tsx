import { MenuItem, Select, TextField, TextFieldVariants } from '@mui/material';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IFabSelectProps {
    name: string;
    label?: string;
    size?: "small" | "medium";
    type?: string;
    fullWidth?: boolean;
    variant?: TextFieldVariants | undefined;
    required?: boolean;
    items:string[]
}

const FabSelect: React.FunctionComponent<IFabSelectProps> = ({ name, label, type, required, size, variant, fullWidth,items}) => {
    const { control,formState } = useFormContext();
    const isError = formState.errors[name] !== undefined; 
    return <Controller
        control={control} name={name}
        render={({ field }) => (
            <TextField select {...field} label={label} size={size} placeholder={label} variant={variant} fullWidth={fullWidth} error={isError} helperText={isError ? formState.errors[name]?.message as string : ""} >
                {
                    items?.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)
                }
                
            </TextField>
        )}
    />;
};

export default FabSelect;
