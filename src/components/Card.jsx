import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
    <VStack mt="6" spacing="3">
      <Image src={imageSrc} borderRadius="lg" />
      <Heading size="md" fontWeight="extrabold">
        {title}
      </Heading>
      <Text>{description}</Text>
      <HStack>
        <Text fontWeight="bold">See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>

  return null;
};

export default Card;
