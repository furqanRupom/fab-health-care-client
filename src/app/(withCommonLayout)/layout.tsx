import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
import * as React from 'react';

interface ICommontLayoutsProps {
    children: React.ReactNode
}

const CommontLayouts: React.FunctionComponent<ICommontLayoutsProps> = ({ children }) => {
    return <>
        <Navbar />
        <main className='min-h-screen'> {children}</main>
        <Footer />
    </>;
};

export default CommontLayouts;
