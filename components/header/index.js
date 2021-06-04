import React from 'react';
import {Button, Grid, Container } from '@material-ui/core';
import Link from '../link';
import styles from './styles.module.scss';

const Header = () => {

  return (
    <Container component={'header'} maxWidth = 'lg' className={styles.header}>
      <nav>
        <Grid
          component={'ul'}
          container
          justify="center"
          spacing = { 2 }>
          <Grid
            className={styles.header__list}
            component={'li'}
            item>
            <Button variant="contained" color="primary" component={Link} naked href="/" className={styles.header__btn}>
                Current weather
            </Button>
          </Grid>
          <Grid
            className={styles.header__list}
            component={'li'}
            item>
            <Button variant="contained" color="primary" component={Link} naked href="/forecast" className={styles.header__btn}>
                Forecast
            </Button>
          </Grid>
        </Grid>
      </nav>
    </Container>
  );
};

export default Header;