"use client";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faStackOverflow,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainBtn, { colorBtn } from "../UI/MainBtn";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div
        id="contact"
        className="position-relative"
        style={{ paddingTop: "15vh" }}
      >
        <div className="custom-shape-divider-bottom-1723269695">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <section
        className="overflow-hidden position-relative d-flex flex-column  justify-content-between align-items-center pt-5"
        style={{ paddingTop: "20vh" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-100 position-absolute top-0 z-n1 min-vw-100"
          style={{ marginBottom: "-1px" }}
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="2550"
          height="1440"
          preserveAspectRatio="none"
          viewBox="0 0 2550 1440"
        >
          <g mask='url("#SvgjsMask1035")' fill="none">
            <rect
              width="2550"
              height="1440"
              x="0"
              y="0"
              fill="var(--color-gradient-second-dark)"
            ></rect>
            <path
              d="M1276.29 1628.85C1626.35 1446.75 1652.56 305 2108.86 287.93 2565.15 270.86 2687.9 849.39 2941.42 878.33"
              stroke="var(--color-second)"
              strokeWidth="2"
            ></path>
            <path
              d="M188.04 1440.7C441.57 1401.53 569.19 797.79 983.93 792.98 1398.67 788.17 1381.87 972.98 1779.81 972.98 2177.76 972.98 2371.71 794.1 2575.7 792.98"
              stroke="var(--color-second)"
              strokeWidth="2"
            ></path>
            <path
              d="M1110.4 1475.78C1401.58 1275.69 1236.07 228.62 1750.6 215.89 2265.13 203.16 2685.8 724.58 3031 734.29"
              stroke="var(--color-second)"
              strokeWidth="2"
            ></path>
            <path
              d="M216.52 1541C543.28 1376.19 530.23 352.44 1000.42 304.7 1470.62 256.96 1392.37 484.7 1784.33 484.7 2176.28 484.7 2367.16 305.85 2568.23 304.7"
              stroke="var(--color-second)"
              strokeWidth="2"
            ></path>
            <path
              d="M1070.33 1693.01C1343.45 1633.36 1366.46 991.55 1875.18 916.72 2383.9 841.89 2443.49 432.95 2680.03 412.72"
              stroke="var(--color-second)"
              strokeWidth="2"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1035">
              <rect width="2550" height="1440" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
        <div
          className="d-flex justify-content-center align-items-center flex-column icon-footer"
          style={{ width: "15rem" }}
        >
          <img
            src="images/icon.webp"
            alt="آیکون سایت"
            className="rounded rounded-circle w-100 h-100 border border-5 border-light p-3"
          />
        </div>
        <h1 className="text-center text-light display-6 my-5  ">
          <strong>حامد رجبی فرجاد</strong>
        </h1>

        <div className="social-bar my-3">
          <ul>
            <li>
              <a className="telegram" href="https://t.me/hamed_rf276">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FontAwesomeIcon icon={faTelegram} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                className="instagram"
                href="https://www.instagram.com/hamed.__rf?igsh=bnpxdmFyZWVlem1m"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a className="github" href="https://github.com/hamedrf">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                className="stack-overflow"
                href="https://stackoverflow.com/users/24951777/hamedrf"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FontAwesomeIcon icon={faStackOverflow} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a className="linkedin" href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
        <a href="tel:+989012226411">
          <MainBtn text="تماس" color={colorBtn.main} />
        </a>
        <div className="text-center text-light mt-5 mb-3 mx-2">
          © تمامی حقوق این وبسایت متعلق به حامد رجبی فرجاد میباشد .
        </div>
      </section>
    </footer>
  );
};

export default Footer;
