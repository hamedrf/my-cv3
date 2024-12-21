import Underline from "../effect/Underline";
import SkillProgress from "../UI/SkillProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faElementor,
  faJs,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section
      className="row d-flex justify-content-around align-items-center px-xl-3 about"
      id="about"
    >
      <div className=" col-xl-4 col-md-7 col-11 p-xl-0 py-5 d-flex justify-content-center">
        <div className="bg-second rounded-5 p-xxl-5 p-xl-4 p-3 d-flex justify-content-center flex-column align-items-center">
          <h1 className="m-5">
            {" "}
            <Underline text="درباره من" delay={1} />
          </h1>
          <p>
            من برنامه‌نویس وب با بیش از ۳ سال تجربه در توسعه و طراحی وبسایت‌های
            ساده و شیک هستم. تسلط کامل به HTML، CSS، JavaScript و TypeScript
            دارم و بر فریمورک‌ها و کتابخانه‌هایی مانند React، Tailwind ، jQuery،
            Bootstrap و Next.js 14 نیز تسلط دارم. همچنین تجربه‌ی استفاده از
            اکثریت هوک‌های React و Next.js از جمله react-query و redux نیز دارم.
            توانایی کار با وردپرس و تجربه‌ی گسترده در استفاده از انواع
            افزونه‌ها، از جمله Elementor و WooCommerce، از دیگر مهارت‌های من
            است. همچنین با Flutter، زبان C# (Blazor)، PHP و MySQL (CRUD) آشنایی
            دارم.
          </p>
        </div>
      </div>
      <div className="col-xl-8 col-12   row d-flex justify-content-center flex-md-row flex-column-reverse">
        <div className="col-md-6 col-12 px-3 my-5 my-md-0 d-flex flex-column justify-content-evenly align-items-center">
          <SkillProgress
            icon={
              <>
                <FontAwesomeIcon
                  icon={faReact}
                  className="icon-skill-progress react-color"
                />
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  className="icon-skill-progress"
                >
                  <g transform="translate(.722 .64) scale(6.375)">
                    <circle cx="40" cy="40" r="40" />
                    <path
                      d="M66.448 70.009L30.73 24H24v31.987h5.384v-25.15l32.838 42.427a40.116 40.116 0 004.226-3.255z"
                      fill="url(#prefix___Linear1)"
                      fillRule="nonzero"
                    />
                    <path
                      fill="url(#prefix___Linear2)"
                      d="M51.111 24h5.333v32h-5.333z"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="prefix___Linear1"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(51.103 -29.93 76.555) scale(25.1269)"
                    >
                      <stop offset="0" stopColor="#fff" />
                      <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="prefix___Linear2"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(90.218 14.934 38.787) scale(23.50017)"
                    >
                      <stop offset="0" stopColor="#fff" />
                      <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </>
            }
            progress={95}
          />
          <SkillProgress
            icon={
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 32 32"
                  className="icon-skill-progress"
                >
                  <title>file_type_typescript_official</title>
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="1.312"
                    style={{ fill: "#3178c6" }}
                  />
                  <path
                    d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z"
                    style={{ fill: "#ffffff", fillRule: "evenodd" }}
                  />
                </svg>
                <FontAwesomeIcon
                  icon={faJs}
                  className="icon-skill-progress js-color"
                />
              </>
            }
            progress={90}
          />
          <SkillProgress
            icon={
              <>
                <FontAwesomeIcon
                  icon={faBootstrap}
                  className="icon-skill-progress bootstrap-color"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#38BDF8"
                  viewBox="0 0 24 24"
                  xmlSpace="preserve"
                  className="icon-skill-progress fw-bolder h4 "
                >
                  <path
                    className="w-100 h-100"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                  />
                </svg>
                <div className="icon-skill-progress fw-bolder h4 gsap-color">
                  GSAP
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  role="img"
                  className="icon-skill-progress jquery-color"
                >
                  <path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269.037.079.078.154.118.229.023.052.049.1.077.15.013.027.031.056.047.082.026.052.054.102.081.152l.157.266c.03.049.057.097.09.146.056.094.12.187.178.281.026.04.05.078.079.117a6.368 6.368 0 0 0 .31.445c.078.107.156.211.24.315.027.038.058.076.086.115l.22.269c.028.03.055.067.084.099.098.118.202.233.306.35l.005.006a3.134 3.134 0 0 0 .425.44c.08.083.16.165.245.245l.101.097c.111.105.223.209.34.309.002 0 .003.002.005.003l.057.05c.102.089.205.178.31.26l.125.105c.085.068.174.133.26.2l.137.105c.093.07.192.139.287.207.035.025.07.05.106.073l.03.023.28.185.12.08c.148.094.294.184.44.272.041.02.084.044.123.068.108.062.22.125.329.183.06.034.122.063.184.094.075.042.153.083.234.125a.324.324 0 0 1 .056.023c.033.015.064.031.096.047.12.06.245.118.375.175.024.01.05.02.076.034.144.063.289.123.438.182.034.01.07.027.105.04.135.051.274.103.411.152l.05.018c.154.052.305.102.46.15.036.01.073.023.111.033.16.048.314.105.474.137 10.273 1.872 13.258-6.177 13.258-6.177-2.508 3.266-6.958 4.127-11.174 3.169-.156-.036-.312-.086-.47-.132a13.539 13.539 0 0 1-.567-.182l-.062-.024c-.136-.046-.267-.097-.4-.148a1.615 1.615 0 0 0-.11-.04c-.148-.06-.29-.121-.433-.184-.031-.01-.057-.024-.088-.036a23.44 23.44 0 0 1-.362-.17 1.485 1.485 0 0 1-.106-.052c-.094-.044-.188-.095-.28-.143a3.947 3.947 0 0 1-.187-.096c-.114-.06-.227-.125-.34-.187-.034-.024-.073-.044-.112-.066a15.922 15.922 0 0 1-.439-.27 2.107 2.107 0 0 1-.118-.078 6.01 6.01 0 0 1-.312-.207c-.035-.023-.067-.048-.103-.073a9.553 9.553 0 0 1-.295-.212c-.042-.034-.087-.066-.132-.1-.088-.07-.177-.135-.265-.208l-.118-.095a10.593 10.593 0 0 1-.335-.28.258.258 0 0 0-.037-.031l-.347-.316-.1-.094c-.082-.084-.166-.164-.25-.246l-.098-.1a9.081 9.081 0 0 1-.309-.323l-.015-.016c-.106-.116-.21-.235-.313-.355-.027-.03-.053-.064-.08-.097l-.227-.277a21.275 21.275 0 0 1-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9.111 9.111 0 0 0 .678 1.133c.23.33.484.721.793.988.107.122.223.24.344.36l.09.09c.114.11.232.217.35.325l.016.013a9.867 9.867 0 0 0 .414.342c.034.023.063.05.096.073.14.108.282.212.428.316l.015.009c.062.045.128.086.198.13.028.018.06.042.09.06.106.068.21.132.318.197.017.007.032.016.048.023.09.055.188.108.282.157.033.02.065.035.1.054.066.033.132.068.197.102l.032.014c.135.067.273.129.408.19.034.014.063.025.092.039.111.048.224.094.336.137.05.017.097.037.144.052.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8.04 8.04 0 0 1-.449-.13c-.048-.014-.09-.029-.136-.043-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135-.034-.015-.065-.025-.091-.04-.14-.063-.281-.125-.418-.192l-.206-.107-.119-.06a5.673 5.673 0 0 1-.265-.15.62.62 0 0 1-.062-.035c-.106-.066-.217-.13-.318-.198-.034-.019-.065-.042-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313-.032-.029-.063-.053-.094-.079-1.499-1.178-2.681-2.79-3.242-4.613-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46.665 1.563 2.024 2.79 3.608 3.37.065.025.128.046.196.07l.088.027c.092.03.185.063.28.084 4.381.845 5.567-2.25 5.886-2.704-1.043 1.498-2.792 1.857-4.938 1.335a4.85 4.85 0 0 1-.516-.16 6.352 6.352 0 0 1-.618-.254 6.53 6.53 0 0 1-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5" />
                </svg>
              </>
            }
            progress={98}
          />
          <SkillProgress
            icon={
              <>
                <FontAwesomeIcon
                  icon={faWordpress}
                  className="icon-skill-progress wordpress-color"
                />
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 503.81 299.89"
                  className="icon-skill-progress woocommerce-color"
                >
                  <defs>
                    <style>
                      {`.cls-1 { fill: #7f54b3; }
            .cls-2 { fill: #fff; }`}
                    </style>
                  </defs>
                  <title>woocommerce</title>
                  <path
                    className="cls-1"
                    d="M46.75,0H456.84a46.94,46.94,0,0,1,47,47V203.5a46.94,46.94,0,0,1-47,47H309.78L330,299.89l-88.78-49.43H47a46.94,46.94,0,0,1-47-47V47A46.77,46.77,0,0,1,46.76,0Z"
                  />
                  <path
                    className="cls-2"
                    d="M28.69,42.8c2.86-3.89,7.16-5.94,12.9-6.35Q57.25,35.24,59.41,51.2Q68.94,115.4,80.09,160l44.85-85.4q6.15-11.67,15.36-12.29c9-.61,14.54,5.12,16.8,17.2,5.12,27.24,11.67,50.38,19.45,70q8-78,27-112.64c3.07-5.73,7.57-8.6,13.51-9A17.8,17.8,0,0,1,230,32a16,16,0,0,1,6.35,11.67,17.79,17.79,0,0,1-2,9.83c-8,14.75-14.55,39.53-19.87,73.93-5.12,33.39-7,59.4-5.73,78a24.29,24.29,0,0,1-2.46,13.52c-2.46,4.51-6.15,7-10.86,7.37-5.32.41-10.85-2.05-16.17-7.57Q150.64,189.54,134,131.48q-20,39.32-29.49,59c-12.09,23.14-22.33,35-30.93,35.64C68,226.51,63.3,221.8,59.2,212Q43.54,171.72,25.41,56.52A17.44,17.44,0,0,1,28.69,42.8ZM468.81,75C461.43,62.05,450.58,54.27,436,51.2A53.72,53.72,0,0,0,425,50c-19.66,0-35.63,10.24-48.13,30.72a108.52,108.52,0,0,0-16,57.75q0,23.66,9.83,40.55c7.37,12.91,18.23,20.69,32.77,23.76A53.64,53.64,0,0,0,414.54,204c19.86,0,35.83-10.24,48.12-30.72a109.73,109.73,0,0,0,16-58C478.84,99.33,475.36,86,468.81,75ZM443,131.69c-2.86,13.51-8,23.55-15.56,30.31-5.94,5.32-11.47,7.57-16.59,6.55-4.92-1-9-5.32-12.08-13.31a52,52,0,0,1-3.69-18.64,71.48,71.48,0,0,1,1.43-14.95,66.29,66.29,0,0,1,10.86-24.37c6.76-10,13.92-14.13,21.3-12.7,4.91,1,9,5.33,12.08,13.31a52,52,0,0,1,3.69,18.64A71.47,71.47,0,0,1,443,131.69ZM340.6,75c-7.37-12.91-18.43-20.69-32.76-23.76A53.79,53.79,0,0,0,296.78,50c-19.66,0-35.64,10.24-48.13,30.72a108.52,108.52,0,0,0-16,57.75q0,23.66,9.83,40.55c7.37,12.91,18.22,20.69,32.76,23.76A53.72,53.72,0,0,0,286.33,204c19.87,0,35.84-10.24,48.13-30.72a109.72,109.72,0,0,0,16-58C350.43,99.33,347.16,86,340.6,75Zm-26,56.73c-2.86,13.51-8,23.55-15.56,30.31-5.94,5.32-11.47,7.57-16.59,6.55-4.91-1-9-5.32-12.08-13.31a52,52,0,0,1-3.69-18.64,71.48,71.48,0,0,1,1.43-14.95A66.29,66.29,0,0,1,279,97.28c6.76-10,13.92-14.13,21.3-12.7,4.91,1,9,5.33,12.08,13.31A52,52,0,0,1,316,116.53a60.45,60.45,0,0,1-1.44,15.16Z"
                  />
                </svg>
                <FontAwesomeIcon
                  icon={faElementor}
                  className="icon-skill-progress elementor-color"
                />
              </>
            }
            progress={85}
          />
        </div>
        <div className="col-md-6 col-12 px-5 p-md-0 ps-md-3">
          <div className="h-auto  gradien-shadow">
            <img
              alt="hamedrajabifarjd"
              src="images/hamedrajabifarjad.webp"
              className=" w-100 h-100 rounded-5 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
