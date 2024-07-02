import { ChakraProps, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface FooterLinkProps extends ChakraProps{
    href: string;
    children?: string;
}

export function FooterLink({ href, children, ...rest }: FooterLinkProps){
    return (
        <ChakraLink href={href}>
            <Text cursor="pointer" color="gray.300" _hover={{textDecoration: 'underline'}} _focus={{border: 'none'}} {...rest}>{children}</Text>
        </ChakraLink>
    )
}