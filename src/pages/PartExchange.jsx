import { Input } from "@/components/ui/input";
import React from "react";

const PartExchange = () => {
  return (
    <section className=" py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-extrabold mb-6">Part Exchange</h1>
      </div>

      <div className="max-w-7xl mx-auto text-left space-y-4 text-lg leading-relaxed">
        <p>
          We understand that the most difficult part of upgrading or changing
          your car is navigating the minefield of disposing of or selling your
          old car. As a thank you for buying a car from us we will give you a
          competitive valuation for your old vehicle to help reduce the price of
          your car. Yes, you can go to the ‘sell your car’ services you see
          advertised but we assure you that we are a much better option for two
          main reasons:
        </p>

        <p>
          <strong>Competitive valuation</strong> – This means your next car will
          end up costing you less.
        </p>

        <p>
          <strong>Hassle Free</strong> – Simply switch the vehicles when you
          collect or have your next car delivered.
        </p>

        <p>
          To obtain a valuation, simply complete the form below or give us a
          call.
        </p>
      </div>
      <div className="bg-black p-4 md:p-6 text-center mt-8 !h-full">
        <h2 className="text-white !font-[500]">
          Enter your vehicle details below to get an no obligation quote now
        </h2>
        <div className="flex w-fit mx-auto border-white rounded-xl overflow-hidden h-full">
          <div className="h-full py-4 px-4 text-white bg-blue-900">sa</div>
          <Input
            className={
              "bg-yellow-400 rounded-[0px] w-64 text-2xl md:!text-3xl font-bold"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default PartExchange;
