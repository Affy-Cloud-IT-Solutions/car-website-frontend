import { ImageCarousel } from "@/components/home/Carousel";
import React from "react";

const DeliveryPolicy = () => {
  return (
    <div>
      <ImageCarousel />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center my-4">
        Delivery - GMC Motors
      </h1>
      <div className="flex gap-8">
        {" "}
        <section>
          <h2>Vehicle Delivery</h2>
          <p>
            Delivery Area: We offer vehicle delivery within a designated
            delivery area. The specific delivery area and any associated charges
            will be communicated to you at the time of purchase. Delivery Times:
            We will make reasonable efforts to deliver the vehicle within the
            agreed timeframe. However, delivery times may vary depending on
            factors beyond our control, such as traffic conditions and weather.
          </p>
        </section>
        <section>
          <h2>Delivery Process</h2>
          <p>
            Delivery Notification: We will notify you in advance to schedule the
            delivery of your vehicle. It is important to provide accurate
            contact information to ensure smooth communication. Delivery
            Location: The delivery will be delivered to the location specified
            by you during the purchase process, subject to our delivery area
            limitations. It is your responsibility to ensure that the delivery
            location is accessible and suitable for the delivery vehicle.
          </p>
        </section>
        <section>
          <h2>Delivery Inspection</h2>
          <p>
            Vehicle Condition: Upon delivery, you or an authorized
            representative must thoroughly inspect the vehicle for any visible
            damage or discrepancies. Any concerns or issues should be reported
            immediately. Acceptance: By accepting the delivery, you acknowledge
            that the vehicle has been delivered in the expected condition,
            unless otherwise noted in writing at the time of delivery.
          </p>
        </section>
      </div>

      <section>
        <h2>Documentation</h2>
        <p>
          Delivery Confirmation: A delivery confirmation document will be
          provided to you upon successful delivery. This document serves as
          proof of delivery and should be retained for your records. b.
          Ownership Transfer: The transfer of ownership and associated
          documentation, such as title transfer and registration, will be
          handled separately in accordance with applicable laws and regulations.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          GMC Motors shall not be liable for any direct, indirect, incidental,
          special, or consequential damages arising out of or in connection with
          the delivery of the vehicle, except in cases of gross negligence or
          willful misconduct.
        </p>
      </section>

      <section>
        <h2>Modifications</h2>
        <p>
          We reserve the right to modify or amend this Car Delivery Policy at
          any time. Any such modifications or amendments will be effective upon
          posting on our website or providing written notice to you.
        </p>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          This Car Delivery Policy shall be governed by and construed in
          accordance with the laws of the jurisdiction in which GMC Motors is
          located, without regard to its conflict of laws principles. By
          purchasing a vehicle from GMC Motors and opting for delivery, you
          acknowledge that you have read, understood, and agreed to the terms of
          this Car Delivery Policy.
        </p>
      </section>

      <section>
        {/* <h2>Request A Quote</h2> */}
        <p>
          {/* <button>Request A Quote</button> */}
          <p className="text-white text-center bg-black/90 p-4 my-2">
            This IP address is in a range banned from posting.
          </p>
        </p>
      </section>
    </div>
  );
};

export default DeliveryPolicy;
