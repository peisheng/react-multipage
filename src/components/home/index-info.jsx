import React, { Component } from 'react';
import Header from './home-header';
import Loading from '../common/loading';


export default class info extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: 'info',
		};
	}
    handlerResponse(err,data){
		console.log(data.text[0])
	}
	
	render() {
		return (
			<div>
				<Loading />
				{/*<Ajax url={'/api/product/list'} type={'application/json'} onResponse={this.handlerResponse} />*/}
				<Header />
				{this.state.info}
			</div>
		);
	}
};
