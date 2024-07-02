import { Flex, Icon, IconButton } from "@chakra-ui/react";
import Whatsapp from '../../../public/svg/whatsapp-button.svg';
import Link from "next/link";
import { useConfiguration } from "@/_Contexts/ConfigurationContext";

export default function WhatsappButton(){
    const {configuration} = useConfiguration();

    return(
        <Flex pos="fixed" zIndex={999999} bottom="20px" right="20px">
            <Link href={`https://wa.me/${configuration && configuration.whatsapp.replace(/[\(\)\.\s-]+/g,'')}`}>
                <IconButton _hover={{bg: "white"}} bg="transparent" h="50px" w="50px" aria-label={"Falar no whatsapp"} icon={
                    <Icon fontSize={"56px"} color="red" as={Whatsapp}/>
                } />
            </Link>
        </Flex>
    )
}