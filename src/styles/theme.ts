import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    shadows: {
        outline: `0 0 0 3px #2D3250`,
    },
    components: {
        Checkbox: {
          baseStyle: {
            control: {
              _checked: {
                bg: "black",
                borderColor: "black",
                _hover: {
                    bg: "black",
                    borderColor: "black",
                }
              },
            }
          }
        },
        Modal: {
            width: "100%"
        }
    },
    colors: {
        white: "#ffffff",
        gray: {
            "text": "#434343",
            "dark": "#232323",
            "light": "#C6C6C6",
            "200": "#E8E5E0",
            "50" : "#FCFCFC",  
        },
        redmain: "#9C1E20",
        redpure: "#C3161C",
        reddark: "#600002",
        black: "#231F20",
        blue: {
            "100": "#21264F",
        },

        gradient: "linear-gradient(90deg, rgba(183,15,25,1) 0%, rgba(114,0,0,1) 100%)"
    },
    fonts: {
        heading: 'mulish',
        body: 'mulish'
    },
    styles: {
        global: {
            body: {
                bg: '#F8F8F8',
                color: 'gray.text',
                fontWeight: "light"
            }

        }
    },
    zIndices: {
        modal: 999999,
    },
})