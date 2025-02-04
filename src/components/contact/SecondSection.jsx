import React from "react";

function SecondSection() {
  return (
    <div className="w-full max-w-3xl mx-auto mb-10 bg-white px-5 sm:px-0">
      <form className="space-y-10 mt-24">
        

        {/* Contact Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <input
            type="text"
            placeholder="Phone number"
            className="w-full sm:w-[204%]
            border-b pb-2 border-black focus:outline-none"
          />
        </div>

     {/* Dropdown */}
<select
  className="w-[100%] sm:w-[90%] md:w-[100%] border-b pb-4 text-lg sm:text-xl border-black focus:border-black focus:ring-0 focus:outline-none  px-4 py-3 bg-white"
  required
  defaultValue=""
>
  <option value="" hidden>
    —Please choose an option—
  </option>
  <option value="cut" className="bg-white hover:text-[#BD895A] hover:bg-transparent py-2">
    Cut
  </option>
  <option value="wash_style" className="bg-white hover:text-[#BD895A] py-2">
    Wash & style
  </option>
  <option value="braids" className="bg-white hover:text-[#BD895A] py-2">
    Braids
  </option>
  <option value="balayage" className="bg-white hover:text-[#BD895A] py-2">
    Balayage
  </option>
</select>


        {/* Message Box */}
        <textarea
          placeholder="Message"
          className="w-full border-b pb-4 text-xl border-black focus:border-black focus:outline-none"
          rows="4"
        ></textarea>

        {/* Privacy Policy Checkbox */}
        <div className="flex items-center">
          <input type="checkbox" id="privacy" className="mr-2" required />
          <label htmlFor="privacy" className="text-sm text-gray-600">
            By completing and sending your data, you agree to the Privacy policy
          </label>
        </div>

        {/* Submit Button */}
        <div className="w-40 h-10 border-2 border-black flex items-center justify-center">
          <button type="submit" className="w-full h-full text-black hover:bg-black hover:text-white transition">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SecondSection;
