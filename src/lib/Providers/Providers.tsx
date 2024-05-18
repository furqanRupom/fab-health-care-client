"use client";
import * as React from 'react';
import { theme } from '../theme/theme';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

interface IProvidersProps {
    children:React.ReactNode
}

const Providers: React.FunctionComponent<IProvidersProps> = ({children}) => {
    return <Provider store={store}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </Provider>;
};

export default Providers;
