export default class Variables {
  constructor() {
    this.fontMainFamily = "'Tahoma', sans-serif"
    this.fontMainColor = "#666"
    this.fontSecondColor = "#aaa"
    this.fontHighlightColor = "#2cbfaa"
    this.fontSizeH1 = "18px"
    this.fontSizeH2 = "16px"
    this.fontSizeH3 = "14px"
    this.fontSizeText = "12px"
    this.textLineHeight = "1.2"
    this.fontSizeSmall = "9px"
  }

  css() {
    return {
      "--font-main-family": this.fontMainFamily,
      "--font-main-color": this.fontMainColor,
      "--font-second-color": this.fontSecondColor,
      "--font-highlight-color": this.fontHighlightColor,
      "--font-size-title-1": this.fontSizeH1,
      "--font-size-title-2": this.fontSizeH2,
      "--font-size-title-3": this.fontSizeH3,
      "--font-size-text": this.fontSizeText,
      "--text-line-height": this.textLineHeight,
      "--font-size-small": this.fontSizeSmall
    }
  }
}