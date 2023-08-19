import { Wrapper } from "./styled";
import SideBar from "./common/SideBar";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { useSelector } from "react-redux";
import { selectIsLightTheme } from "./features/invoices/invoicesSlice";
import { GlobalStyle } from "./GlobalStyle";
import HomePage from "./features/HomePage";

function App() {
  const isLightTheme = useSelector(selectIsLightTheme);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <SideBar />
        <HomePage />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
