import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import IArticle from '../interfaces/Article';
import ArticleCard from './ArticleCard';
import styles from '../styles/Shop.module.scss'
import {FaAngleDown, FaAngleUp, FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

interface ICategory {
    id: Number,
    attributes: {
        name: string
    }
}

function Articles() {
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
          console.log(searchTerm)
          setEndpoint('/api/articles?_q='+searchTerm+'&pagination[page]=1&pagination[pageSize]=1&populate=*')
        }, 2000)
    
        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])
    const [pageSize, setPageSize] = useState('1')
    const [dropdown, setDropdown] = useState(false);
    const [dropdownSearch, setDropdownSearch] = useState(false);
    const [endpoint, setEndpoint] = useState('/api/articles?pagination[page]=1&pagination[pageSize]='+pageSize+'&populate=*')
    const [category, setCategory] = useState('Alla')
    const categories = useFetch('/api/categories')

    const {data , error, loading} = useFetch(endpoint)
    if (error) return <p>Error :(</p>
        
    return (
        <>
        <div className={styles.optionsBar}>
            <div className={styles.categoryButton} onClick={()=> {setDropdown(!dropdown)}}>
                <span>Kategori: {category}
                    {dropdown ? <FaAngleUp/> : <FaAngleDown/> } 
                </span> 
            </div>
            {dropdown ? 
            <div className={styles.dropdown}>
                <ul>
                    <li key="0" onClick={()=>{
                            setPageSize('1')
                            setEndpoint('/api/articles?pagination[page]=1&pagination[pageSize]=1&populate=*')
                            setCategory('Alla')

                        }}>Alla</li>
                    {categories.data.data.map((category: ICategory) => {
                        return <li key={category.id.toString()} onClick={()=>{
                            setPageSize('1')
                            setEndpoint('/api/articles?pagination[page]=1&pagination[pageSize]=1&populate=*&filters[category][id][$eq]=' + category.id)
                            setCategory(category.attributes.name)
                        }}>{category.attributes.name}</li>
                    })}
                </ul>
            </div> : null}
        <div  className={styles.searchButton} onClick={()=> {setDropdownSearch(!dropdownSearch)}}>
                <span>Sök 
                    {dropdownSearch ? <FaAngleUp/> : <FaAngleDown/> } 
                </span> 
            </div>
            {dropdownSearch ? 
                <div className={styles.searchBar}>
                    <input  type="text"  onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>
            : null}
       </div>
        
        {loading ? 
        <div className="loaderContainer"><Loader type="ThreeDots" color="#1e1e24" height={80} width={80} /></div>: null}
        <div className={styles.articlesWrapper}>
            <div className={styles.articlesContainer}>
                {data ? data.data.map((article: IArticle) => {return(<ArticleCard key={article.id.toString()} article={article}/>)}) : <p>Sorry something went wrong :(</p>}
            </div>
        </div>
        
        <div className={styles.pagContainer}>
            {data ? 
             Number(pageSize) >= Number(data.meta.pagination.total) ?
           <p></p>
            :  <button className='blackButton' onClick={() => {
                let page = ((Number(pageSize)+10).toString())
                setPageSize(page)
                setEndpoint('/api/articles?pagination[page]=1&pagination[pageSize]='+page+'&populate=*')

            }}>Visa mer!</button>
            : null}
            
        </div>
        </>
    )
}

export default Articles
