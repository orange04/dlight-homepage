import { Env, Prop, View, required } from "@dlightjs/dlight"
import { MenuRound, AlignHorizontalLeftRound } from "@dlightjs/material-icons"
import { Pretty, Typed, div } from "@dlightjs/types"
import { css } from "@iandx/easy-css"

interface MenuBtnProps {
  hanleClickOpenMenu: (value: boolean) => void
  hanleClickOpenOutline: (value: boolean) => void
}

@View
class MenuBtn implements MenuBtnProps {
  @Env isShortView: boolean = required
  @Prop hanleClickOpenMenu = required
  @Prop hanleClickOpenOutline = required
  Body() {
    if (this.isShortView) {
      div()
        .className(this.shortViewSubHeaderWrapCss)
      {
        div()
          .className(this.btnCss)
          .onclick(this.hanleClickOpenMenu)
        {
          MenuRound()
            .className(this.iconCss)
            .color("rgba(82,110,52,0.7)")
            .width(16)
          div("Menu")
        }
        div()
          .className(this.btnCss)
          .onclick(this.hanleClickOpenOutline)
        {
          div("In this page")
          AlignHorizontalLeftRound()
            .className(this.iconCss)
            .color("rgba(82,110,52,0.7)")
            .width(16)
        }
      }
    }
  }

  shortViewSubHeaderWrapCss = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgba(82,110,52,0.7);
    padding: 0 20px;
  `

  btnCss = css`
    margin: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  `

  iconCss = css`
    padding-top: 4px;
    margin: 0 8px;
  `
}

export default MenuBtn as Pretty as Typed<MenuBtnProps>