import heroImageLg from "../images/heroImageLg.jpg";
import heroImageMd from "../images/heroImageMd.jpg";
import heroImageSm from "../images/heroImageSm.jpg";
import heroImageSmMd from "../images/heroImageSmMd.jpg";
import heroImageXSm from "../images/heroImageXSm.jpg";

const ImageSizes = {
  heroImage: {
    large: {
      id: 1,
      src: heroImageLg,
      alt: "hero image large",
      name: "heroImageLg",
    },
    medium: {
      id: 2,
      src: heroImageMd,
      alt: "hero image medium",
      name: "heroImageMd",
    },
    small: {
      id: 3,
      src: heroImageSm,
      alt: "hero image small",
      name: "heroImageSm",
    },
    smallMd: {
      id: 4,
      src: heroImageSmMd,
      alt: "hero image small med",
      name: "heroImageSmMd",
    },
    extraSm: {
      id: 5,
      src: heroImageXSm,
      alt: "hero image extra small",
      name: "heroImageXSm",
    },
  },
};

export default ImageSizes;
