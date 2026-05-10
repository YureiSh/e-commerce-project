import React from 'react';
import ContactHeader from './ContactHeader';
import Footer from './Footer';
import Header from './Header';

const PageContent = ({children, keepContactHeader = true}) => {
    return (
        <>
        {keepContactHeader ? <ContactHeader/> : null}
        <Header/>
        <main>{children}</main>
        <Footer/>
        </>
    );
};

export default PageContent;