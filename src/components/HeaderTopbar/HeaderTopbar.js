import React from 'react'
import {Link}  from 'react-router-dom'
import icon1 from '../../images/icon/1.png'
import icon2 from '../../images/icon/2.png'


const HeaderTopbar = () => {
    return(	
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-7 col-md-5 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i><img src={icon1} alt=""/></i>Sun - Fri   ||   8:00 - 7:00</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-7 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><a href="tel:+6494461709"><i><img src={icon2} alt=""/></i> +00 56 98 46</a></li>
                                <li className='lan-sec'>
                                    <select name="" id="">
                                        <option value="">English</option>
                                        <option value="">Spain</option>
                                        <option value="">France</option>
                                        <option value="">Italy</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;