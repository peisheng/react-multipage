/**
 * Created by Administrator on 2016/11/29.
 */
import React from 'react';

export  default class HotItem extends  React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <li className='good1_one fl'>
                <div className='goods-a'>
                    <a href='/detail/94198' target='_blank'><img src='http://acdn.taokezhushou.com/image/48e34ebdff050b0f9a5ee36d235e22c4.jpeg@1e_1c_0o_0l_287h_287w_100q.src' width='287' height='287'/></a>
                    <div className='title'>
                        <i className='tit1'></i>
                        <p><a href='/detail/94198' target='_blank'>【嘉能】家用双驱动旋转拖把</a></p>
                    </div>
                    <div className='coupon'>优惠券<span className='num1 gd_wd'>20.00</span>元，剩余数量<span className='num2 gd_wd'>26921</span>/<span className='num3'>30000</span></div>
                    <div className='commission'>
                        <ul>
                            <li className='com1 gd_wd2 fl'>佣金<span>30.5%</span></li>
                            <li className='com2 fl'>定向</li>
                            <li className='com3 fl'>秒过</li>
                            <li className='com4 fr'>目前销量<span className='com4_num gd_wd2'>41260</span></li>
                        </ul>
                    </div>
                    <div className='good_btm'>
                        <ul>
                            <li className='btm1 fl'>券后&nbsp;¥&nbsp;<span className='value'>39.9</span></li>
                            <li className='btm2 fl'>¥59.9</li>
                            <li className='btm3 fr'><a href='/detail/94198' target='_blank'>立即推广</a></li>
                        </ul>
                    </div>
                </div>
            </li>
        );
    }
}