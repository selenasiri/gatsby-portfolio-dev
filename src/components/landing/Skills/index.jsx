import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>A little bit about me</h1>
          <p>
          Since graduating from Rutgers University with a degree in Vocal Performance I have fully immersed myself in becoming a technically proficient, detail-oriented creative artist. In the process, I found that the self-discipline and rigorous study of music and foreign languages that were integral to my undergraduate program provided me with a strong foundation for moving into this technical field. Moreover, my recent experience in building performing arts websites has given me a strong appreciation for the value that internet technology can provide any business or professional client. I am eager to continue building upon my skillset and working alongside a team in developing new projects!
          </p>
          <Button as={AnchorLink} href="#contact">
            Contact me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
