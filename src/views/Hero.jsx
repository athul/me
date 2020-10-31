import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "tailwind.macro";
import { colors } from "../../tailwind";
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import { UpDown, UpDownWide } from "../styles/animations";
import SVG from "../components/SVG";

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`;

const Hero = ({ children, offset }) => (
  <>
    <Divider speed={0.2} offset={offset}>
      <UpDown>
        <SVG icon="go" width={8} left="66%" top="70%" />
        <SVG icon="box" width={6} left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="cap"
          hiddenMobile
          width={42}
          fill={colors.red}
          left="80%"
          top="10%"
        />
        <SVG
          icon="ironman"
          width={16}
          fill={colors["grey-darker"]}
          left="70%"
          top="90%"
        />
        <SVG
          icon="ironman"
          width={6}
          fill={colors["grey-darkest"]}
          right="10%"
          top="40%"
        />
        <SVG
          icon="telescope"
          hiddenMobile
          width={24}
          fill={colors.green}
          left="5%"
          top="1%"
        />
      </UpDownWide>
      <SVG
        icon="ironman"
        hiddenMobile
        width={24}
        fill={colors["grey-darker"]}
        left="25%"
        top="70%"
      />
      <SVG
        icon="ironman"
        width={6}
        fill={colors["grey-darkest"]}
        left="24%"
        top="20%"
      />
      <SVG
        icon="ironman"
        width={30}
        fill={colors.orange}
        left="70%"
        top="60%"
      />
      <SVG
        icon="go"
        width={18}
        fill={colors["grey-darkest"]}
        left="95%"
        top="90%"
      />
      <SVG
        icon="telescope"
        hiddenMobile
        width={25}
        fill={colors["grey-darker"]}
        left="40%"
        top="80%"
      />
      <SVG icon="ironman" width={64} fill={colors.green} left="95%" top="5%" />
      <SVG
        icon="box"
        hiddenMobile
        width={64}
        fill={colors.purple}
        left="5%"
        top="90%"
      />
      <SVG icon="box" width={10} fill={colors.pink} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={colors.yellow} left="40%" top="30%" />
      <SVG
        icon="telescope"
        width={16}
        stroke={colors.red}
        left="10%"
        top="50%"
      />
      <SVG
        icon="go"
        width={8}
        stroke={colors["grey-darker"]}
        left="89%"
        top="50%"
      />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
);

export default Hero;

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
