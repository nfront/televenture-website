import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import WithBackgroundCover from '../WithBackgroundCover';

const BackgroundSection = ({ className, style, children, tag = 'section', backgroundColor = '#040e18', image }) => {
  return (
    <BackgroundImage
      Tag={tag}
      className={className}
      fluid={image.fluid}
      backgroundColor={backgroundColor}
      style={{ objectFit: `cover`, objectPosition: `50% 50%`, ...style }}
    >
      {children}
    </BackgroundImage>
  );
};

export default WithBackgroundCover(BackgroundSection, 'NewsCoverImage');
