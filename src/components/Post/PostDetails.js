import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 3em auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 0.6em;
  }
`;

const Date = styled.p`
  display: inline-block;
`;

const ReadingTime = styled.p`
  display: inline-block;
`;

const PostDetails = ({ date, timeToRead }) => {
  return (
    <Wrapper>
      {date && <Date>📅 {date}</Date>}
      {timeToRead && (
        <React.Fragment>
          <span>•</span>
          <ReadingTime>{`⏱️ ${timeToRead} min read `}</ReadingTime>
        </React.Fragment>
      )}
    </Wrapper>
  );
};

export default PostDetails;
