

const HeadingSection = ({heading, subHeading}) => {
    return (
        <div>


            <div className='my-8 md:my-20 text-center'>
                <h1 className="text-sm py-4 text-yellow-500 relative">
                    {subHeading}
                    <span className="block h-[2px] bg-gradient-to-r from-yellow-500 to-orange-500 mt-2 mx-auto w-36"></span>
                </h1>
                <h1 className="text-xl p-4 relative">
                    {heading}
                    <span className="block h-[2px] bg-gradient-to-r from-yellow-500 to-orange-500 mt-2 mx-auto w-1/4"></span>
                </h1>
            </div>
        </div>
    );
};

export default HeadingSection;