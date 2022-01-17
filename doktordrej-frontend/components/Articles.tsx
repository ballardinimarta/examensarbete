import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import IArticle from '../interfaces/Article';
import ArticleCard from './ArticleCard';
import styles from '../styles/Shop.module.scss'
import {FaAngleDown, FaAngleUp} from 'react-icons/fa';
import {GrClose} from 'react-icons/gr'
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
          setCategory('Alla')
          setEndpoint('/api/articles?_q='+searchTerm+'&pagination[page]=1&pagination[pageSize]=8&populate=*')
          setSearchLoad(false)
        }, 1500)
    
        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])
    const [pageSize, setPageSize] = useState('8')
    const [dropdown, setDropdown] = useState(false);
    const [dropdownSearch, setDropdownSearch] = useState(false);
    const [endpoint, setEndpoint] = useState('/api/articles?pagination[page]=1&pagination[pageSize]='+pageSize+'&populate=*')
    const [category, setCategory] = useState('Alla')
    const [searchLoad, setSearchLoad] = useState(false)

    const categories = useFetch('/api/categories')
    const {data , error, loading} = useFetch(endpoint)
    if (error) return <p>Sorry something went wrong :( try to reload the page</p>
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
                            setPageSize('8')
                            setEndpoint('/api/articles?pagination[page]=1&pagination[pageSize]=8&populate=*')
                            setCategory('Alla')

                        }}>Alla</li>
                    {categories.data.data.map((category: ICategory) => {
                        return <li key={category.id.toString()} onClick={()=>{
                            setPageSize('8')
                            setEndpoint('/api/articles?pagination[page]=1&pagination[pageSize]=8&populate=*&filters[category][id][$eq]=' + category.id)
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
                    <input  type="text"  
                        onChange={e => { setSearchTerm(e.target.value); }}
                        value={searchTerm}/>
                    <GrClose onClick={() => {
                        setSearchLoad(true)
                        setSearchTerm('')
                        setDropdownSearch(false)
                    }}/>
                </div>
            : null}
       </div>
        
        {loading || searchLoad ? 
        <div className="loaderContainer"><Loader type="TailSpin" color="#1e1e24" height={80} width={80} /></div>: 
        null
        }
        <div className={styles.articlesWrapper}>
            <div className={styles.articlesContainer}>
                {data ? data.data.map((article: IArticle) => {return(<ArticleCard key={article.id.toString()} article={article}/>)}) :null}
            </div>
        </div>

        
        
        <div className={styles.pagContainer}>
            {data ? 
             Number(pageSize) >= data.meta.pagination.total ?
           <p></p>
            :  <button className='blackButton' onClick={() => {
                let page = ((Number(pageSize)+8).toString())
                setPageSize(page)
                setEndpoint('/api/articles?pagination[page]=1&pagination[pageSize]='+page+'&populate=*')

            }}>Visa mer!</button>
            : null}
            
        </div>
        </>
    )
}

export default Articles
