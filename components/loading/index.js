import React from 'react';
import {useSelector} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles.module.css';

const Loading = () => {
    const {isLoading} = useSelector((state) => state.general);
    const activeClassName = isLoading ? styles.active : '';

    return (
        <div className = { `${styles.loading} ${activeClassName}` }>
            <CircularProgress/>
        </div>
    );
};

export default Loading;
