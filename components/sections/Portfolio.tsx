"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { nextPortfolio, PreviousPortfolio } from "../redux/portfolioSlice";
import PortfolioItem from "../UI/PortfolioItem";

const Portfolio = () => {
  const dispatch = useDispatch<AppDispatch>();
  const portfolioItem = useSelector((state: RootState) => state.portfolio);
  const handelDisptch = () => {
    dispatch(nextPortfolio());
  };
  useEffect(() => {
    const intervalId = setTimeout(handelDisptch, 15000);
    return () => clearInterval(intervalId);
  }, [portfolioItem]);

  return (
    <section
      id="samples"
      className="position-relative  overflow-hidden d-flex justify-content-center align-items-center "
    >
      <div
        className="arrow-right arrow  position-absolute z-3 "
        style={{ right: "20px" }}
        onClick={() => dispatch(PreviousPortfolio())}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className="arrow-left arrow position-absolute z-3 "
        style={{ left: "20px" }}
        onClick={() => {
          dispatch(nextPortfolio());
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {portfolioItem.active.map((e, index) => (
        <PortfolioItem item={e} key={index} />
      ))}
    </section>
  );
};

export default Portfolio;
