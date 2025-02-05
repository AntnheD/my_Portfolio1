import Header from '../components/Header/Header'; // Import Header
import Footer from '../components/footer/page';
import Contact from '../components/inputs/page';
import Hero from '../components/hero/Hero';
import About from '../components/aboutme/about';
import ButtonBaseDemo from '../components/projects/project';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center " >
      <Header /> {/* Use the Header component */}
      {/* Other page content */}
      <Hero/>
      <About/>
      <div className='w-full bg-black h-300 bottom-10'><ButtonBaseDemo/></div>
      <Contact />
      <Footer />
      
    </div>
  );
}