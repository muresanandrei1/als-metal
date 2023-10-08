import image1 from "../assets/carousel/1.jpeg";
import image2 from "../assets/carousel/2.jpeg";
import image3 from "../assets/carousel/3.jpeg";
import image4 from "../assets/carousel/4.jpeg";
import image5 from "../assets/carousel/5.jpeg";
import image6 from "../assets/carousel/6.jpeg";
import image7 from "../assets/carousel/7.jpeg";
import image8 from "../assets/carousel/8.jpeg";
import image9 from "../assets/carousel/9.jpeg";
import image10 from "../assets/carousel/10.jpeg";
import image11 from "../assets/carousel/11.jpeg";
import image12 from "../assets/carousel/12.jpeg";
import image13 from "../assets/carousel/13.jpeg";
import image14 from "../assets/carousel/14.jpeg";
import image15 from "../assets/carousel/15.jpeg";
import image16 from "../assets/carousel/16.jpeg";

export const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
