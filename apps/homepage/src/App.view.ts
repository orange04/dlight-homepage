import { View } from "@dlightjs/dlight"
import { type Typed, Pretty, env } from "@dlightjs/types"
import { Route, RouterSpace } from "@dlightjs/components"
import { Color, colors } from "./const/themes"
import Home from "./pages/home/Home.view"

export interface EnvType {
  updateThemeType?: () => void
  themeType?: string
  theme?: Color
  isMobile?: boolean
  isShortView?: boolean
  windowWidth?: number
  i18n?: (enContent: string, zhContent: string) => string
  language?: string
  toogleLanguage?: () => void
}

@View
class App {
  themeType = localStorage.getItem("DlightThemeType") ?? "light"
  theme = colors[this.themeType]
  isMobile = /Android|iPhone/i.test(navigator.userAgent)
  isShortView = window.innerWidth < 818
  isCenterTitle = false
  windowWidth = window.innerWidth

  language: "en" | "zh" | string = localStorage.getItem("DlightLanguage") ?? "en"
  toogleLanguage() {
    this.language = this.language === "en" ? "zh" : "en"
    localStorage.setItem("DlightLanguage", this.language)
  }

  i18n = (enContent: string, zhContent: string) => (
    this.language === "en" ? enContent : zhContent
  )

  didMount() {
    window.addEventListener("resize", this.handleWindowResize)
  }

  willUnmount() {
    window.removeEventListener("resize", this.handleWindowResize)
  }

  updateThemeType() {
    this.themeType = this.themeType === "light" ? "dark" : "light"
    localStorage.setItem("DlightThemeType", this.themeType)
  }

  handleWindowResize() {
    this.windowWidth = window.innerWidth
    if (window.innerWidth < 818) {
      this.isShortView = true
    } else {
      this.isShortView = false
    }
  }

  Body() {
    env<EnvType>()
      .updateThemeType(this.updateThemeType)
      .themeType(this.themeType)
      .theme(this.theme)
      .isMobile(this.isMobile)
      .isShortView(this.isShortView)
      .windowWidth(this.windowWidth)
      .i18n(this.i18n)
      .language(this.language)
      .toogleLanguage(this.toogleLanguage)
    {
      RouterSpace()
      {
        Route("docs")
          .lazyLoad(async() => await import("./pages/doc/DocPage.view"))
        Route("playground")
          .lazyLoad(async() => await import("./pages/Playground.view"))
        Route("examples")
          .lazyLoad(async() => await import("./pages/examples/ExamplesPage.view"))
        Route("ecosystem")
          .lazyLoad(async() => await import("./pages/doc/DocPage.view"))
        Route(".")
        {
          Home()
        }
        Route()
          .lazyLoad(async() => await import("./pages/ErrorPage.view"))
      }
    }
  }
}

export default App as Pretty as Typed
