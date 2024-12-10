import About from "@/components/sections/About";
import Header from "@/components/sections/Header";
import HorizontalScrollTxt from "@/components/sections/HorizontalScrollTxt";
import MyNavbar from "@/components/sections/Navbar";
import Portfolio from "@/components/sections/portfolio";
import Serves from "@/components/sections/Serves";
import TextZoobBg from "@/components/sections/TextZoobBg";

const Home = () => {
  return (
    <>
      <MyNavbar />
      <Header />
      <TextZoobBg />
      <section className="overflow-x-hidden horizontal-scroll-section">
        <HorizontalScrollTxt />
      </section>
      <About />
      <Serves />
      <Portfolio />
    </>
  );
};

export default Home;
