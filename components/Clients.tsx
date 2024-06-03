import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";
import { companies } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="verySlow"
          />
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10 w-full px-4 overflow-hidden">
            {companies.map(({ id, img, name, nameImg }) => (
              <div
                key={id}
                className="flex flex-col md:flex-row items-center gap-2 p-2"
              >
                <img src={img} alt={name} className="md:w-10 w-8" />
                <img src={nameImg} alt={name} className="md:w-24 w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
