/* eslint-disable @next/next/no-img-element */
import React from "react";
import IArticle from "../interfaces/Article";
import Image from "next/image";
import styles from "../styles/Shop.module.scss";
import Link from "next/link";

interface IArticleProps {
  article: IArticle;
}
function ArticleCard(props: IArticleProps) {
  return (
    <Link href={"/artikel/" + props.article.name} passHref>
      <div className={styles.articleContainer}>
        <div className={styles.articleImage}>
          <img src={props.article.content.displayImage.filename} alt="" />
        </div>
        <span className={styles.articleTitle}>
          {props.article.content.name}
        </span>
        <div>
          <span className={styles.articlePrice}>
            {props.article.content.price} kr
          </span>
          {props.article.content.isSold ? (
            <span className={styles.articlePrice}>Slutsåld</span>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
