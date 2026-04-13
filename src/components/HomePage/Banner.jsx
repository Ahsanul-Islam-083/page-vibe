import React from 'react';
import bookImg from '../../assets/hero_img.jpg';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh] rounded-2xl md:my-7 container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between md:px-8">
                    <img
                        src={bookImg}
                        className="sm:max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="  text-2xl md:text-5xl font-bold w-full md:w-125 pb-5">Books to freshen up your bookshelf!!!</h1>
                        <button className="btn btn-success text-white mx-auto">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;