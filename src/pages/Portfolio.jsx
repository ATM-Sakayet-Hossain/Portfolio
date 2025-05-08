import React from 'react'
import PortfolioItem from '../components/home/PortfolioItem'
import BtnPrimary from '../components/Utils/BtnPrimary'

const Portfolio = () => {
  return (
    <section className="pt-25">
      <div className="container bg-white">
        <h2 className="heading text-center">Portfolio</h2>
        <p className="w-xl secondary text-center m-auto">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <div className="pt-18 grid grid-cols-3 gap-6">
          <PortfolioItem
            image="/protfolio-1.png"
            catagory="UI-UX DESIGN"
            title="Product Admin Dashboard"
          >
            Vivamus eleifend convallis ante, non pharetra libero molestie
            laoreet. Donec id imperdiet lacus.
          </PortfolioItem>
          <PortfolioItem
            image="/protfolio-2.png"
            catagory="UI-UX DESIGN"
            title="Product Admin Dashboard"
          >
            Vivamus eleifend convallis ante, non pharetra libero molestie
            laoreet. Donec id imperdiet lacus.
          </PortfolioItem>
          <PortfolioItem
            image="/protfolio-3.png"
            catagory="UI-UX DESIGN"
            title="Product Admin Dashboard"
          >
            Vivamus eleifend convallis ante, non pharetra libero molestie
            laoreet. Donec id imperdiet lacus.
          </PortfolioItem>
          <PortfolioItem
            image="/protfolio-4.png"
            catagory="UI-UX DESIGN"
            title="Product Admin Dashboard"
          >
            Vivamus eleifend convallis ante, non pharetra libero molestie
            laoreet. Donec id imperdiet lacus.
          </PortfolioItem>
          <PortfolioItem
            image="/protfolio-5.png"
            catagory="UI-UX DESIGN"
            title="Product Admin Dashboard"
          >
            Vivamus eleifend convallis ante, non pharetra libero molestie
            laoreet. Donec id imperdiet lacus.
          </PortfolioItem>
          <PortfolioItem
            image="/protfolio-6.png"
            catagory="UI-UX DESIGN"
            title="Product Admin Dashboard"
          >
            Vivamus eleifend convallis ante, non pharetra libero molestie
            laoreet. Donec id imperdiet lacus.
          </PortfolioItem>
        </div>
        <div className='p-15 text-center'>
          <BtnPrimary path="/protfolio" title="More Project" />
        </div>
      </div>
    </section>
  );
}

export default Portfolio
