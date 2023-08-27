import { Wrapper } from "./styled";
import SideBar from "./common/SideBar";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectIsLightTheme,
  selectFormPanelStatus,
} from "./features/invoices/invoicesSlice";
import { GlobalStyle } from "./GlobalStyle";
import HomePage from "./features/invoices/HomePage";
import FormPanel from "./common/FormPanel";

function App() {
  const isLightTheme = useSelector(selectIsLightTheme);
  const formPanelStatus = useSelector(selectFormPanelStatus);

  useEffect(() => {
    if (formPanelStatus) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      return;
    }
    document.body.style.overflow = "auto";
    document.body.style.touchAction = "auto";
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
