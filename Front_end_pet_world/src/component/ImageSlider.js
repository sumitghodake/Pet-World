import { useEffect ,useState} from 'react';

import img1 from '../Images/Dog1.jpg';
import img2 from '../Images/Dog2.jpg';
import img3 from '../Images/Dog3.jpg';
import img4 from '../Images/Dog4.jpg';



const Imagess = [img1,img2,img3,img4 ];

const ImagesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === Imagess.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 3 seconds

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className="fw-bold border bg-white text-dark">
        <img className='container-fluid'
            src={Imagess[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            style={{ maxHeight: '800px' }} // Adjust the height value as needed
        />
</div>


    
  );
};

export default ImagesSlider;