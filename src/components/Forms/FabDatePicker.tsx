import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { SxProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';


interface IFabDatePickerProps {
  name: string;
  size?: "small" | "medium";
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}

const FabDatePicker: React.FunctionComponent<IFabDatePickerProps> = ({ label, name, required, fullWidth, size, sx }) => {
  const { control } = useFormContext();
  


  return <>

    <Controller
      control={control}
      name={name}
      defaultValue={dayjs(new Date().getDate().toString())}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label={label}
              timezone='system'
              disablePast
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

export default FabDatePicker;
