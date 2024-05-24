import HeadingSection from "../../../Shared/HeadingSection/HeadingSection";
import featuredImg from '../../../../src/assets/home/featured.jpg';

const Featured = () => {
    return (
        <div className="md:my-20 m-8">
            <HeadingSection
                heading="This is our Featured"
                subHeading="---Check it out---"
            ></HeadingSection>

            <div 
                className="md:flex bg-cover bg-center relative rounded-lg bg-fixed p-8 md:p-16 lg:p-32 overflow-hidden"
                style={{ backgroundImage: `url(${featuredImg})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <div className="flex flex-col md:flex-row justify-center items-center relative z-10 w-full space-y-4 md:space-y-0 md:space-x-8">
                    <img src={featuredImg} alt="" className="md:w-1/2 w-full rounded-lg" />
                    <div className="text-white space-y-2 p-4 md:p-0">
                        <p>May 22, 2024</p>
                        <h1 className="text-xl md:text-2xl lg:text-3xl uppercase">WHERE CAN I GET SOME?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <div className="pt-4 md:pt-10">
                            <button
                                className="text-yellow-500 border-b-2 border-yellow-500 bg-none w-full md:w-auto px-4 py-2 rounded hover:bg-slate-500"
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
