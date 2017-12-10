// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, Slide, Text, Image } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// import reactNativeMobileSrc from "./assets/mobile.jpg";
// import reactLoveSrc from "./assets/reactLove.png";
// import iosAndroidWindowsSrc from "./assets/iosAndroidWindows.png";
const reactNativeMobileSrc = "https://udemy-images.udemy.com/course/750x422/891474_a221_4.jpg";
const reactLoveSrc = "http://devstickers.com/assets/img/pro/iy1c.png";
const iosAndroidWindowsSrc = "http://geekongadgets.com/wp-content/uploads/2015/08/iOS_Android_Windows_Phone_Wide.png"

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

const NormalHeading = ({ children }) => (
  <Heading size={4} textColor="white">
    {children}
  </Heading>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="christmasRed">
          <Heading fit caps textColor="white">
            React to React Native
          </Heading>
          <Text textColor="christmasYellow" bold>
            How Hard Could It Be?
          </Text>
          <div style={{ marginTop: "50px" }}>
            <Text textColor="white">Kadi Kraman</Text>
            <Text textColor="white">Formidable Labs</Text>
          </div>
        </Slide>
        <Slide bgColor="christmasGreen" textColor="white">
          <NormalHeading>React - game changer for the web!</NormalHeading>
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
          <NormalHeading>React Native - game changer for mobile?</NormalHeading>
          <Image src={reactNativeMobileSrc} />
        </Slide>
        <Slide bgColor="black" textColor="white">
          <div style={{ marginBottom: "50px" }}>
            <NormalHeading>Build once, run anywhere</NormalHeading>
          </div>
          <Image src={iosAndroidWindowsSrc} />
        </Slide>
        <Slide bgColor="christmasRed" textColor="white">
          <NormalHeading>How wasy is it really to get started?</NormalHeading>
          {/* Compare create react app create react native app) */}
        </Slide>
        <Slide bgColor="christmasYellow" textColor="white">
          <NormalHeading>How similar is the code to React code</NormalHeading>
        </Slide>
        <Slide bgColor="blue" textColor="white">
          <NormalHeading>What's different</NormalHeading>
        </Slide>
        <Slide bgColor="christmasRed" textColor="white">
          <NormalHeading>Testing</NormalHeading>
        </Slide>
        <Slide bgColor="christmasYellow" textColor="white">
          <NormalHeading>Domain specific code</NormalHeading>
        </Slide>
        <Slide bgColor="blue" textColor="white">
          <NormalHeading>What's harder in React Native</NormalHeading>
        </Slide>
        <Slide bgColor="christmasRed" textColor="white">
          <NormalHeading>The Android experience</NormalHeading>
        </Slide>
        <Slide bgColor="christmasYellow" textColor="white">
          <NormalHeading>Demployment to production</NormalHeading>
        </Slide>
        <Slide bgColor="blue" textColor="white">
          <NormalHeading>
            Can I be a React Native developer, without ever having to touch
            Native code?
          </NormalHeading>
          {/* To a point. Kind of like can you be a React Developer only using Create React App */}
        </Slide>
        <Slide bgColor="black" textColor="white">
          <Heading size={4} textColor="white">
            React Native is like candy that's used to lure web developers into
            mobile development
          </Heading>
        </Slide>

        <Slide bgColor="christmasRed" textColor="white">
          <div style={{ marginBottom: "100px" }}>
            <Heading size={4} textColor="white">
              Thank you!
            </Heading>
          </div>
          <Heading size={4} textColor="white">
            Happy Holidays!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
