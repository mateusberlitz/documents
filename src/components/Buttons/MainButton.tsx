import { ButtonProps } from "@chakra-ui/react"
import { ReactNode } from "react"
import { SolidButton } from "./SolidButton"

interface MainButtonProps extends ButtonProps{
    children: string;
}

export function MainButton({children, ...rest} : MainButtonProps){
    return(
        <SolidButton size="lg" paddingX="55px" bg="white" color="redmain" fontWeight={"semibold"} {...rest}>
            {children}
        </SolidButton>
    )
}