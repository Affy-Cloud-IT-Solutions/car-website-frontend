import React from "react";

const WarrantyPolicy = () => {
  return (
    <div className="warranty-policy container mx-auto px-4 py-8">
      {/* First Container with Image */}

      {/* Main Content */}
      <div className="warranty-content">
        <h1 className="text-3xl font-bold text-center mb-6">Warranty</h1>
        <p className="text-lg text-gray-700 mb-4">
          We understand that buying a used car can be an intimidating process
          for some. That is why all of our cars come with a warranty, to
          reassure you that we are looking after you long after your drive off
          the forecourt. Despite our commitment to extensive checks and the
          highest possible standards of preparation, sometimes things can go
          wrong with used cars.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Should the unforeseen happen, we want our customers to have the peace
          of mind that they will be well taken care of. That is why we have
          partnered with the well reputed Warrantywise to provide you with an
          excellent warranty package. As mentioned previously, all customers
          will automatically be registered for this as standard. What's not to
          like about that?!
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Please either fill in the form below or give us a call for further
          information.
        </p>

        <div className="warranty-sections grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
            {" "}
            <div className="warranty-header flex justify-center items-center flex-col mb-8">
              <img
                src="https://www.gmcmotors.co.uk/images/mediacache/img-77_maxw-512.png"
                alt="Warrantywise Logo"
                className="warranty-logo w-56 h-auto object-contain"
              />
            </div>
          </section>
          <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Warranty Cover</h2>
            <p className="text-gray-600">
              a. New Vehicles: GMC Motors provides a limited warranty for new
              vehicles, which covers manufacturing defects and materials for a
              specified period or mileage, as outlined in the warranty
              documentation provided with the vehicle. b. Pre-Owned Vehicles:
              Pre-owned vehicles come with a limited warranty, which varies
              depending on the vehicle. The warranty coverage for pre-owned
              vehicles will be explicitly stated in writing by GMC Motors at the
              time of purchase.
            </p>
          </section>

          <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Warranty Limitation</h2>
            <p className="text-gray-600">
              a. Exclusions: The warranty coverage does not apply to normal wear
              and tear, damage caused by accidents, misuse, neglect, improper
              maintenance, modification, or unauthorized repairs. b. Non-Covered
              Items: The warranty coverage does not include non-mechanical
              components such as cosmetic damages, tires, batteries,
              audio/visual equipment, or any accessories not installed by GMC
              Motors.
            </p>
          </section>

          <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Warranty Service:</h2>
            <p className="text-gray-600">
              a. Authorized Service Centers: Warranty service and repairs should
              be performed by authorized GMC Motors service centers or other
              authorized service providers to maintain the warranty coverage. b.
              Notification and Documentation: You must notify GMC Motors
              promptly of any warranty claim and provide all necessary
              documentation, including vehicle identification number (VIN),
              purchase receipt, and other relevant information.
            </p>
          </section>

          <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Warranty Claim</h2>
            <p className="text-gray-600">
              a. Repair or Replacement: GMC Motors reserves the right to choose
              between repairing or replacing any defective parts, as determined
              by GMC Motors, at its discretion. b. Warranty Period: The warranty
              coverage period commences on the vehicle’s first use or the
              original purchase date or the specified mileage, whichever comes
              first.
            </p>
          </section>

          <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">
              Limitation of Liability
            </h2>
            <p className="text-gray-600">
              a. GMC Motors liability under this warranty is limited to the
              repair or replacement of defective parts, as determined by GMC
              Motors, at its discretion. b. In no event shall GMC Motors be
              liable for any direct, indirect, incidental, special, or
              consequential damages arising out of or in connection with the
              warranty or its breach.
            </p>
          </section>

          <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Governing Law</h2>
            <p className="text-gray-600">
              a. This Agreement shall be governed by and construed in accordance
              with the laws of the jurisdiction in which GMC Motors is located,
              without regard to its conflict of laws principles.
            </p>
          </section>

          <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Transferability</h2>
            <p className="text-gray-600">
              a. New Vehicle Warranty: The new vehicle warranty coverage is
              transferable to subsequent owners within the warranty period,
              subject to GMC Motors' transfer requirements and procedures. b.
              Pre-Owned Vehicle Warranty: The warranty coverage for pre-owned
              vehicles may not be transferable, depending on the specific
              warranty terms stated in writing at the time of purchase.
            </p>
          </section>

          <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Modifications</h2>
            <p className="text-gray-600">
              a. We reserve the right to modify or amend these Warranty Terms &
              Conditions at any time. Any such modifications or amendments will
              be effective upon posting on our website or providing written
              notice to you. b. By accepting the warranty coverage provided by
              GMC Motors, you acknowledge that you have read, understood, and
              agreed to these Warranty Terms & Conditions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPolicy;
