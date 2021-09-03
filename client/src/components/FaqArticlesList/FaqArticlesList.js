import React from "react";
import styles from "./FaqArticlesList.module.sass";
import faqs from "./faqs.json";

function FaqArticlesList() {
  const [col1, col2] = faqs;

  return (
    <div className={styles.articlesMainContainer}>
      <div className={styles.ColumnContainer}>
        <div className={styles.ColumnContainer}>
          {col1.map((article) => {
            return (
              <div>
                <h3 className={styles.headerArticle}>{article.header}</h3>
                <p className={styles.article}>{article.body}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.ColumnContainer}>
          {col2.map((article) => {
            return (
              <div>
                <h3 className={styles.headerArticle}>{article.header}</h3>
                <p className={styles.article}>{article.body}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.article}>
          Check out our <span className={styles.orangeSpan}>FAQs</span> or send
          us a<span className={styles.orangeSpan}>message</span>. For assistance
          with launching a contest, you can also call us at (877) 355-3585 or
          schedule a
          <span className={styles.orangeSpan}>Branding Consultation</span>
        </div>
      </div>
    </div>
  );
}

export default FaqArticlesList;
