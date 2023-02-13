import { Avatar, Heading, Spacer, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import pfp from '../images/pfp.jpg'

const greeting = "Hello, I am Tosin!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size="2xl" src={pfp} name="Oduwole Oluwatosin" />
      <Heading size="md">{greeting}</Heading>
      <Spacer/>
      <Heading size="2xl">{bio1}</Heading>
      <Heading size="2xl">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
