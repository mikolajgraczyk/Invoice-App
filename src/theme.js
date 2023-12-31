export const breakpoint = {
  tabletMax: 900,
  mobileMax: 700,
};

const colorNames = {
  white: "#FFFFFF",
  cornflowerBlue: "#7C5DFA",
  heliotrope: "#9277FF",
  mirage: "#1E2139",
  ebonyClay: "#252945",
  selago: "#DFE3FA",
  selagoOpacity: "#DFE3FA24",
  baliHai: "#888EB0",
  shipCove: "#7E88C3",
  vulcan: "#0C0E16",
  burntSienna: "#EC5757",
  monaLisa: "#FF9797",
  whisper: "#F8F8FB",
  cinder: "#141625",
  fiord: "#494E6E",
  shamrock: "#33D69F",
  shamrockOpacity: "#33D69F24",
  pizazz: "#FF8F00",
  pizazzOpacity: "#FF8F0024",
  oxfordBlue: "#373B53",
  oxfordBlueOpacity: "#373B5324",
  wildBlueYonder: "#858BB2",
  whiteLilac: "#F9FAFE",
  waterloo: "#777F98",
};

export const lightTheme = {
  main: {
    background: colorNames.whisper,
    mainText: colorNames.vulcan,
    text1: colorNames.baliHai,
    arrow: colorNames.cornflowerBlue,
  },
  statusTab: {
    background: colorNames.white,
    text: colorNames.mirage,
    box: colorNames.cornflowerBlue,
    boxBackground: colorNames.selago,
  },
  newInvoiceButton: {
    background: colorNames.cornflowerBlue,
    backgroundHover: colorNames.heliotrope,
    text: colorNames.white,
  },
  bar: {
    background: colorNames.oxfordBlue,
    themeIcon: colorNames.shipCove,
    themeIconHover: colorNames.selago,
    line: colorNames.fiord,
  },
  scrollbar: {
    background: colorNames.selago,
  },
  tile: {
    background: colorNames.white,
    mainText: colorNames.vulcan,
    hash: colorNames.shipCove,
    text1: colorNames.baliHai,
    text2: colorNames.shipCove,
    text3: colorNames.wildBlueYonder,
    paid: colorNames.shamrock,
    paidBackground: colorNames.shamrockOpacity,
    pending: colorNames.pizazz,
    pendingBackground: colorNames.pizazzOpacity,
    draft: colorNames.oxfordBlue,
    draftBackground: colorNames.oxfordBlueOpacity,
    arrow: colorNames.cornflowerBlue,
    border: colorNames.cornflowerBlue,
    editBackground: colorNames.whiteLilac,
    editText: colorNames.shipCove,
    editHover: colorNames.selago,
    deleteBackground: colorNames.burntSienna,
    deleteText: colorNames.white,
    deleteHover: colorNames.monaLisa,
    markPaidBackground: colorNames.cornflowerBlue,
    markPaidText: colorNames.white,
    markPaidHover: colorNames.heliotrope,
  },
  invoiceDetailsTile: {
    background: colorNames.white,
    mainText: colorNames.vulcan,
    backButtonHover: colorNames.shipCove,
    hash: colorNames.baliHai,
    text1: colorNames.shipCove,
    rectangleBackground: colorNames.whiteLilac,
    rectangleFooter: colorNames.oxfordBlue,
    rectangleFooterText: colorNames.white,
  },
  formPanel: {
    background: colorNames.white,
    mainText: colorNames.vulcan,
    hash: colorNames.baliHai,
    inputBackground: colorNames.white,
    inputBorder: colorNames.selago,
    inputBorderFocus: colorNames.heliotrope,
    inputName: colorNames.shipCove,
    inputText: colorNames.vulcan,
    invalidInput: colorNames.burntSienna,
    fieldsetText: colorNames.cornflowerBlue,
    itemListText: colorNames.waterloo,
    totalPrice: colorNames.baliHai,
    paymentSelect: colorNames.vulcan,
    paymentSelectHover: colorNames.cornflowerBlue,
    paymentSelectOptionBackground: colorNames.white,
    paymentSelectOptionTextHover: colorNames.cornflowerBlue,
    bottomButtonBackground: colorNames.whiteLilac,
    bottomButtonHover: colorNames.selago,
    bottomButtonText: colorNames.shipCove,
    discardButtonBackground: colorNames.whiteLilac,
    discardButtonText: colorNames.shipCove,
    saveDraftBackground: colorNames.oxfordBlue,
    saveDraftText: colorNames.baliHai,
    saveSendBackground: colorNames.cornflowerBlue,
    saveSendText: colorNames.white,
  },
  deleteWindow: {
    background: colorNames.white,
    mainText: colorNames.vulcan,
    text1: colorNames.baliHai,
    cancelBackground: colorNames.whiteLilac,
    cancelText: colorNames.shipCove,
    deleteBackground: colorNames.burntSienna,
    deleteText: colorNames.white,
  },
  shadow: "0px 10px 20px 0px rgba(72, 84, 159, 0.25)",
  breakpoint,
};

