import { Flex, Spinner } from "@chakra-ui/react";

export function SimpleLoader(){
    return(
        <Flex id="simpleLoading" top={0} left={0} right={0} bottom={0} bg="white" pos={"fixed"} justifyContent={"center"} alignItems={"center"} zIndex={9999999999991}>
            <Spinner />
        </Flex>
    )
}