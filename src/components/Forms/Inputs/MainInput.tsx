import { InputGroup, InputLeftElement, FormControl, InputProps, Icon, Input as ChakraInput, FormErrorMessage, Text, Link, FormLabel } from "@chakra-ui/react";
import { ReactNode, Ref, useEffect, useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { mask as applyMask, maskMoney as applyMoney, maskNumber as applyNumber, } from "../../../utils/ReMask";

interface FormInputProps extends InputProps{
    name: string;
    type: string;
    value?: string;
    label?: string;
    variant?: string;
    inputLink?: ReactNode;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    register?: UseFormRegister<any>;
    control?: any;
    mask?: "phone" | "cpf" | "cnpj" | "money" | "number" | "cep" | "cpf-cnpj" | "";
    error?: FieldError;
    onChange?: (value: any) => void;
    inputRef?: Ref<any>
}

export function MainInput({ name, type, icon, variant = "", isRequired, placeholder, inputLink, value = "", label = "", mask = "", register = undefined, onChange, inputRef, control, error, maxW, colorScheme, ...rest }: FormInputProps){
    const [controlledValue, setControlledValue] = useState<string>("");

    const handleReturnMaskedInputValue = (value: string = "") => {
        if(mask){
            if(mask === 'money'){
                //console.log(value);
                value = applyMoney(value);
            }else if(mask === 'number'){
                //console.log(value);
                value = applyNumber(value);
            }else{
                const maskPattern = (mask === "phone" ? "(99) 99999-9999"
                            : (mask === "cpf" ? "999.999.999-99"
                            : (mask === "cnpj" ? "99.999.999/9999-99"
                            : (mask === "cep" ? "99999-999"
                            : (mask === "cpf-cnpj" ? (value.length < 15 ? "999.999.999-99" : "99.999.999/9999-99")
                            :  "")))));

            
                value = applyMask(value, maskPattern);
            }
        }

        setControlledValue(value);

        return value;
    }

    useEffect(() => {
        setControlledValue(handleReturnMaskedInputValue(value));

        if(onChange){
            onChange(value);
        }
    }, [value]);

    // useEffect(() => {
    //     ref.dispatchEvent(customEvent);
    //  });

    function getControlledInputAttributes(){
        if(register){
            return {
                ...register(name),
                value: controlledValue,
                onChange: (event: any) => {
                    const maskedValue = handleReturnMaskedInputValue(event.target.value);  
                    setControlledValue(maskedValue);
                }
            }
        }

        return {
            ref: (inputRef ? inputRef : undefined),
            value: controlledValue,
            onChange: (event: any) => {
                    const maskedValue = handleReturnMaskedInputValue(event.target.value);  
                    setControlledValue(maskedValue);
                    if(onChange){
                        onChange(maskedValue)
                    }
                }
                
        }
    }

    const [focus, setFocus] = useState(false);

    const isBlackVersion = variant === "black";
    
    return (
        <FormControl pos="relative" isInvalid={!!error} maxW={maxW}>
            {/* {
                label && (
                    <FormLabel zIndex="1" cursor="text" color={variant === "white" ? "white" : "blue.primary"} transition="ease 0.2s" fontWeight="normal" fontSize={"md"} top={controlledValue === "" ? "14px" : "6px"}>{label}{isRequired && '*'}</FormLabel>
                )
            } */}

            {
                label && (
                    <FormLabel zIndex="1" cursor="text" color="#51534A" transition="ease 0.2s" fontWeight="normal" left="0px">{label}</FormLabel>
                )
            }

            {
                inputLink && (
                    inputLink
                )
            }
            <ChakraInput

                {...getControlledInputAttributes()}
                
                name={name} borderBottom={"1px solid #D9D9D9"} h="50px" pl="4" py="3" px="5" type={type} color={"#51534A"} fontWeight="regular" fontSize="18px" border="none" borderRadius="7px" bgColor={"#ffffff"} size="lg" 
                _hover={{bg: "#ffffff"}} 
                _focus={{bg: "#ffffff"}} 
                _placeholder={{color: "#51534A", fontWeight: "light"}} placeholder="" {...rest}

                boxShadow={"none !important"}
            />
        
            { !!error && (
                <FormErrorMessage fontSize="12px">
                    {/* <Icon as={}  stroke={error. ? "#e53e3e" : (controlledValue === "" ? "#a0a3bd" : "#7FCEFF")} fill="none" w="13" h="13px" strokeWidth="3"/> */}
                    {error.message}
                </FormErrorMessage>   
            )}
        </FormControl>
    );
}

//export default forwardRef(Input);