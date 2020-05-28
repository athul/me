import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello 👋, <br /> I'm Athul Cyriac Ajay.
        </BigTitle>
        <Subtitle>
          I'm just a guy who loves to code 😁. I'm a <em style={{color:`palegreen`}}>GitHub Campus Expert</em> 🚩 and an <em style={{color:`royalblue`}}>Auth0 Ambassador</em>. Big fan of the ⚡️ emoji<br/><br/>
          Checkout my
          <a href="https://blog.athulcyriac.co"> Blog</a>
          <br/><br/> Currently I'm a CS Undergrad at <b style={{color:`yellow`}}>College of Engineering Kidangoor. </b>
          
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Shelby⚡️"
            link="https://github.com/athul/Shelby"
            bg="linear-gradient(to right, #fc00ff, #00dbde)"
          >
            Shelby is a fast and Minimal Shell Prompt in Go.(110+⭐️)
          </ProjectCard>
          <ProjectCard
            title="Archie"
            link="https://github.com/athul/archie"
            bg="linear-gradient(to right, #ff4b1f, #1fddff)"
          >
            Archie is a Minimal theme for Hugo(25+⭐️)
          </ProjectCard>
          <ProjectCard
            title="Hackathon Sponsor Searches🖥"
            link="https://github.com/athul/hackathon-sponsor-searches"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Some Sponsors for any Hackathon(30⭐️)
          </ProjectCard>
          <ProjectCard
            title="Wakatime Language Metrics👨‍💻"
            link="https://github.com/athul/wakatime-metrics"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Wakatime Language Metrics as a Bar Chart. Made with Python(20⭐️)
          </ProjectCard>
          <ProjectCard
            title="College of Engineering Kidangoor Website🌐"
            link="ce-kgr.org"
            bg="linear-gradient(to right, #009fff, #ec2f4b)"
          >
            Maintainer and Infra Manager for CE Kidangoor's Website in Gatsby
          </ProjectCard>
          <ProjectCard
            title="Pwcli✨"
            link="https://github.com/athul/PP-Suku"
            bg="linear-gradient(to right, #59c173, #a17fe0, #5d26c1);"
          >
            A CLI for Postwoman in Go(22⭐️)
          </ProjectCard>
          <ProjectCard
            title="Blog-dayDreams++📝"
            link="https://blog.athulcyriac.co"
            bg="linear-gradient(to right, #fc5c7d, #6a82fb);"
          >
            Personal Blog, dayDreams++. I usually blog about Code and Life(10⭐️)
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar
            src="https://avatars0.githubusercontent.com/u/40897573?s=460&v=4"
            alt="Athul Criac Ajay"
          />
          <AboutSub>
            Pythonista, Gopher,React-dev, Open Source Contributor &
            Maintainer, Future Engineer.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I Love to Code. I could do it all day with Coffee and Music. I am
          efficient in writing Python for Automation, Backend
          Development and Algorithms. I also love to write React and Vue for Frontend . I
          also use Go for different Programming Problems. This Includes Backends
          and Systems but Python is my Drogon.I also Program C, C++ and Shell
          Scripting. 
          <br />I am a Lead at CEK Open Source Club <br /> I am one of the
          Founding Members of Meenachil Hacks. Previously Interned at Rorodata/Algoshelf.<br/> Co created <a href="https://vett.space">vett.space</a>
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:athul8720@gmail.com">Hi</a> or find me on other
            platforms: <a href="https://twitter.com/athulcajay">Twitter</a> ,
            <a href="https://github.com/athul">GitHub</a>{" "}
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2020 by Athul Cyriac Ajay{" "}
          <a href="https://github.com/athul">GitHub Repository</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
