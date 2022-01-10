import LayoutStyles from './../styles/Layout.module.scss'
import React from 'react'
interface ILayoutProps {
    children?:
    | React.ReactChild
    | React.ReactChild[];
}
function Layout(props: ILayoutProps) {
    return (
        <>
            <div className={LayoutStyles.container}>
                <main>{props.children}</main>
            </div>
        </>
    )
}

export default Layout
