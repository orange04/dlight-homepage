import { View } from "@dlightjs/dlight"
import { type Typed, required, Prop, RequiredProp } from "@dlightjs/types"
import { css, div } from "@dlightjs/easy-css"
import FeatureCard, { FeatureDataType } from "./FeatureCard.view"

class FeatureCardGroup extends View {
  @Prop data: RequiredProp<FeatureDataType[]> = required

  Body() {
    div()
      .className(this.featureGroupWrapCss)
    // .grid()
    // .gridTemplateColumns("repeat( auto-fit, minmax(180px, 1fr) )")
    // .gap("20px")
    {
      for (const feature of this.data) {
        FeatureCard()
          .data(feature)
      }
    }
  }

  featureGroupWrapCss = css`
    box-sizing: border-box;
    max-width: 500px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
  `
}

export default FeatureCardGroup as any as Typed<FeatureCardGroup>
