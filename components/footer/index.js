import React from 'react';
import { Container, Box, IconButton, Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from './styles.module.css';

const Footer = () => {

    return (
        <footer className = { styles.footer } >
            <Container maxWidth = 'lg'>
                <Typography
                    gutterBottom
                    align = 'center'
                    variant = 'h6'>
                    Footer
                </Typography>
                <Box
                    align = 'center'>
                    <Typography
                        color = 'textSecondary'
                        component = 'span'
                        variant = 'subtitle1'>
                        Wheather App by Dmitry Hniezdilov:&nbsp;
                    </Typography>
                    <IconButton
                        component = { Link }
                        href = 'https://weather-next-hniezdilov.netlify.app/'
                        rel = 'noreferrer'
                        size = 'small'
                        style = {{color: '#d1d5da'}}
                        target = '_blank'>
                        <GitHubIcon />
                    </IconButton>
                </Box>
            </Container>
        </footer>
    );
};

export default Footer;
