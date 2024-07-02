import { FormControl, SelectProps, Select as ChakraSelect, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { ReactNode, Ref, useEffect, useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface FormSelectProps extends SelectProps{
    name: string;
    label?: string;
    children: ReactNode;
    variant?: string;
    leftIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

    value?: string | number;
    error?: FieldError;
    register?: UseFormRegister<any>;
    onChange?: (value: any) => void;
    selectRef?: Ref<any>

    selected?: number;
}

export function OutlinedSelect({ name, children, variant, selectRef, value = "", label, isRequired, selected, error, register, onChange, ...rest } : FormSelectProps){
    const [controlledValue, setControlledValue] = useState<string | number>("");

    function getRegister(){
        if(register){
            return {
                ...register(name)
            }
        }

        return {
            ref: (selectRef ? selectRef : undefined),
            value: controlledValue,
            onChange: (event: any) => { //React.ChangeEvent<HTMLInputElement>
                    setControlledValue(event.target.value);
                    if(onChange){
                        onChange(event.target.value)
                    }
                }
                
        }
    }

    useEffect(() => {
        setControlledValue(value);
        if(onChange){
            onChange(value);
        }
    }, [value, selected]);

    return(
        <FormControl pos="relative" isInvalid={!!error}>
            {
                label && (
                    <FormLabel zIndex="1" cursor="text" color={"#ffffff"} transition="ease 0.2s" fontWeight="normal" fontSize={"md"} top={controlledValue === "" ? "14px" : "6px"}>{label} {isRequired && '*'}</FormLabel>
                )
            }
            
            <ChakraSelect {...getRegister()} variant="outline" borderRadius="full" h="50px" fontWeight={"semibold"} name={name} fontSize="md" bgColor={"transparent"} borderTop={"none"} border={"1px solid #fff"} _focusVisible={{borderColor: "rgba(255,255,255,0.3)"}} _hover={ {bgColor: '#fffffff'} } size="lg" color={controlledValue ? "white" : "white"} {...rest}>
                {children}
            </ChakraSelect>

            { !!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    );
}