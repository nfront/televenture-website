import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  margin: 0;
  padding: 0 1.5em 2em;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  font-family: worksans-extralight, work sans, sans-serif;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  a {
    background: ${props => props.theme.colors.base};
    color: black;
    padding: 1em;
    border-radius: 2px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      background: ${props => props.theme.colors.highlight};
    }
  }
`;

const PreviousLink = styled(Link)`
  margin-right: auto;
  order: 1;
`;

const NextLink = styled(Link)`
  margin-left: auto;
  order: 2;
`;

const PostLinks = ({ previous, next }) => {
  return (
    <Wrapper>
      <Box>
        {previous && <PreviousLink to={`/${previous.slug}/`}>&#8592; Prev Post</PreviousLink>}
        {next && <NextLink to={`/${next.slug}/`}>Next Post &#8594;</NextLink>}
      </Box>
    </Wrapper>
  );
};

export default PostLinks;
