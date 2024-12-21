"use client";
import { portfolio } from "../redux/portfolioSlice";
import MainBtn, { colorBtn } from "./MainBtn";
import Tag from "./Tag";

interface SlicePortfolioProps {
  item: portfolio;
}
const PortfolioItem: React.FC<SlicePortfolioProps> = ({ item }) => {
  return (
    <div
      id="portfolio"
      key={item.id}
      className={`${item.action} 
            d-flex justify-content-start align-items-lg-stretch align-items-center justify-content-lg-center flex-lg-row-reverse  flex-column row  w-100
      `}
    >
      <div
        className={`bg-background-portfoliio bg-${item.imgClass} col-11 col-xl-6`}
      ></div>
      <div
        style={{ background: item.color }}
        className="col-11 col-xl-4  col-xxl-3 d-flex justify-content-center  align-items-center content-portfolio-effect flex-column content-portfolio"
      >
        <h1 className="text-size-lg my-3 text-center">{item?.title}</h1>
        <p className="m-lg-5 my-4 mx-2 des-font">{item?.des}</p>
        <div className="d-flex flex-wrap justify-content-center w-75">
          {item?.tags.map((e, index) => {
            return <Tag key={index} text={e} />;
          })}
        </div>
        <div className="my-4">
          {item.imgClass !== "hamedrajabifarjad" ? (
            <a href={`https://${item.imgClass}.ir`}>
              <MainBtn color={colorBtn.main} text="دیدن صفحه" />
            </a>
          ) : (
            <MainBtn
              color={colorBtn.main}
              text="دیدن صفحه"
              eventClick={() =>
                alert("این وب سایت نسخه قدیمی همین وب سایت هست")
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
