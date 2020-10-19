import { Avatar } from '@material-ui/core';
import React from 'react';
import { useStateValue } from '../../../utils/StateProvider';
import './SidebarRow.css';

function SidebarRow({ src, Icon, title }) {
    const [{ user}, dispatch] = useStateValue();
    
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={user?.photoURL} />}
            {Icon && <Icon />}

            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow;
