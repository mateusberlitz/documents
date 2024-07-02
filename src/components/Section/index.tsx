import { Flex, FlexProps, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionProps extends FlexProps{
    children?: ReactNode;
}

export function Section({children, ...rest}: SectionProps){
    return(
        <Flex w="100%" {...rest}>
            <Stack px={["6", "6", "8"]} w="100%" maxW="820px" m="0 auto" spacing="0">
                {children}
            </Stack>
        </Flex>
    )
}