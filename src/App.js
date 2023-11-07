import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./features/invoices/HomePage";
import InvoicePage from "./features/invoices/InvoicePage";
import FormPanel from "./common/FormPanel";
import SideBar from "./common/SideBar";
import { Wrapper } from "./styled";
import { lightTheme, darkTheme } from "./theme";
import { selectFormPanelStatus } from "./features/invoices/controlsSlice";
import { selectIsLightTheme } from "./features/invoices/controlsSlice";

function App() {
  const isLightTheme = useSelector(selectIsLightTheme);
  const formPanelStatus = useSelector(selectFormPanelStatus);

  useEffect(() => {
    document.body.style.overflow = formPanelStatus ? "hidden" : "auto";
  }, [formPanelStatus]);

  useEffect(() => {
    const browserTheme = isLightTheme ? "#373B53" : "#1E2139";

    let themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    themeColorMetaTag.setAttribute("content", browserTheme);
  }, [isLightTheme]);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <SideBar formPanelStatus={formPanelStatus} />
        <HashRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/invoice/:id" element={<InvoicePage />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </HashRouter>
        {formPanelStatus && <FormPanel />}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
