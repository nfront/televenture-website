import React from 'react';
import Background from './HeaderBackground';
import CardList from './CardList';
import Card from './Card';
import Pagination from './Pagination';
import styles from './index.module.scss';

const NewsSection = ({ posts, pageContext }) => {
  return (
    <div className={styles.newsContainer}>
      <Background content="News" />
      <div className={styles.newsWrapper}>
        <CardList>
          {posts.map(({ node: post }) => (
            <Card key={post.id} {...post} />
          ))}
        </CardList>
        <Pagination context={pageContext} />
      </div>
    </div>
  );
};
export default NewsSection;
