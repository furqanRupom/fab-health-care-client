import { TextField, TextFieldVariants } from '@mui/material';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IFabInputProps {
    name: string;
    label?: string;
    size?: "small" | "medium";
    type?: string;
    fullWidth?: boolean;
    variant?: TextFieldVariants | undefined;
    required:boolean;
}

const FabInput: React.FunctionComponent<IFabInputProps> = ({ name, label, size, type, fullWidth, variant, required }) => {
    const { control } = useFormContext();
    return <>
        <Controller
            control={control}
            name={name}
            render={({field}) => (
                <TextField
                    {...field}
                    label={label}
                    size={size}
                    type={type}
                    variant={variant}
                    fullWidth={fullWidth}
                    placeholder={label}
                    required={required}
                />
            )}
        />
    </>;
};

export default FabInput;
