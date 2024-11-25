import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

export default function Carrossel({ children }) {
  const PreviousArrow = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
      <FaArrowLeft style={{ color: "gray", fontSize: "30px" }} />
    </div>
  );

  const NextArrow = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
      <FaArrowRight style={{ color: "gray", fontSize: "30px" }} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  return <Slider {...settings}>{children}</Slider>;
}
