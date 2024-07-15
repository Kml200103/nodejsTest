import React from 'react';
import { features } from '../../constants'; // Adjust this path based on your project structure

const Feature = () => (
    <section className='py-12 bg-gray-100'>

        <div className='m-auto w-full sm:w-3/5 mb-10'>
            <div className='bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 p-6'>
                <h2 className='text-3xl font-bold my-4 text-gray-800 text-center'>Our Mission</h2>
                <p className='leading-relaxed text-gray-600 text-[16px]  font-sans text-center'>
                    To provide a quality, clean, safe and kid-centred childcare program that focuses on "learning through playing, sharing and caring".
               
                
                    We care by actively taking part in a variety of age-appropriate activities that support a child's intellectual, social, emotional, creative and physical growth.
                </p>
            </div>
        </div>


        {/* about us card */}
        <div className='flex flex-col justify-center items-center'>

            <div className='p-8'>
                <h1 className='text-4xl font-serif font-bold'>Why Fort Road ?</h1>
            </div>

            <div className='grid grid-rows-2 gap-10 m-auto w-4/5 sm:grid-cols-2 lg:grid-cols-3'>
                {features.map((feature) => (
                    <div
                        key={feature.id}
                        className='bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105'
                    >
                        <div className='p-6'>
                            {/* <img src={feature.icon} alt="images" className='w-16 h-16 object-contain m-auto' /> */}
                            <h2 className='text-2xl font-bold my-4 text-gray-800'>{feature.title}</h2>
                            <p className='leading-normal text-lg text-gray-600 text-[14px] font-opensans'>{feature.content}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    </section>
    
);

export default Feature;
