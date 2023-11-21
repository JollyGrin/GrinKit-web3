import { extendBaseTheme } from "@chakra-ui/react";
import { buttonTheme } from "./components/Button";


export const colors = {
  brand: {
    primary: "#884A39",
    shadow: "#C38154",
    secondary: "#F9E0BB",
    highlight: "#FFC26F",
  },
};


export const defaultTheme = extendBaseTheme({
  styles: {
    global: {
      body: {
        fontSize: "1.75rem",
        bg: "brand.secondary",
        color: "brand.primary",
      },
    },
  },
  colors,
  components: {
    Button: buttonTheme,
  },
});
