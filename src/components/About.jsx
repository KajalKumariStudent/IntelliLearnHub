import React from 'react'

function About() {
  return (
    <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://media.istockphoto.com/id/1749181542/photo/ai-technology.webp?b=1&s=170667a&w=0&k=20&c=cb3xLTE6a1DLwHtu1RH1iXnHazgNSTVuAvv6AsuoWGE="
                            alt="image" className='m-4 h-96 w-96'
                        />
                        
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Unlocking the Power of AI:
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Welcome to the future of technology! Our cutting-edge webpage explores the dynamic world of
                         Artificial Intelligence (AI). Discover its incredible uses,
                         from revolutionizing healthcare and automating tedious tasks to enhancing
                         customer experiences. Embrace the endless possibilities AI brings, 
                        fostering innovation and efficiency across industries.
                        </p>
                        <p className="mt-4 text-gray-600">
                        However, tread carefully as we delve into the hazards – privacy concerns, 
                        job displacement, and ethical dilemmas. Join us on this captivating 
                        journey, where we unravel the dual nature of AI, celebrating
                         its marvels while addressing the responsible use that ensures a
                         harmonious integration into our ever-evolving digital landscape. 
                        Explore AI with us – where intelligence meets responsibility!
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About