export const darkTheme = {
  main: {
    background: colorNames.cinder,
    mainText: colorNames.white,
    text1: colorNames.selago,
    arrow: colorNames.cornflowerBlue,
  },
  statusTab: {
    background: colorNames.ebonyClay,
    text: colorNames.white,
    box: colorNames.cornflowerBlue,
    boxBackground: colorNames.mirage,
  },
  newInvoiceButton: {
    background: colorNames.cornflowerBlue,
    backgroundHover: colorNames.heliotropen,
    text: colorNames.white,
  },
  bar: {
    background: colorNames.mirage,
    themeIcon: colorNames.wildBlueYonder,
    themeIconHover: colorNames.selago,
    line: colorNames.fiord,
  },
  scrollbar: {
    background: colorNames.ebonyClay,
  },
  tile: {
    background: colorNames.mirage,
    mainText: colorNames.white,
    hash: colorNames.shipCove,
    text1: colorNames.selago,
    text2: colorNames.selago,
    text3: colorNames.white,
    paid: colorNames.shamrock,
    paidBackground: colorNames.shamrockOpacity,
    pending: colorNames.pizazz,
    pendingBackground: colorNames.pizazzOpacity,
    draft: colorNames.selago,
    draftBackground: colorNames.selagoOpacity,
    arrow: colorNames.cornflowerBlue,
    border: colorNames.cornflowerBlue,
    editBackground: colorNames.ebonyClay,
    editText: colorNames.selago,
    editHover: colorNames.white,
    deleteBackground: colorNames.burntSienna,
    deleteText: colorNames.white,
    deleteHover: colorNames.monaLisa,
    markPaidBackground: colorNames.cornflowerBlue,
    markPaidText: colorNames.white,
    markPaidHover: colorNames.heliotrope,
  },
  invoiceDetailsTile: {
    background: colorNames.mirage,
    mainText: colorNames.white,
    backButtonHover: colorNames.baliHai,
    hash: colorNames.baliHai,
    text1: colorNames.selago,
    rectangleBackground: colorNames.ebonyClay,
    rectangleFooter: colorNames.vulcan,
    rectangleFooterText: colorNames.white,
  },
  formPanel: {
    background: colorNames.cinder,
    mainText: colorNames.white,
    hash: colorNames.baliHai,
    inputBackground: colorNames.mirage,
    inputBorder: colorNames.ebonyClay,
    inputBorderFocus: colorNames.cornflowerBlue,
    inputName: colorNames.selago,
    inputText: colorNames.white,
    invalidInput: colorNames.burntSienna,
    fieldsetText: colorNames.cornflowerBlue,
    itemListText: colorNames.waterloo,
    totalPrice: colorNames.selago,
    paymentSelect: colorNames.selago,
    paymentSelectHover: colorNames.heliotrope,
    paymentSelectOptionBackground: colorNames.ebonyClay,
    paymentSelectOptionTextHover: colorNames.heliotrope,
    bottomButtonBackground: colorNames.ebonyClay,
    bottomButtonHover: colorNames.ebonyClay,
    bottomButtonText: colorNames.selago,
    discardButtonBackground: colorNames.whiteLilac,
    discardButtonText: colorNames.shipCove,
    saveDraftBackground: colorNames.oxfordBlue,
    saveDraftText: colorNames.selago,
    saveSendBackground: colorNames.cornflowerBlue,
    saveSendText: colorNames.white,
  },
  deleteWindow: {
    background: colorNames.mirage,
    mainText: colorNames.white,
    text1: colorNames.selago,
    cancelBackground: colorNames.ebonyClay,
    cancelText: colorNames.selago,
    deleteBackground: colorNames.burntSienna,
    deleteText: colorNames.white,
  },
  shadow: "box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25)",
  breakpoint,
};
