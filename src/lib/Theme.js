export default class Theme {
  constructor() {
    this.fontMainFamily = "'Tahoma', sans-serif"
    this.fontMainColor = "#666"
    this.fontSecondColor = "#aaa"
    this.fontHighlightColor = "#2cbfaa"
    this.fontSizeH1 = "18px"
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
      "--font-size-text": this.fontSizeText,
      "--text-line-height": this.textLineHeight,
      "--font-size-small": this.fontSizeSmall
    }
  }
}