import React from 'react';

import NewItem from './NewItem';
export default class NewList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className='goods2 wth clearfix'>
            <div className='goods1'>
                <div className='newdays1 newds2'>
                    <i></i>
                    <p>每天10点上新</p>
                </div>
                <ul className='mg clearfix'>
                    <NewItem/>
                    <NewItem/>
                    <NewItem/>
                    <NewItem/>
                    <NewItem/>
                </ul>
            </div>
        </div>
            );
    }

    }