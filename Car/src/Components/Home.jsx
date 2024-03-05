import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <div className="bg-blue-600 text-white text-center py-20">
                <h1 className="text-5xl font-bold mb-4">Find Your Dream Car</h1>
                <p className="text-xl mb-8">Explore top brands and latest models.</p>
                <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300">
                    Browse Cars
                </button>
            </div>

            {/* Featured Cars Section */}
            <div className="container mx-auto py-16">
                <h2 className="text-3xl font-bold text-center mb-10">Featured Cars</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Car 1 */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img src="https://i.pinimg.com/736x/e7/b9/e8/e7b9e836173bdbcae09013e3ee7003f3.jpg" alt="Car" className="w-full" />
                        <div className="p-6">
                            <h3 className="font-bold text-xl mb-2">Car Model Name 1</h3>
                            <p className="text-gray-700 text-base">
                                Description of the car. Highlight features or offers.
                            </p>
                        </div>
                    </div>

                    {/* Car 2 */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img src="https://i.pinimg.com/736x/e7/b9/e8/e7b9e836173bdbcae09013e3ee7003f3.jpg" alt="Car" className="w-full" />
                        <div className="p-6">
                            <h3 className="font-bold text-xl mb-2">Car Model Name 2</h3>
                            <p className="text-gray-700 text-base">
                                Description of the car. Highlight features or offers.
                            </p>
                        </div>
                    </div>

                       {/* Car 3 */}
                       <div className="rounded-lg overflow-hidden shadow-lg">
                        <img src="https://i.pinimg.com/736x/e7/b9/e8/e7b9e836173bdbcae09013e3ee7003f3.jpg" alt="Car" className="w-full" />
                        <div className="p-6">
                            <h3 className="font-bold text-xl mb-2">Car Model Name 3</h3>
                            <p className="text-gray-700 text-base">
                                Description of the car. Highlight features or offers.
                            </p>
                        </div>
                    </div>
                    {/* End of car blocks */}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-auto bg-gray-800 text-white text-center py-4">
                <p>&copy; {new Date().getFullYear()} Car Company. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Home;
