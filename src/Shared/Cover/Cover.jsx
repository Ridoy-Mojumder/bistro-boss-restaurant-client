import { Parallax } from 'react-parallax';

const Cover = ({ heading, subHeading, image }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={image}
            bgImageAlt="cover image"
            strength={-200}
        >
            <div className="relative w-full h-[250px] md:h-[500px] ">
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white p-4 m-10 md:m-16 lg:m-24">
                    <h1 className="text-xl md:text-5xl my-4 border-b-2 pb-4 uppercase">{heading}</h1>
                    <p className="text-sm md:text-lg">{subHeading}</p>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;
