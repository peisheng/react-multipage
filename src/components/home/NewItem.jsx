import React from  "react";
export default class NewItem extends  React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <li className='good1_one fl'>
                <div className='goods-a'>
                    <a href='/detail/95062' target='_blank'>
                        <img
                            src='http://acdn.taokezhushou.com/items/d689a60ec377a7ec9d40e9a070629f9e.jpg@1e_1c_0o_0l_287h_287w_100q.src'
                            alt='楠松称重电子称测体重秤家用精准人体秤成人健康减肥电子秤体重称'/>
                        <div className='newdays2 newd2'></div>
                    </a>
                    <div className='title'><a href='/detail/95062' target='_blank'>
                        <i className='tit1'></i>
                    </a><p><a href='/detail/95062' target='_blank'></a><a href='/detail/95062' target='_blank'>楠松称重电子称测体重秤家用精准人</a>
                    </p>
                    </div>
                    <div className='coupon'>优惠券<span className='num1 gd_wd1'>5.00</span>元，剩余数量<span className='num2 gd_wd1'>9937</span>/<span
                        className='num3'>10000</span></div>
                    <div className='commission'>
                        <ul>
                            <li className='com1 gd_wd2 fl'>佣金<span>30%</span></li>
                            <li className='com2 fl'>定向</li>
                            <li className='com3 fl'>秒过</li>
                            <li className='com4 fr'>目前销量<span className='com4_num gd_wd2'>10799</span></li>
                        </ul>
                    </div>
                    <div className='good_btm'>
                        <ul>
                            <li className='btm1 fl'>券后&nbsp;¥&nbsp;<span className='value'>24.8</span></li>
                            <li className='btm2 fl'>¥29.8</li>
                            <li className='btm3 fr'><a href='/detail/95062' target='_blank'>立即推广</a></li>
                        </ul>
                    </div>
                </div>
            </li>
        );
    }
}