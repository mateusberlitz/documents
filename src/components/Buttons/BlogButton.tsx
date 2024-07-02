import { Button, ButtonProps } from "@chakra-ui/react";
import { ElementType } from "react";

export interface ButtonModelProps extends ButtonProps{
    icon?: ElementType;
    children: string;
    active: boolean;
}

export function BlogButton({icon, children, active, ...rest} : ButtonModelProps){

    const boxShadowColor = (rest.colorScheme === 'red' ? "#e53e3e" : (rest.colorScheme === 'green' ? "#38a169" : (rest.colorScheme === 'blue' ? "#002d56" : ( rest.colorScheme === 'orange' ? "#dd6b20": "#222222"))));

    return (
        <Button px={["4","4","10","10"]} h="30px" borderRadius="100px" fontWeight="bold" bg={active ? "redmain" : "white"} color={active ? "white" : "redmain"} border="1px solid #9C1E20" variant="solid" fontSize="16px" {...rest} _hover={{boxShadow: `0 8px 20px -8px ${boxShadowColor}`, color:"#ffffff", backgroundColor:"#9C1E20"}} _active={{}}>
            {children}
        </Button>
    )
}