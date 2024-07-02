import { ChakraProvider, Box, Flex, Text, Heading, Img, Stack, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";

interface BoxContent {
  id: number;
  font: string;
  title: string;
  description: string;
}

interface SelectBoxProps{
    boxes: Array<{
        image: {
            url: string,
        },
        title: string,
        content: {
            text: string
        },
    }>
}

export function FiveSelectBoxes(props: SelectBoxProps){
    const [selectedBox, setSelectedBox] = useState<number | null>(4);

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

  const handleBoxClick = (index: number) => {
    setSelectedBox(index === selectedBox ? null : index);
  };

  return (
    <ChakraProvider>
      <Flex flexDir={["column","column","row","row"]}>
        {props.boxes.map((box, index) => (
          <Box
            role="group"
            key={index}
            p={7}
            //height={"300px"}
            width={["100%","100%","50%","50%"]}
            borderRadius="15px"
            position="relative"
            zIndex={selectedBox === index ? 1 : "auto"}
            ml={selectedBox !== null && index < selectedBox && isWideVersion ? "-30%" : 0}
            mr={selectedBox !== null && index > selectedBox && isWideVersion ? "-30%" : 0}
            marginLeft={index === 1 && isWideVersion || index === 2 && isWideVersion || index === 3 && isWideVersion ? "-90px" : "0px"}
            marginRight={index === 1 && isWideVersion || index === 2 && isWideVersion || index === 3 && isWideVersion ? "-90px" : "0px"}

            color={selectedBox === index ? "#fff" : "#232323"}
            //bg={selectedBox === index ? "linear-gradient(90deg, rgba(183,15,25,1) 0%, rgba(114,0,0,1) 100%)" : "white"}
            bg={"white"}
            transition="all ease .5s"
            boxShadow={"0px 10px 34px -21px rgba(0,0,0,0.6);"}

            _hover={{ color: "#fff", zIndex: 1}}
            overflow={"hidden"}
            mt={isWideVersion ? 0 : 10}
            //minW={["100%", "100%", "470px","470px"]}
          >
            <Box zIndex={-1} pos="absolute" transition="all ease .5s" opacity={selectedBox === index ? 1 : 0} _groupHover={{opacity: 1}} top="0" bottom={0} left={0} right={0} bg="linear-gradient(90deg, rgba(183,15,25,1) 0%, rgba(114,0,0,1) 100%)" />

            <Stack padding={"20px"}
              onMouseEnter={() => handleBoxClick(index)}
              style={{ cursor: "pointer" }}
              spacing="8"
              pos={"relative"}
            >
              <Img src={box.image.url} w="35px" _groupHover={{filter: "brightness(0) invert(1);"}} filter={selectedBox === index ? "brightness(0) invert(1);" : ""} />
              <Heading fontWeight={"semibold"} fontSize={"32px"}>{box.title}</Heading>
              <Text fontSize={"18px"}>{box.content.text}</Text>
            </Stack>
          </Box>
        ))}
      </Flex>
    </ChakraProvider>
  );
};

export default FiveSelectBoxes;