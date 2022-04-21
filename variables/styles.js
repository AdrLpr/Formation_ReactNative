export function stylesVariables(theme) {
    return {
      primaryColor: theme === "light" ? "rgb(200,200,200)" : "#2C3E50",
      lightTextColor: theme === "light" ? "black" : "whitesmoke",
      darkTextColor: theme === "light" ? "whitesmoke" : "black",
    };
  }
  
  export const theme = "dark";