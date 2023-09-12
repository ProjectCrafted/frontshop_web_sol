import React, { useRef, useState } from "react";
import './productdisplay.style.css';
import ImageSlider from "./ImageSlider.component";
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import pic1 from './images/pics1.jpg';
import pic2 from './images/pics2.jpg';
import pic3 from './images/pics3.jpg';
import pic4 from './images/pics4.jpg';
import photo1 from './images/photo1.jpg';
import photo2 from './images/photo2.jpg';
import photo3 from './images/photo3.jpg';
import photo4 from './images/photo4.jpg';

const Productslide = () => {
    const [selectedImage, setSelectedImage] = useState(image1);
    const [selectedSetIndex, setSelectedSetIndex] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const imageSets = [
        { image: image1, set: [image1, image2, image3, image4] },
        { image: pic1, set: [pic1, pic2, pic3, pic4] },
        { image: photo1, set: [photo1, photo2, photo3, photo4] }
    ];

    const selectedSet = imageSets[selectedSetIndex].set;

    let imageContainerRef = useRef(null);

    const prev = () => {
        setSelectedSetIndex((prevIndex) => (prevIndex - 1 + imageSets.length) % imageSets.length);
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + selectedSet.length) % selectedSet.length);
        setSelectedImage(selectedSet[(selectedImageIndex - 1 + selectedSet.length) % selectedSet.length]);
    }

    const next = () => {
        setSelectedSetIndex((prevIndex) => (prevIndex + 1) % imageSets.length);
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % selectedSet.length);
        setSelectedImage(selectedSet[(selectedImageIndex + 1) % selectedSet.length]);
    }

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setSelectedImageIndex(selectedSet.indexOf(image));
    }

    return (
        <div className="cont-1">
            <div className='large-dis'>
                <ImageSlider slides={selectedSet.map((url, index) => ({ url }))} parentWidth={800} />
            </div>
            <div className='all'>
                <div className='prev' onClick={prev}></div>
                <div className='small-dis' ref={imageContainerRef}>
                    {selectedSet.map((image, index) => {
                        return (
                            <img
                                key={index}
                                alt={image}
                                className={`image-cover ${selectedImage === image ? 'selected' : ''}`}
                                src={image}
                                onClick={() => handleImageClick(image)}
                            />
                        );
                    })}
                </div>
                <div className='next' onClick={next}></div>
            </div>
        </div>
    );
}

export default Productslide;
