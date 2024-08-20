import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MyImage = ({ img }) => (
  <LazyLoadImage
    alt={"imagen"}
    effect="blur"
    wrapperProps={{
      style: { transitionDelay: ".5s" },
    }}
    src={img}
  />
);

export default MyImage;
