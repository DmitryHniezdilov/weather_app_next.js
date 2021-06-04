import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import SearchItem from '../searchItem';
import styles from './styles.module.css';

const SearchList = ({data, setSelectedItem}) => {
    return (
        <List
            aria-label = 'main mailbox folders'
            className = {styles.searchList}
            component = 'nav'>
            {data.map(({id, name, sys }) => (
                <SearchItem
                    country = { sys.country }
                    key = { id }
                    name = { name }
                    setSelectedItem = { () => setSelectedItem(id) }
                />
            ))}
        </List>
    );
};

SearchList.prototype = {
    setSelectedItem: PropTypes.func,
    data:            PropTypes.array,
};

export default SearchList;
