import React from 'react';
import { Box, CssBaseline, Container } from '@material-ui/core';
import Footer from '../footer';
import Header from "../header";
import styles from './styles.module.css';

const PageLayout = ({children}) => {

    return (
        <Box
            className = { styles.pageLayout }>
            <CssBaseline />
            <Header/>
            <Container
                style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                className = { styles.container }
                maxWidth = 'lg'>

                <main>{ children }</main>

            </Container>
            <Footer className = { styles.footer }/>
        </Box>
    );
};

export default PageLayout;
