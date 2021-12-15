import NavStyles from './../styles/Nav.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import logo from './../public/doktordrejlogo.svg'
import close from './../public/close.svg'
import { useRouter } from 'next/router'


function Nav() {
    const [toggle, setToggle] = useState(false)
    const router = useRouter();

    useEffect(() => {
        setToggle(false);
    }, [router.asPath]);
    return (
        <>
        <div className={NavStyles.navBar}>
            <div className={NavStyles.logo} onClick={() => {
                setToggle(!toggle)
            }}>
                <Image  src={ toggle ? close : logo } alt="" />
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
                    <Link href="/blogg">Blogg</Link>
                </li>
            </ul>
        </div> : 
        <p></p>}
        </>
    )
}

export default Nav