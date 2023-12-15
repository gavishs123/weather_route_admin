import { NavLink } from 'react-router-dom'
import LOGO from '../../../assets/images/logo.png'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [profileMenu, setProfileMenu] = useState(false)

    const toggleProfileMenu = () => {
        setProfileMenu((old) => !old)
    }

    return (
        <nav className="bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className=" relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center text-black gap-3 text-black">
                            <img className="h-8 w-auto" src={LOGO} alt="Your Company" />
                            <span className='capitalize'>get highway weather</span>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <NavLink
                                    to='/dashboard'
                                    className={(data) => {
                                        let classStr = 'text-gray-bold  rounded-md px-3 py-2 text-sm font-medium'
                                        classStr = classStr + ' ' + (data.isActive ? 'bg-[lightgray]' : '')
                                        return classStr
                                    }}>
                                    Dashboard
                                </NavLink>
                                <NavLink
                                    to='/map'
                                    className={(data) => {
                                        let classStr = 'text-gray-bold  rounded-md px-3 py-2 text-sm font-medium'
                                        classStr = classStr + ' ' + (data.isActive ? 'bg-[lightgray]' : '')
                                        return classStr
                                    }}>
                                    Map
                                </NavLink>
                                <NavLink
                                    to='/analytics'
                                    className={(data) => {
                                        let classStr = 'text-gray-bold  rounded-md px-3 py-2 text-sm font-medium'
                                        classStr = classStr + ' ' + (data.isActive ? 'bg-[lightgray]' : '')
                                        return classStr
                                    }}>
                                    Analytics
                                </NavLink>
                                <NavLink
                                    to='/support'
                                    className={(data) => {
                                        let classStr = 'text-gray-bold  rounded-md px-3 py-2 text-sm font-medium'
                                        classStr = classStr + ' ' + (data.isActive ? 'bg-[lightgray]' : '')
                                        return classStr
                                    }}>
                                    Support
                                </NavLink>
                                <NavLink
                                    to='/device-info'
                                    className={(data) => {
                                        let classStr = 'text-gray-bold  rounded-md px-3 py-2 text-sm font-medium'
                                        classStr = classStr + ' ' + (data.isActive ? 'bg-[lightgray]' : '')
                                        return classStr
                                    }}>
                                    Device Info
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative ml-3">
                            <div>
                                <button
                                    type="button"
                                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    onClick={toggleProfileMenu}
                                >
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </button>
                            </div>

                            {profileMenu && <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                <a href="#" className="block hover:bg-gray-100  px-4 py-2 text-sm text-gray-700 flex gap-2 items-center" role="menuitem" tabIndex="-1" id="user-menu-item-0"><FontAwesomeIcon icon={faUser} /> Your Profile</a>
                                <a href="#" className="block hover:bg-gray-100  px-4 py-2 text-sm text-gray-700 flex gap-2 items-center" role="menuitem" tabIndex="-1" id="user-menu-item-1"><FontAwesomeIcon icon={faGear} /> Settings</a>
                                <a href="#" className="block hover:bg-gray-100  px-4 py-2 text-sm text-gray-700 flex gap-2 items-center" role="menuitem" tabIndex="-1" id="user-menu-item-2"><FontAwesomeIcon icon={faRightFromBracket} /> Sign out</a>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Analytics</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Support</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Device Info</a>
                </div>
            </div>
        </nav >
    )
}

export default Navbar