import Header from "@/components/sections/Header";
import HorizontalScrollTxt from "@/components/sections/HorizontalScrollTxt";
import MyNavbar from "@/components/sections/Navbar";
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
    </>
  );
};

export default Home;
