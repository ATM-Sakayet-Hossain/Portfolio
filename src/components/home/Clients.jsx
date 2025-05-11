import React from "react";

const Clients = () => {
  return (
    <section className="py-25">
      <div className="container">
        <h2 className="heading text-center m-auto pb-6">Happy Clients</h2>
        <p className="secondary w-144 text-center m-auto">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <div className="flex justify-between items-center pt-6">
          <div className="w-50">
            <img className="w-full py-20 px-8" src="logo/google.png" alt="" />
          </div>
          <div className="w-50">
            <img className="w-full py-20 px-8" src="logo/amazon.png" alt="" />
          </div>
          <div className="w-50">
            <img className="w-full py-20 px-8" src="logo/linked.png" alt="" />
          </div>
          <div className="w-50">
            <img className="w-full py-20 px-8" src="logo/google.png" alt="" />
          </div>
          <div className="w-50">
            <img className="w-full py-20 px-8" src="logo/amazon.png" alt="" />
          </div>
          <div className="w-50">
            <img className="w-full py-20 px-8" src="logo/linked.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
