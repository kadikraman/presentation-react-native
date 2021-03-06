// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Image,
  BlockQuote,
  Quote,
  Cite,
  CodeBlock,
  Code,
  List,
  ListItem,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import reactNativeMobileSrc from './assets/mobile.jpg';
import reactLoveSrc from './assets/reactLove.png';
import formidableWhite from './assets/formidableWhite.png';
import formidableBlack from './assets/formidableBlack.png';
import formidableRed from './assets/formidableRed.png';
import iosEcosystem from './assets/iosEcosystem.png';
import androidEcosystem from './assets/androidEcosystem.png';
import welcomeToReact from './assets/welcomeToReact.png';
import welcomeToReactCode from './assets/welcomeToReactCode.png';
import welcomeToReactNative from './assets/welcomeToReactNative.jpeg';
import welcomeToReactNativeCode from './assets/welcomeToReactNativeCode.png';
import platformSpecificFile from './assets/platformSpecificFile.png';
import platformSpecificVar from './assets/platformSpecificVar.png';
import sewerClown from './assets/sewerClown.jpg';
import imageSizes from './assets/imageSizes.png';
import expoQRCode from './assets/expoQRCode.png';
import expo from './assets/expo.png';
import magic from './assets/magic.gif';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    black: '#1F2022',
    christmasRed: '#c43a33',
    christmasYellow: '#C5A436',
    christmasGreen: '#176100',
    white: '#FFFFFF',
    blue: '#10a3de',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const NormalHeading = ({ children }) => (
  <Heading size={4} textColor="white">
    {children}
  </Heading>
);

