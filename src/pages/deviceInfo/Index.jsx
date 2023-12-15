import { useState, useEffect } from "react"

const DeviceInfo = () => {
    const [isMobile, setIsMobile] = useState()
    const [dimensions, setDimensions] = useState({
        innerWidth: '',
        innerHeight: ''
    })

    useEffect(() => {
        let userAgent = navigator?.userAgentData
        if (userAgent) {
            setIsMobile(userAgent.mobile)
        }
        setDimensions({
            innerWidth: window.innerHeight,
            innerHeight: window.innerWidth
        })
        const resizeListener = window.addEventListener('resize', () => {
            setDimensions({
                innerWidth: window.innerHeight,
                innerHeight: window.innerWidth
            })
        })
        return () => window.removeEventListener('resize', resizeListener)
    }, [])

    return (
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-10'>
            <h2 className="text-center text-3xl	pt-10 pb-5">Device Info</h2>
            <div className="bg-white max-w-sm p-4 rounded">
                <ul>
                    <li>{`This is a render for a ${isMobile ? 'mobile device' : 'non-mobile device'}`}</li>
                    <li>{`This is a responsive ${isMobile ? 'mobile device' : 'non-mobile device'}`}</li>
                    <li>{`Window size: ${dimensions.innerWidth}x${dimensions.innerHeight}`}</li>
                </ul>
            </div>
        </div>
    )
}

export default DeviceInfo