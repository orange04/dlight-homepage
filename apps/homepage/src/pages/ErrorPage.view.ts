import { Navigator } from "@dlightjs/components"
import { View } from "@dlightjs/dlight"
import { type Typed, div, button, Pretty, Env, Prop, required } from "@dlightjs/types"
import { css } from "@iandx/easy-css"

interface ErrorPageProps {
  navigator: Navigator
  errorInfo: string
  btnText: string
  btnEvent: () => void
}

@View
class ErrorPage implements ErrorPageProps {
  @Env navigator: Navigator = required
  @Prop errorInfo: string = "🥲 Sorry, there is no content here."
  @Prop btnText: string = "back to home"
  @Prop btnEvent = () => {
    this.navigator.to("/")
  }

  View() {
    div()
      .class(this.columnDisplayCss)
    {
      div(this.errorInfo)
        .class("text-2xl py-8")
      button(this.btnText)
        .onClick(this.btnEvent)
    }
  }

  columnDisplayCss = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  `
}

export default ErrorPage as Pretty as Typed<ErrorPageProps>
