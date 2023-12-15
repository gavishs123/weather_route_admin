import LOGO from '../../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="bg-[#333333] py-14  w-full bottom-0	">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-12">
                    <div className="sm:col-span-6 md:col-span-6 lg:col-span-3">
                        <div className="flex gap-4 items-center mb-2">
                            <img className="h-8 w-auto" src={LOGO} alt="Your Company" />
                            <p className='text-white'>GET HIGHWAY WEATHER</p>
                        </div>
                    </div>
                    <div className="sm:col-span-6 md:col-span-6 lg:col-span-3">
                        <ul className="text-white">
                            <p className="lg:mb-4 md:mb-2 sm:mb-2 xs:mb-3">SERVICES</p>
                            <li className="mb-1">
                                <a href="">Highway Weather App</a>
                            </li>
                            <li className="mb-1">
                                <a href="">Maps</a>
                            </li>
                            <li className="mb-1">
                                <a href="">Local</a>
                            </li>
                            <li className="mb-1">
                                <a href="">API</a>
                            </li>
                            <li className="mb-1">
                                <a href="">Help Center</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sm:col-span-6 md:col-span-6 lg:col-span-3">
                        <ul className="text-white">
                            <p className="lg:mb-4 md:mb-2 sm:mb-2 xs:mb-3">COMPANY</p>
                            <li className="mb-1"><a href="">About Us</a></li>
                            <li className="mb-1"><a href="">Press Kit</a></li>
                            <li className="mb-1"><a href="">Articles</a></li>
                        </ul>
                    </div>
                    <div className="sm:col-span-6 md:col-span-6 lg:col-span-3">
                        <ul className="text-white">
                            <p className="lg:mb-4 md:mb-2 sm:mb-2 xs:mb-3">CONTACT</p>
                            <li className="mb-1"><a href=""><FontAwesomeIcon icon={faPhone} /><span className='ms-2'>Contact Us</span></a></li>
                            <li className="mb-1"><a href=""><FontAwesomeIcon icon={faFacebookF} /><span className='ms-2'>Facebook</span></a></li>
                            <li className="mb-1"><a href=""><FontAwesomeIcon icon={faInstagram} /><span className='ms-2'>Instagram</span></a></li>
                            <li className="mb-1"><a href=""><FontAwesomeIcon icon={faTwitter} /><span className='ms-2'>Twitter</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer