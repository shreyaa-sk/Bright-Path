import Image from 'next/image';

const Hero: React.FC = () => {

   return (
      <header className={`left-0 z-50 w-full transition-all`}>

         {/* Banner Section */}
         <main className="flex flex-col items-center py-20 bg-gray-800 text-white">
            <section className="container flex flex-col md:flex-row items-center gap-8 px-6">
               <div className="flex-1 md:order-2">
                  <Image src="" alt="Headphone" width={400} height={400} className="mx-auto" />
               </div>
               <div className="flex-1 space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">Experience Media Like Never Before</h1>
                  <p className="text-gray-300 text-lg">Enjoy award-winning stereo beats with wireless listening freedom and sleek, streamlined design with premium padding and first-rate playback.</p>
                  <button className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 transition text-white rounded-md font-medium">
                     Our Products <i className="bx bx-right-arrow-alt ml-2"></i>
                  </button>
                  {/* Social Media Links */}
                  <div className="flex space-x-4 mt-4">
                     <a href="#" className="text-xl text-gray-400 hover:text-gray-100"><i className="bx bxl-facebook"></i></a>
                     <a href="#" className="text-xl text-gray-400 hover:text-gray-100"><i className="bx bxl-instagram"></i></a>
                     <a href="#" className="text-xl text-gray-400 hover:text-gray-100"><i className="bx bxl-twitter"></i></a>
                     <a href="#" className="text-xl text-gray-400 hover:text-gray-100"><i className="bx bxl-youtube"></i></a>
                  </div>
               </div>
            </section>
         </main>
      </header>
   );
};

export default Hero;
