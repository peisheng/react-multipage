import React from 'react';
import Search from './Search';
import NewList from './NewList';
import HotList from './HotList';

export  default class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Search/>
                <div className='goods clearfix'>
                    <HotList/>
                    <a name='new' id="new"></a>
                    <NewList/>
                </div>
            </div>
        );
    }
}