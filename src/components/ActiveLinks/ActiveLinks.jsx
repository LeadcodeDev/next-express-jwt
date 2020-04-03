import { useRouter } from 'next/router'
import Link from 'next/link'

function ActiveLinks({ children, target, toggle }) {
    const { pathname } = useRouter()
    
    const handleNavbar = () => {
        toggle()
    }

    return (
        <li className={pathname == target ? "nav-item active" : "nav-item"}>
            {pathname == target ? (
                <a className="text-blue" onClick={handleNavbar}>{children}</a>
            ) : (
                <Link href={target}><a onClick={handleNavbar} className="nav-item">{children}</a></Link>
            )}
        </li>
    )
}

export default ActiveLinks