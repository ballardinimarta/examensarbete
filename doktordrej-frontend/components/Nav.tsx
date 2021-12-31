import NavStyles from './../styles/Nav.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import logo from './../public/logo.svg'
import { useRouter } from 'next/router'

interface INavProps {
    dark: boolean
}
function Nav(props: INavProps) {
    const [toggle, setToggle] = useState(false)
    const router = useRouter();

    useEffect(() => {
        setToggle(false);
    }, [router.asPath]);
    return (
        <>
        <div className={NavStyles.navBar}>
            <div className={ toggle ? NavStyles.close : props.dark ? NavStyles.logoDark : NavStyles.logoLight} onClick={() => {
                setToggle(!toggle)
            }}>
            </div>
        </div>
        {toggle ? 
        <div className={NavStyles.navContainer}>
            <ul >
                <li>
                    <div className={NavStyles.logo}>
                        <Image  src={logo} alt="" />
                    </div>
                </li>
                <li >
                    <Link href="/">Hem</Link>
                </li>
                <li>
                    <Link href="/galleri">Galleri</Link>
                </li>
                <li>
                    <Link href="/shop">Shop</Link>
                </li>
            </ul>
        </div> : 
        <p></p>}
        </>
    )
}

export default Nav