import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Image from '../images/404.png';

const TextHeader = styled.div`
  margin-top: 62px;
  color: #3eb8ea;
  font-size: 66px;
  font-family: HelveticaNeueW01-45Ligh;
  letter-spacing: 1px;
  line-height: 90px;
  text-align: center;

  @media (max-width: 612px) and (min-width: 380px) {
    margin-top: 10vw;
    font-size: 10vw;
    line-height: 13vw;
  }

  @media (max-width: 380px) {
    font-size: 31px;
    line-height: 50px;
  }
`;

const Description = styled.div`
  margin-top: 19px;
  font-family: HelveticaNeueW01-45Ligh;
  letter-spacing: 1px;
  font-size: 20px;
  line-height: 39px;
  color: #184a56;
  text-align: center;

  @media (max-width: 612px) and (min-width: 380px) {
    font-size: 3.4vw;
    line-height: 6.8vw;
  }

  @media (max-width: 380px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const Wrapper = styled.div`
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  margin-top: 37px;
  outline: 0;
  height: 56px;
  letter-spacing: 0.8px;
  line-height: 50px;
  font-size: 22px;
  text-align: center;
  border-radius: 28px;
  font-family: HelveticaNeueW01-45Ligh;
  cursor: pointer;
  border: 2px solid #3eb8ea;
  background-color: #fff;
  color: #3eb8ea;
  box-sizing: border-box;
  transition-property: color, background-color;
  transition-duration: 0.2s;
  padding: 0 20px;
  &:hover {
    background-color: #3eb8ea;
    color: #fff;
  }
`;

const ImageWrapper = styled.div`
  width: 318px;
  margin-left: -20px;

  @media (max-width: 612px) and (min-width: 380px) {
    margin-left: -2.9vw;
    width: 52vw;
  }

  @media (max-width: 380px) {
    width: 216px;
  }
`;

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <Wrapper>
      <ImageWrapper>
        <img width="100%" height="100%" src={Image} alt="" />
      </ImageWrapper>
      <TextHeader>PAGE NOT FOUND</TextHeader>
      <Description>
        We looked everywhere for this page. Are you sure the website URL is correct? Get in touch with the site owner.
      </Description>
      <Link to="/">
        <Button>Go Back Home</Button>
      </Link>
    </Wrapper>
  </div>
);

export default NotFoundPage;
