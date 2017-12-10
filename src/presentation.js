// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import reactNativeMobileSrc from "./assets/mobile.jpg";
import reactLoveSrc from "./assets/reactLove.png";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    black: "#1F2022",
    christmasRed: "#992114",
    christmasYellow: "#C5A436",
    christmasGreen: "#176100",
    white: "#FFFFFF",
    blue: "#10a3de"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="christmasRed">
          <Heading fit caps lineHeight={1} textColor="white">
            React to React Native
          </Heading>
          <Text size={4} textColor="christmasYellow" bold>
            How Hard Could It Be?
          </Text>
          <div style={{ marginTop: "50px" }}>
            <Text size={6} textColor="white">
              Kadi Kraman
            </Text>
            <Text size={6} textColor="white">
              Formidable Labs
            </Text>
          </div>
        </Slide>
        <Slide bgColor="christmasGreen" textColor="white">
          <Heading size={4} textColor="white" caps>
            React - game changer for the web!
          </Heading>
        </Slide>
        <Slide bgColor="christmasRed" textColor="white">
          <Image src={reactLoveSrc} />
          <Text textColor="white">Lightweight fontend-only framework</Text>
          {/* As opposed to e.g Angular.js, concerned with JUST the frontend and nothing else */}
          <Text textColor="white">Component-based architecture</Text>
          {/* Promoting resusability, reducing dev time of new features as project goes on */}
          <Text textColor="white">Composition over inheritance</Text>
          {/* Embracing functional programming methodology */}
        </Slide>
        <Slide bgColor="blue" textColor="white">
          <Heading size={4} textColor="white" caps>
            React Native - game changer for mobile?
          </Heading>
          <Image src={reactNativeMobileSrc} />
        </Slide>
        <Slide bgColor="black" textColor="white">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
