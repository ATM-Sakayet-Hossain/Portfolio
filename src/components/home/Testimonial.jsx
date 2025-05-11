import React from "react";

const Testimonial = () => {
  return (
    <section className="pb-25">
      <div className="container">
        <div className="pb-17">
          <h2 className="heading text-center m-auto pb-6">Testimonial</h2>
          <p className="secondary w-144 text-center m-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div>
          <p className="font-workSans font-medium text-lg w-218 text-center m-auto">
            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
            felis turpis, nec semper odio convallis at. Curabitur imperdiet
            semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh.
            Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
            Morbi ornare elit at libero suscipit porta.”
          </p>
          <div className="flex flex-col items-center pt-6 pb-12">
            <span className="font-poppins font-semibold text-lg pb-2" >Esther Howard</span>
            <span className="font-poppins font-light text-base" >Managing Director, ABC company</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
