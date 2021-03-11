import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutSumish from "../../layouts/LayoutSumish";
import HeroSliderSumish from "../../wrappers/hero-slider/HeroSliderSumish";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import TabProductNineteen from "../../wrappers/product/TabProductNineteen";
import NewsletterTwo from "../../wrappers/newsletter/NewsletterTwo";

const HomeSumish = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Sumish | Sumish Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutSumish>
        {/* hero slider */}
        <HeroSliderSumish />
        {/* section title */}
        <SectionTitleWithText spaceTopClass="pt-95" spaceBottomClass="pb-90" />
        {/* tab product */}
        <TabProductNineteen
          spaceTopClass="pt-95"
          spaceBottomClass="pb-100"
          category="furniture"
        />
        {/* newsletter */}
        <NewsletterTwo spaceBottomClass="pb-100" />
      </LayoutSumish>
    </Fragment>
  );
};

export default HomeSumish;

