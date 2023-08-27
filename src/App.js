import { Wrapper } from "./styled";
import SideBar from "./common/SideBar";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLightTheme, selectFormPanelStatus } from "./features/invoices/invoicesSlice";
import { GlobalStyle } from "./GlobalStyle";
import HomePage from "./features/invoices/HomePage"
import FormPanel from "./common/FormPanel";

function App() {
  const isLightTheme = useSelector(selectIsLightTheme);
  const formPanelStatus = useSelector(selectFormPanelStatus);

  useEffect(() => {
    document.body.style.overflow = formPanelStatus ? "hidden" : "auto";
  }, [formPanelStatus]);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <SideBar />
        <HomePage />
        {formPanelStatus && <FormPanel />}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;