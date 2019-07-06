import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

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
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Athul Cyriac Ajay.
        </BigTitle>
        <Subtitle>
          I'm just a regular coder who loves Python and Js. A GitHub Campus Expert 🚩. CS Undergrad at CEK.
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Project Libra"
            link="https://github.com/cek-open-source-club/Project-Libra"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            College Library Management System in Django
          </ProjectCard>
          <ProjectCard
            title="Meenachil Hacks Website"
            link="https://meenhacks.github.io"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            The Website for Meenachil Hacks
          </ProjectCard>
          <ProjectCard
            title="Hackathon Sponsor Searches"
            link="https://github.com/Athul-CA/hackathon-sponsor-searches"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Some Sponsors for any Hackathon
          </ProjectCard>
          <ProjectCard
            title="Wakatime Language Metrics"
            link="https://github.com/Athul-CA/wakatime-metrics"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Wakatime Language Metrics as a Bar Chart. Made with Python
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src="https://avatars0.githubusercontent.com/u/40897573?s=460&v=4" alt="Athul Criac Ajay" />
          <AboutSub>
            "All Power is within You. You can do anything and Everything. Believe in That!." Swami Vivekananda
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I really am a Python Enthusiast who also loves to do JavaScript. I started with Machine Learning and now
          currently write React. I also am a lead of CEK Open Source Club and is an Organizer of Meenachil Hacks, 
          currently pursing my Bachelors Degree from College of Engineering Kidangoor.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:athul8720@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://twitter.com/athulcajay">Twitter</a>{' '} , 
            <a href="https://github.com/Athul-CA">GitHub</a>{' '}
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Athul Cyriac Ajay <a href="https://github.com/Athul-CA">Github Repository</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
