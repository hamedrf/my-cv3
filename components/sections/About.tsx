import Image from "next/image";
import Underline from "../effect/Underline";
import hamedrajabifarjad from "../../public/images/hamedrajabifarjad.webp";
import SkillProgress from "../UI/SkillProgress";

const About = () => {
  return (
    <section className="row">
      <div className="col-xl-5 col-lg-6 col-12 d-flex justify-content-center">
        <div className="bg-second rounded w-50 p-5 d-flex justify-content-center flex-column align-items-center">
          <h1 className="m-5">
            {" "}
            <Underline text="درباره من" delay={1} />
          </h1>
          <p>
            من برنامه‌نویس وب با بیش از ۳ سال تجربه فریلنسری در توسعه و طراحی
            وبسایت‌های ساده و شیک هستم. تسلط کامل به HTML، CSS، JavaScript و
            TypeScript دارم و بر فریمورک‌ها و کتابخانه‌هایی مانند React، jQuery،
            Bootstrap و Next.js 14 نیز تسلط دارم. همچنین تجربه‌ی استفاده از
            اکثریت هوک‌های React و Next.js از جمله react-query و redux نیز دارم.
            توانایی کار با وردپرس و تجربه‌ی گسترده در استفاده از انواع
            افزونه‌ها، از جمله Elementor و WooCommerce، از دیگر مهارت‌های من
            است. همچنین با Flutter، زبان C# (Blazor)، PHP و MySQL (CRUD) آشنایی
            دارم.
          </p>
        </div>
      </div>
      <div className="col-xl-7 px-5 col-lg-6 col-12 d-flex justify-content-center align-items-center">
        <div className="w-50">
          <SkillProgress icon={<div>1</div>} progress={90} />
        </div>
        <div className="w-50 h-auto gradien-shadow">
          <Image
            alt="hamedrajabifarjd"
            src={hamedrajabifarjad}
            className=" w-100 h-100 rounded-5 "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
