import React from 'react';
import classNames from 'classnames';
import Image from 'gatsby-image';
import styled from 'styled-components';
import TeleventureIconGold from '../TeleventureIconGold';
import MessageIcon from '../../images/messageIcon.svg';
import styles from './teamMemberDetail.module.scss';

const Info = styled.p`
  max-width: 538px;
  width: 100%;
  font-size: 19px;
  line-height: 38px;
  font-family: din-next-w01-light, din-next-w02-light, din-next-w10-light, sans-serif;
  padding-bottom: 60px;
  margin: 0 auto;
`;

const colors = [
  {
    backgroundColor: '#d2a756',
    color: '#EEF3F6',
  },
  {
    backgroundColor: '#b4cad6',
    color: '#40667C',
  },
  {
    backgroundColor: '#ffffff',
    color: '#BC9B5D',
  },
  {
    backgroundColor: '#72a0ba',
    color: '#F9F9F9',
  },
];

const TeamMemberDetail = props => {
  const { name, designation, selfDescription, heroImage, index } = props;
  const colorData = colors[index % 4];
  return (
    <div
      className={classNames(styles.teamMemberContainer, {
        [styles.left]: index % 2 === 0,
        [styles.right]: index % 2 === 1,
      })}
    >
      <div
        className={classNames(styles.subContainer)}
        style={{
          backgroundColor: colorData.backgroundColor,
          position: 'relative',
        }}
      >
        <Image
          tag="div"
          fluid={heroImage.fluid}
          className={styles.image}
          imgStyle={{ objectFit: `cover`, objectPosition: `50% 50%` }}
        />
        <div style={{ position: 'relative' }}>
          <div className={styles.iconContainer}>
            <a href={`mailto:post@televenture.no?subject=Til ${name}`}>
              <img className={styles.messageIcon} src={MessageIcon} alt="" />
            </a>
            <TeleventureIconGold style={{ position: 'absolute' }} className={styles.televentureIcon} />
          </div>
          <div className={styles.description}>
            <div className={styles.header}>
              <h6 className={styles.name}>{name}</h6>
              <h6 style={{ color: colorData.color }} className={styles.designation}>
                {designation}
              </h6>
            </div>
            <Info>{selfDescription.selfDescription}</Info>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetail;
