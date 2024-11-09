import Image from 'next/image';

const Hero: React.FC = () => {

   return (
      <header className={`left-0 z-50 w-full transition-all`}>

         {/* Banner Section */}
         <main className="flex flex-col items-center py-20 bg-gradient-to-r from-[#E66B2d] via-[#e66f34] to-[#deb6a3] text-white">
            <section className="container flex flex-col md:flex-row items-center gap-8 px-6">
               <div className="flex-1 space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">Experience Media Like Never Before</h1>
                  <p className="text-white text-lg mt-6">Enjoy award-winning stereo beats with wireless listening freedom and sleek, streamlined design with premium padding and first-rate playback.</p>
                  <a href="http://localhost:5173/signup">
                     <button className="inline-flex items-center px-6 py-2 mt-6 bg-white hover:bg-gray-50 transition text-[#E66b2d] rounded-md font-bold">
                        Connect with us! <i className="bx bx-right-arrow-alt ml-2"></i>
                     </button>
                  </a>
               </div>
               <div className="flex-1 mr-0">
                  <Image src="/icons/landing-main.png" alt="Headphone" width={500} height={500} className="mx-auto mr-0" />
               </div>
            </section>
         </main>
      </header>
   );
};

export default Hero;
