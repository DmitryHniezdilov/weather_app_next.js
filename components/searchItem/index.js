import React from 'react';
import PropTypes from 'prop-types';
import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Link from "../link";

const SearchItem = ({id, name, country, setSelectedItem}) => {
    function ListItemLink(props) {
        const { icon, primary, href } = props;

        const renderLink = React.useMemo(
            () => React.forwardRef((itemProps, ref) => (
              <Link
                  href = { href }
                  { ...itemProps }
                  onClick = { setSelectedItem }
              />
            )),
            [ href ],
        );

        return (
            <li key = { id }>
                <ListItem
                    button
                    component = { renderLink }>
                    {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                    <ListItemText primary = { primary } />
                </ListItem>
            </li>
        );
    }

    return (
        <ListItemLink
            icon = { <ChevronRightIcon /> }
            primary = { `View the weather in ${name}, ${country}` }
            href = '/'
        />
    );
};

SearchItem.prototype = {
    setSelectedItem: PropTypes.func,
    id:              PropTypes.number,
    name:            PropTypes.string,
    country:         PropTypes.string,
};

export default SearchItem;
