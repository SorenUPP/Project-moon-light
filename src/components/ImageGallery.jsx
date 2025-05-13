import React from "react";

const images = [
"https://fumeimg-21439.kxcdn.com/fumeimg/brand/254375/bt1bannerljpeg.jpg",
"https://fumeimg-21439.kxcdn.com/fumeimg/brand/254372/bt1bannerljpeg.jpg",
"https://fumeimg-21439.kxcdn.com/fumeimg/brand/252668/bt1bannerljpeg.jpg"
];

const ImageGallery = () => {
    return (
        <div className="w-full max-w-7xl mx-auto mt-24 h-[500px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((src, index) => (
                    <div key={index} className="relative w-full h-[450px]">
                        <img  
                            src= {src}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105" 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;