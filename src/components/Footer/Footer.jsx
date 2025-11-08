import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FaFacebookF, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";
import { SiThreads } from "react-icons/si";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { MdCall } from "react-icons/md";

import './Footer.scss';

const Footer = () => {

    const iconStyle = {
        color: "white",
        fontSize: "1vw",
        margin: "1vw",
        cursor: "pointer"
    };

    return (
        <div className='footer'>
            <img src="./footerHome.png" alt="" />
            <div className="footer-container">
                <div className='left-footer'>
                    <h3>About Homes</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend tristique venenatis. Maecenas a rutrum tellus nam vel semper nibh.</p>
                    <div>
                        <a href="https://facebook.com">
                             <FaFacebookF className='media-icon' />
                        </a>
                        <a href="https://instagram.com">
                            <FaInstagram className='media-icon' />
                        </a>
                       <a href="https://x.com">
                         <FaXTwitter className='media-icon' />
                       </a>
                        <a href="https://threads.com">
                            <SiThreads className='media-icon' />
                        </a>
                        <a href="https://tiktok.com">
                            <FaTiktok className='media-icon' />
                        </a>
                    </div>
                </div>
                <div className="respons-div">
                <div className='middle-footer'>
                    <h3>Latest Blog Posts</h3>
                    <div className='latest-blog1'>
                        <img src="./footerFirst.png" alt="" />
                        <div className='first-blog'>
                            <p>
                                How to find the perfect area for
                                your next house.
                            </p>
                            <div className='first-blog-icons'>
                                <div>
                                    <MdOutlineAccessTime className='latest-icon'  />
                                    <p>5 min</p>
                                </div>
                                <div>
                                    <IoChevronForwardCircleOutline className='latest-icon' />
                                    <p>Read More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='latest-blog2'>
                        <img src="./footerSecond.png" alt="" />
                        <div className='first-blog'>
                            <p>How to find the perfect area for
                                your next house.</p>
                            <div className='first-blog-icons'>
                                <div>
                                    <MdOutlineAccessTime className='latest-icon'/>
                                    <p>5 min</p>
                                </div>
                                <div>
                                    <IoChevronForwardCircleOutline className='latest-icon'/>
                                    <p>Read More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-footer'>
                    <h3>Get In Touch</h3>
                    <div>
                        <GoLocation className='contact-icon'/>
                        <p>132 Liberty Streetelit, Plano, Texas</p>
                    </div>
                    <div>
                        <HiOutlineMail className='contact-icon'/>
                        <p>hello@home.com</p>
                    </div>
                    <div>
                        <MdCall className='contact-icon'/>
                        <p>214-805-4428</p>
                    </div>
                    <p className='date1'>Monday – Friday: 9 am – 5 pm</p>
                    <p className='date2'>Saturday: 9 am – 1pm</p>
                </div>
                </div>
            </div>
            <p className='copyRight'>Copyright ©2025 All rights reserved | This template is made with  <FavoriteBorderIcon fontSize='5px' /> by <a target='blank' href="https://colorlib.com"> Colorlib</a></p>
        </div>
    )
}

export default Footer