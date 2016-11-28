import React, {Component} from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: 'header',
        };
    }

    render() {
        return (
            <div className='hd'>
                <div className='logo'>
                    <div className='hd2 clearfix wth'>
                        <h1 className='hd2_left fl'>
                            <a href='/'>
                                <img
                                    src='http://www.taokezhushou.com/statics/images/logo.png'
                                    alt='淘客助手'
                                    width='207'
                                    height='60'
                                />
                            </a>
                        </h1>
                        <div className='hd2_search fl'>
                            <span><a href='/' className='search'>站内搜索</a></span>
                            <span><a href='http://queqiao.taokezhushou.com' target='_blank'>鹊桥搜索</a></span>
                            <form action='/search' method='get'>
                                <input type='text' className='search_text fl' placeholder='请输入您要搜索关键字或淘宝链接' name='q'
                                       value=''
                                />
                                    <input type='submit' value='搜 索' className='search_btn fl'
                                    />
                            </form>
                        </div>
                        <div className='hd2_right fr'>
                            <img src='http://www.taokezhushou.com/statics/images/logofr.png'
                                 alt='让推广更高效'
                                 width='122'
                                 height='100'
                            />
                        </div>
                    </div>
                    <div className='hd_nav wth'>
                        <ul>
                            <li className='nav1'><a href='/' className='navone'>首页</a></li>
                            <li><a className='hv' href='/top100'>实时热推榜<i></i></a></li>
                            <li><a className='hv'>淘客学院</a></li>
                            <li><a className='hv'>开放API</a></li>
                            <li><a className='hv'>淘客圈子</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    )
    }
    }
