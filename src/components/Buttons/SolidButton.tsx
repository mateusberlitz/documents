import { Button, ButtonProps } from "@chakra-ui/react";
import Icon from "@chakra-ui/icon";
import { ElementType } from "react";

export interface ButtonModelProps extends ButtonProps{
    icon?: ElementType;
    children: string;
}

export function SolidButton({icon, children, ...rest} : ButtonModelProps){

    const boxShadowColor = (rest.colorScheme === 'red' ? "#e53e3e" : (rest.colorScheme === 'green' ? "#38a169" : (rest.colorScheme === 'blue' ? "#002d56" : ( rest.colorScheme === 'orange' ? "#dd6b20": "#222222"))));

    return (
        <Button px="20" w="fit-content" maxW={"100%"} h="57px" borderRadius="7px" fontWeight="semibold" bg="gradient" color="white" variant="solid" fontSize="18"  _hover={{boxShadow: `0 8px 20px -8px ${boxShadowColor}`}} _active={{}} {...rest}>
            {children}
        </Button>
    )
}