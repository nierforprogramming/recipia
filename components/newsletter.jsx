import React from "react";

const NewsLetter = () => {
  return (
    <section className="bg-accent/15 px-5">
      <div className="container flex flex-col justify-center py-15 max-w-lg mx-auto">
        <div className="text-center space-y-4">
          <h2 className="font-display font-bold text-4xl lg:text-5xl">
            Deliciousness to your inbox
          </h2>
          <p>Enjoy weekly hand picked recipes and recommendations</p>
        </div>

        <div className="space-y-3 my-4 md:flex">
          <input
            className="input input-lg border-none outline-none w-full"
            type="email"
            placeholder="Email address"
          />
          <button className="btn btn-lg btn-accent w-full md:w-fit uppercase text-white">
            Join
          </button>
        </div>

        <div className="text-center">
          <p>By joining our newsletter you agree to our</p>
          <p className="underline decoration-accent">Terms and Conditions</p>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
