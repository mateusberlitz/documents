import { Box, ChakraProps, Flex, Stack, Text, Link, useBreakpointValue } from "@chakra-ui/react";
// import Link from "next/link";
import { ReactNode } from "react";

import styles from './header.module.css'

interface HeaderLinkProps extends ChakraProps{
    children: ReactNode;
    href?: string;
}

export function HeaderLink({children, href, ...rest}: HeaderLinkProps){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return href ? (
        <Link display={"flex"} href={href} _hover={{textDecor: "none"}} justifyContent={"left"}>
            <Stack className={styles.headerLink} pt="3" px="4" w="fit-content" alignSelf={"left"}>
                <Text as={"span"} fontWeight={"medium"} fontSize={isWideVersion ? "18px" : "20px"} {...rest}>{children}</Text>
                <Box h="1px" w="100%" bg={isWideVersion ? "gradient" : "white"}/>
            </Stack>
        </Link>
    ) : (
        <Stack className={styles.headerLink} pt="3" px="4" w="fit-content" alignSelf={"left"}>
            <Text as={"span"} fontWeight={"medium"} fontSize={isWideVersion ? "18px" : "20px"} {...rest}>{children}</Text>
            <Box h="1px" w="100%" bg={isWideVersion ? "gradient" : "white"}/>
        </Stack>
    )
}