/* eslint-disable @next/next/no-img-element */
import React from 'react'
import IArticle from '../interfaces/Article'
import Image from 'next/image'
import styles from '../styles/Shop.module.scss'
import Link from 'next/link'

interface IArticleProps{
    article: IArticle
}
function ArticleCard(props: IArticleProps) {
    const image = props.article.attributes.displayimage.data.attributes.formats.small
    console.log(props)
    return (
        <Link href={'/artikel/'+ props.article.id} passHref>

        <div className={styles.articleContainer}>
                <div  className={styles.articleImage}><img src={image.url} alt=""  width={image.width} height={image.height}  /></div>
            <span className={styles.articleTitle} >{props.article.attributes.name}</span>
            <div>
                <span className={styles.articlePrice}>{props.article.attributes.price} kr</span>
                {props.article.attributes.sold ? <span className={styles.articlePrice}>Slutsåld</span> : null}
            </div>
            
        </div>
        </Link>

    )
}

export default ArticleCard
