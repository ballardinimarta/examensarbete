import Image from 'next/image';
import styles from './../styles/Article.module.scss'
import React from 'react'
import IArticle from '../interfaces/Article'
import Carousel from './Carousel';


interface IArticleProps{
    article: IArticle
}

function Article(props: IArticleProps) {
    
    let imagelist =  props.article.attributes.images.data
    console.log(imagelist)
    if (!imagelist.includes(props.article.attributes.displayimage.data)) {
        imagelist.unshift(props.article.attributes.displayimage.data)

    }
    console.log(imagelist)

    return (
        <div className={styles.articleWrapper}>
            <div className={styles.articleContainer}>
                <div className={styles.carouselContainer}>
                    <Carousel imageList={imagelist}/>     
                </div>
           
                <div className={styles.articleInfoContainer}>
                    <span className={styles.articleTitle} >{props.article.attributes.name}</span>
                    <span className={styles.articlePrice}>{props.article.attributes.price} kr</span>
                    <p className={styles.articleDescription}>{props.article.attributes.description}</p>
                    {props.article.attributes.sold ? <span className={styles.articlePrice}>Slutsåld</span> : <button className={styles.shopButton} >Beställ här!</button>}
                </div>
            </div>  
        </div>
        
    )
}

export default Article
