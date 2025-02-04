import React from 'react';

function SecondSection() {
  return (
    <div className='w-full h-screen max-w-3xl mb-10  ml-[19%] bg-white  '>
      <form className='space-y-20 mt-24 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <input
            type='text'
            placeholder='First name*'
            className='w-[130%]  border-b pb-2 border-black focus:outline-none'
            required
          />
          <input
            type='text'
            placeholder='Last name'
            className=' w-[130%] ml-32 border-b pb-2 border-black focus:outline-none  '
          />
        </div>
        <div className='grid grid-cols-1  sm:grid-cols-2 gap-4'>
          <input
            type='email'
            placeholder='E-mail*'
            className='w-[130%]  border-b pb-2 border-black focus:outline-none'
            required
          />
          <input
            type='text'
            placeholder='Phone number'
            className='w-[130%] ml-32  border-b pb-2 border-black focus:outline-none'
          />
        </div>
        <select
          className="w-[131.5%] border-b pb-4  text-xl border-black focus:border-black focus:ring-0 focus:outline-none "
          required  
          defaultValue=""
        >
            <option value="" hidden>—Please choose an option—</option>
            <option value="cut" className="bg-white hover:text-[#BD895A] hover:bg-transparent">
              Cut
            </option>
            <option value="wash_style" className="bg-white hover:text-[#BD895A]">
              Wash & style
            </option>
            <option value="braids" className="bg-white hover:text-[#BD895A]">
              Braids
            </option>
            <option value="balayage" className="bg-white hover:text-[#BD895A]">
              Balayage
            </option>
        </select>



        <textarea
          placeholder='Message'
          className='w-[131.5%] border-b pb-4  text-xl border-black focus:border-transparent '
          rows='4'
        ></textarea>
        <div className='flex items-center'>
          <input type='checkbox' id='privacy' className='mr-2' required />
          <label htmlFor='privacy' className='text-sm text-gray-600'>
            By completing and sending your data, you agree to the Privacy policy
          </label>
        </div>
        <div className='border-black border-2 w-40 h-10'>
          <button
            type='submit'
            className='w-40 h-10 '
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SecondSection;