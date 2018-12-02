import React from 'react';
import Auxi from '../../hoc/Auxi';
import classses from './Layout.css';

const layout =(props)=>{
    return (
        <Auxi>
        <div>Header sidebar</div>
        <main className={classses.Content}>{props.children}</main>
        </Auxi>
    );
}
export default layout;