const Logo = () => <Image src={formidableRed} />;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Slide bgColor="black">
          <Heading fit caps textColor="white">
            React to React Native
          </Heading>
          <Text textColor="christmasRed" bold>
            (How Hard Could It Be?)
          </Text>
          <div style={{ marginTop: '50px', marginBottom: '50px' }}>
            <Text textColor="white">Kadi Kraman</Text>
            <Text textColor="white">Formidable Labs</Text>
          </div>
          <Logo />
        </Slide>
        <Slide bgColor="blue">
          <Heading fit textColor="white">
            What is React Native?
          </Heading>
          <Image src={reactNativeMobileSrc} />
        </Slide>
        <Slide bgColor="black">
          <BlockQuote>
            <Quote>
              A framework for building native mobile apps using React
            </Quote>
            <Cite>React Native Docs</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="black">
          <Image src={iosEcosystem} />
        </Slide>
        <Slide bgColor="black">
          <Image src={androidEcosystem} />
        </Slide>
        <Slide bgColor="black" textColor="white">
            <NormalHeading>Build once, run anywhere</NormalHeading>
        </Slide>
        <Slide bgColor="christmasRed">
          <Image src={magic} width="600px"/>
        </Slide>
        <Slide bgColor="christmasRed">
          <Heading textColor="white">How?</Heading>
          <Text textColor="white" bold>
            By mapping each element to their native counterparts in both
            frameworks
          </Text>
        </Slide>
        <Slide bgColor="christmasRed" textColor="white">
          <NormalHeading>How easy is it really to get started?</NormalHeading>
        </Slide>
        <Slide bgColor="christmasRed" textColor="white">
          <Code textColor="white">yarn global add create-react-app</Code>
          <Text />
          <Code textColor="white">create-react-app my-app</Code>
          <Text />
          <Code textColor="white">cd my-app/</Code>
          <Text />
          <Code textColor="white">yarn start</Code>
        </Slide>
        <Slide bgColor="christmasRed">
          <Image src={welcomeToReact} />
        </Slide>
        <Slide bgColor="christmasRed">
          <Image src={welcomeToReactCode} />
        </Slide>
        <Slide bgColor="white">
          <div style={{ marginBottom: '50px' }}>
            <Heading fit textColor="black">
              Expo - React Native toolchain
            </Heading>
          </div>
          <Image src={expo} />
        </Slide>
        <Slide bgColor="christmasRed">
          <Code textColor="white">yarn global add create-react-native-app</Code>
          <Text />
          <Code textColor="white">create-react-native-app my-app</Code>
          <Text />
          <Code textColor="white">cd my-app/</Code>
          <Text />
          <Code textColor="white">yarn start</Code>
        </Slide>
        <Slide bgColor="black">
          <Image src={expoQRCode} width="50%" />
        </Slide>
        <Slide bgColor="christmasRed">
          <Image src={welcomeToReactNative} width="40%" />
        </Slide>
        <Slide bgColor="christmasRed">
          <Image src={welcomeToReactNativeCode} width="70%" />
        </Slide>
        <Slide bgColor="christmasRed">
          <Heading fit textColor="white">
            Differences in styling
          </Heading>
          <List textColor="white">
            <ListItem>Inline styles (use styled components! 💅)</ListItem>
            <ListItem>FlexBox for positioning</ListItem>
          </List>
        </Slide>
        <Slide bgColor="blue">
          <Heading fit textColor="white">
            Differences in syntax
          </Heading>
          <List textColor="white">
            <ListItem>View instead of div</ListItem>
            <ListItem>No buttons: touchables instead</ListItem>
            <ListItem>No onClick: onPress instead</ListItem>
            <ListItem>Text elements must be in {`<Text>`}</ListItem>
          </List>
        </Slide>
        <Slide bgColor="christmasYellow">
          <Heading fit textColor="white">
            Differences in environment
          </Heading>
          <List textColor="white">
            <ListItem>CAN use any JS modules</ListItem>
            <ListItem>localStorage vs AsyncStorage</ListItem>
            <ListItem>MUST worry about the keyboard</ListItem>
            <ListItem>MUST worry about "working offline"</ListItem>
          </List>
        </Slide>
        {/* TODO: slide about border radius/shadow  */}
        <Slide bgColor="christmasRed">
          <div style={{ marginBottom: '50px' }}>
            <Heading fit textColor="white">
              Platform-specific code
            </Heading>
          </div>
          <Image src={platformSpecificVar} />
        </Slide>
        {/* TODO: slide about flasy toggle button  */}
        <Slide bgColor="christmasRed">
          <div style={{ marginBottom: '50px' }}>
            <Heading fit textColor="white">
              Platform-specific code
            </Heading>
          </div>
          <Image src={platformSpecificFile} />
        </Slide>
        <Slide bgColor="christmasYellow">
          <div style={{ marginBottom: '50px' }}>
            <Heading fit textColor="white">
              Platform-specific code
            </Heading>
          </div>
          <Image src={imageSizes} />
        </Slide>
        <Slide bgColor="blue" textColor="white">
          <NormalHeading>Why React Native?</NormalHeading>
          <Image src={reactNativeMobileSrc} />
        </Slide>
        <Slide bgColor="black" textColor="white">
            <NormalHeading>Build once, run anywhere</NormalHeading>
        </Slide>
        <Slide bgColor="christmasRed" textColor="white">
          <NormalHeading>The JavaScript takeover</NormalHeading>
        </Slide>
        <Slide bgColor="christmasGreen" textColor="white">
          <NormalHeading>
            Publish new versions of native apps as quickly as webapps
          </NormalHeading>
        </Slide>
        <Slide bgColor="blue" textColor="white">
          <NormalHeading>
            Can I be a React Native developer, without ever having to touch
            Native code?
          </NormalHeading>
        </Slide>
        <Slide bgColor="black" textColor="white">
          <Heading size={4} textColor="white">
            Hey kid, you can write JS on Mobile here
          </Heading>
          <Image src={sewerClown} />

        </Slide>
        <Slide bgColor="blue" textColor="white">
          <Heading size={4} textColor="white">
          Am I saying you should drop everything and go build some React Native apps?
          </Heading>
        </Slide>

        <Slide bgColor="christmasRed" textColor="white">
          <div style={{ marginBottom: '100px' }}>
            <Heading size={4} textColor="white">
              Thank you!
            </Heading>
          </div>
          <div style={{ marginBottom: '100px' }}>
          <Heading size={4} textColor="white">
            Happy Holidays! 🎄
          </Heading>
          </div>
          <div style={{ marginBottom: '50px' }}>
            <Text textColor="white" fit>Google: "React Native getting started"</Text>
          </div>
          <Text textColor="white" fit>https://facebook.github.io/react-native/docs/getting-started.html</Text>
        </Slide>
      </Deck>
    );
  }
}
