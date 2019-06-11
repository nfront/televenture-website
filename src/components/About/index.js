import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import RehypeReact from 'rehype-react';
import { Parallax } from 'react-scroll-parallax';
import Background from './BackgroundSection';
import TeamMembersBackground from './TeamMembersImage';
import styles from './index.module.scss';
import TeamMemberDetail from './TeamMemberDetail';

const RelativeLink = ({ children, href }) => {
  return (
    <Link to={href} className={styles.pageLink}>
      {children}
    </Link>
  );
};

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    a: RelativeLink,
  },
}).Compiler;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #d5dee3;
`;

const Description = styled.section`
  margin-top: 3em;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  line-height: 32px;
  .mainDescription {
    font-weight: bold;
    padding-top: 50px;
  }
  p {
    margin-top: 40px;
    max-width: 840px;
  }

  @media only screen and (max-width: 612px) {
    text-align: center;
    margin: 4vw;
  }

  @media only screen and (max-width: 425px) {
    margin-top: 1em;
  }
`;

const TeamWrapper = styled.section`
  position: relative;
  width: 100%;
  background-color: #010025;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query TeamMembersData {
      allContentfulTeamMembers(sort: { fields: [order], order: ASC }) {
        totalCount
        nodes {
          id
          name
          designation
          selfDescription {
            id
            selfDescription
          }
          heroImage {
            id
            fluid(quality: 80, maxWidth: 400) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
      contentfulAboutDescription {
        description {
          childMarkdownRemark {
            htmlAst
          }
        }
      }
    }
  `);
  const {
    allContentfulTeamMembers,
    contentfulAboutDescription: {
      description: { childMarkdownRemark },
    },
  } = data;
  const { nodes: teamMembers } = allContentfulTeamMembers;
  return (
    <Wrapper>
      <Background content="ABOUT" />
      <Description>{renderAst(childMarkdownRemark.htmlAst)}</Description>
      <TeamWrapper>
        {teamMembers.map((teamData, index) => (
          <TeamMemberDetail key={`team-member-${teamData.id}`} index={index} {...teamData} />
        ))}
      </TeamWrapper>
      <div className={styles.teamMembersParallaxBg}>
        <Parallax y={[-60, 50]} tagOuter="figure">
          <TeamMembersBackground className={styles.teamMembersBackground}>
            <div className="imageOverlay" />
          </TeamMembersBackground>
        </Parallax>
      </div>
    </Wrapper>
  );
};

About.displayName = 'AboutSection';
export default About;
