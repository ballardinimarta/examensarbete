import Image from 'next/image';
import styles from './../styles/Article.module.scss'
import React from 'react'
import IArticle from '../interfaces/Article'
import { Carousel } from '@trendyol-js/react-carousel';
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa';


interface IArticleProps{
    article: IArticle
}
interface IImage {
        "id": number,
        "attributes": {
          "width": number,
          "height": number,
          "formats": any,
          "url": string
        }
}
function Article(props: IArticleProps) {
    const production = process.env.NODE_ENV === "production";
    const baseUrl = production ? "https://www.yoursite.com" : "http://localhost:3001";
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
                    <Carousel show={1} slide={1} useArrowKeys={true} rightArrow={<FaAngleRight/>} leftArrow={<FaAngleLeft/>}>

                    {imagelist.map((image: IImage, i:number)=> {
                                return(
                                            <Image key={i+1}  src={baseUrl+image.attributes.url} alt=""  width={image.attributes.width} height={image.attributes.height}  />   
                                        )
                                    }
                                )
                            }
                    </Carousel>
                    
                        
                </div>
           
                <div className={styles.articleInfoContainer}>
                    <span className={styles.articleTitle} >{props.article.attributes.name}</span>
                    <span className={styles.articlePrice}>{props.article.attributes.price} kr</span>
                    <p>{props.article.attributes.description}</p>
                    {props.article.attributes.sold ? <span className={styles.articlePrice}>Slutsåld</span> : <button className={styles.shopButton} >Beställ här!</button>}
                </div>
            </div>  
        </div>
        
    )
}

export default Article
