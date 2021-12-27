import type { NextPage } from 'next'
import Articles from '../components/Articles'
import styles from '../styles/Shop.module.scss'

const Shop: NextPage = () => {
    return (
        <div>
            <div className="pageTitle"><span>Shop</span> <hr></hr> </div>
            <Articles/>
        </div>
    )
}

export default Shop