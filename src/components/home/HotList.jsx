/**
 * Created by Administrator on 2016/11/29.
 */
import React, { Component } from 'react';
import HotItem  from './HotItem';

export default class HotList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='goods1 wth clearfix'>
                <div className='newdays1 newds1 clearfix'>
                    <i></i>
                    <p>每天10点上新</p>
                </div>
                <ul className='mg clearfix'>
                    <HotItem/>
                    <HotItem/>
                    <HotItem/>
                    <HotItem/>
                </ul>
            </div>
        )
    }
}