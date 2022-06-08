import { useEffect, useState } from 'react'
import { off, on } from '../shared/util'
/**
 * useScrollingUp custom react hook
 * @returns {boolean}
 */
const useScrollingUp = () => {
    let prevScroll: any;
    //if it is SSR then check you are now on the client and window object is available
    const [scrollingUp, setScrollingUp] = useState(false)
    const handleScroll = () => {
        const currScroll = window.pageYOffset
        const isScrolled = prevScroll > currScroll
        setScrollingUp(isScrolled)
        prevScroll = currScroll
    }
    useEffect(() => {
        on(window, 'scroll', handleScroll, { passive: true })
        return () => {
            off(window, 'scroll', handleScroll, { passive: true })
        }
    }, [])
    return scrollingUp
}

export default useScrollingUp