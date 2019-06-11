import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto 0;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 2em 0;
  font-family: worksans-extralight, work sans, sans-serif;

  a {
    background: ${props => props.theme.colors.base};
    color: #010025;
    padding: 0.5em;
    border-radius: 2px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      background: ${props => props.theme.colors.highlight};
    }
  }
`;

const PreviousLink = styled(props => <Link {...props} />)`
  position: absolute;
  left: 0;
  top: 0;
`;

const NextLink = styled(props => <Link {...props} />)`
  position: absolute;
  right: 0;
  top: 0;
`;

const PageIndicator = styled.span`
  color: black;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  justify-self: center;
  padding: 1em 1.5em;
  z-index: 0;
  opacity: 0.7;
`;

const Pagination = ({ context }) => {
  const { numPages, currentPage } = context;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const isNotPaginated = isFirst && isLast;

  const prevPageNum = currentPage - 1 === 1 ? `` : currentPage - 1;
  const nextPageNum = currentPage + 1;

  const pathPrefix = '/news';
  const prevPageLink = isFirst ? null : `${pathPrefix}/${prevPageNum}/`;
  const nextPageLink = isLast ? null : `${pathPrefix}/${nextPageNum}/`;
  return (
    <Wrapper>
      {!isFirst && <PreviousLink to={prevPageLink}>&#8592; Prev Page</PreviousLink>}
      {!isNotPaginated && (
        <PageIndicator>
          {currentPage}/{numPages}
        </PageIndicator>
      )}
      {!isLast && <NextLink to={nextPageLink}>Next Page &#8594;</NextLink>}
    </Wrapper>
  );
};

export default Pagination;
