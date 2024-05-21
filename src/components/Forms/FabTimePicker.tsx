import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { SxProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


interface IFabTimePickerProps {
    name: string;
    size?: "small" | "medium";
    label?: string;
    required?: boolean;
    fullWidth?: boolean;
    sx?: SxProps;
}

const FabTimePicker: React.FunctionComponent<IFabTimePickerProps> = ({ label, name, required, fullWidth, size, sx }) => {
    const { control } = useFormContext();
    return <>
        <Controller
            control={control}
            name={name}
            defaultValue={dayjs(new Date().getTime().toString())}
            render={({ field: { onChange, value, ...field } }) => {
                return (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                            label={label}
                            timezone='system'
                            onChange={(date) => onChange(date)} {...field} value={value || Date.now()}
                            slotProps={{
                                textField: {
                                    required: required,
                                    size: size,
                                    sx: {
                                        ...sx
                                    },
                                    variant: "outlined",
                                    fullWidth: fullWidth
                                }
                            }}
                        />
                    </LocalizationProvider>
                )
            }} />
    </>;
};

export default FabTimePicker;
