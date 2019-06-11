import React from 'react';
import styles from './index.module.scss';
import Hero from './Hero';
import PostDetails from './PostDetails';
import PageBody from './PageBody';
import PostLinks from './PostLinks';

const PostSection = ({ title, heroImage, publishDate, body, previous, next }) => {
  return (
    <div className={styles.postContainer}>
      <Hero content={title} image={heroImage} overlayDark={false} />
      <PostDetails date={publishDate} timeToRead={body.childMarkdownRemark.timeToRead} />
      <PageBody body={body} />
      <PostLinks previous={previous} next={next} />
    </div>
  );
};

export default PostSection;
