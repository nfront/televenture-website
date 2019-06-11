import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Post = styled.li`
  position: relative;
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  background: white;
  font-family: worksans-extralight, work sans, sans-serif;
  transition: background 0.2s;

  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`;

const Title = styled.h2`
  font-size: 1.2em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
  font-family: worksans-extralight, work sans, sans-serif;
`;

const Date = styled.h3`
  margin: 0 1rem 0 1rem;
  font-size: 0.9em;
  color: gray;
`;

const ReadingTime = styled.h4`
  margin: 0 1rem 0 1rem;
  font-size: 0.8em;
  color: gray;
`;

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  font-size: 1em;
  line-height: 1.5;
  color: black;
`;

const Card = ({
  slug,
  heroImage,
  title,
  publishDate,
  body,
  body: {
    childMarkdownRemark: { timeToRead },
  },
  featured,
  ...props
}) => {
  return (
    <Post featured={featured}>
      <Link to={`/${slug}/`}>
        <Img
          fluid={heroImage.fluid}
          backgroundColor="#eeeeee"
          imgStyle={{ objectFit: `cover`, objectPosition: `50% 50%` }}
        />
        <Title>{title}</Title>
        <Date>{publishDate}</Date>
        {timeToRead && <ReadingTime>{timeToRead} min read</ReadingTime>}
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.excerpt,
          }}
        />
      </Link>
    </Post>
  );
};

export default Card;
