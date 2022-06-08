/**
 * Header
 * @param {object} children is your menu link items
 */
// import useScrollingUp from '@/hooks/useScrollingUp'

import useScrollingUp from "../../modules/hooks/useScrollingUp"

const Header = () => {
    const scrolled = useScrollingUp()
    return <header className={`${scrolled ? 'stickyHeader' : ''}`}></header>
}
export default Header