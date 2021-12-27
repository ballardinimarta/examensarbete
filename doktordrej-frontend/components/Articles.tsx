import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import IArticle from '../interfaces/Article';
import ArticleCard from './ArticleCard';
import styles from '../styles/Shop.module.scss'
import {FaAngleDown, FaAngleUp} from 'react-icons/fa';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

interface ICategory {
    id: Number,
    attributes: {
        name: string
    }
}
function Articles() {
    const [dropdown, setDropdown] = useState(false);
    const [endpoint, setEndpoint] = useState('/api/articles?populate=*&pagination[pageSize]=1')
    const [category, setCategory] = useState('Alla')
    const categories = useFetch('/api/categories')
    const {data , error, loading} = useFetch(endpoint)
    if (error) return <p>Error :(</p>

    return (
        <>
        <div className={styles.categoryButton} onClick={()=> {setDropdown(!dropdown)}}>
            <span>Kategori: {category}
                {dropdown ? <FaAngleUp/> : <FaAngleDown/> } 
            </span> 
        </div>
        {dropdown ? 
        <div className={styles.dropdown}>
            <ul>
                <li key="0" onClick={()=>{
                        setEndpoint('/api/articles?populate=*')
                        setCategory('Alla')

                    }}>Alla</li>
                {categories.data.data.map((category: ICategory) => {
                    return <li key={category.id.toString()} onClick={()=>{
                        setEndpoint('/api/articles?populate=*&filters[category][id][$eq]=' + category.id)
                        setCategory(category.attributes.name)
                    }}>{category.attributes.name}</li>
                })}
            </ul>
        </div> : null}
        {loading ? 
        <div className="loaderContainer"><Loader type="ThreeDots" color="#1e1e24" height={80} width={80} /></div>: null}
        <div className={styles.articlesWrapper}>
            <div className={styles.articlesContainer}>
                {data ? data.data.map((article: IArticle) => {return(<ArticleCard key={article.id.toString()} article={article}/>)}) : <p>Sorry something went wrong :(</p>}
            </div>
        </div>
        </>
    )
}

export default Articles
