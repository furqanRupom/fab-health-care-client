"use client";
import * as React from 'react';
import { theme } from '../theme/theme';
import { ThemeProvider } from '@mui/material';

interface IProvidersProps {
    children:React.ReactNode
}

const Providers: React.FunctionComponent<IProvidersProps> = ({children}) => {
    return <ThemeProvider theme={theme}>
            {children}
    </ThemeProvider>;
};

export default Providers;
