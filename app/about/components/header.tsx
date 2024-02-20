import React from "react";

const About1 = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-100 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-300 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi excepturi libero voluptates quos saepe repudiandae magni. Optio, quis et soluta delectus aperiam magnam similique aliquid, aspernatur quae corrupti numquam? Voluptatum!</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-center items-center ">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-100 pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-300 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, molestias ratione, soluta illo accusamus possimus, ad repellat magnam odio numquam id pariatur quis sapiente? Impedit reiciendis quasi eos ut debitis!</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    
                </div>
            </div>
        </div>
    );
};

export default About1;
