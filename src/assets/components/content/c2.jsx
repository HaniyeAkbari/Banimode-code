import React  from 'react';
import { TERipple } from 'tw-elements-react';



export default function Con2({ date, title, desc, material, img, price,handling }) {
  


  



  return (

    <div
      className="rounded-lg font-josefin bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div
        className="border-b-2 text-sm text-[#00bf6f] border-neutral-100 px-6 py-1 dark:border-neutral-600 dark:text-neutral-50">
        {date}
      </div>
      <div className="p-6">
        <h5
          className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <TERipple rippleDuration={500} rippleColor="light">
          <figure>
            <img
              className="rounded-t-lg"
              src={img}
              alt="" />
          </figure>
        </TERipple>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {desc}
        </p>
        <h6
            className="border-y-2 text-sm border-neutral-100 px-6 py-2 dark:border-neutral-600 dark:text-neutral-50">
            made of <span className='text-[#00bf6f]'>{material}</span>
          </h6>
        <h6
            className=" text-lg px-6 py-2  dark:text-neutral-50">
            {price} $
          </h6>
        <TERipple rippleDuration={300} rippleColor="light">
          <button 
            type="button" onClick={handling}
            className="inline-block disabled:bg-zinc-500  rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium capitalize leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
            add to card
          </button>
        </TERipple>
      </div>

    </div>

  );
}