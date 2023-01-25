import { Headline, Paragraph } from "../common";

const Footer = () => {
  return (
    <footer className="container-footer">
      <Headline text="Required Sections" variant="page" />
      <Paragraph text="InternalNavigation" variant="lead" />
      <Paragraph text="EmailCollection" variant="lead" />
      <Paragraph text="SocialNavigation" variant="lead" />
      <Paragraph text="BrandLogoDisplay" variant="lead" />
      <Paragraph text="BrandContact" variant="lead" />
      <Paragraph text="BrandLocation" variant="lead" />
      <Paragraph text="OurPartners" variant="lead" />
    </footer>
  );
};

export default Footer;
