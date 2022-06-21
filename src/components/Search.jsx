import React from "react";
import { RiCustomerService2Full, RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-10 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4">
            Travelling is an amazing way to learn a lot of things in life. A lot
            of people around the world travel every year to many places.
            Moreover, it is important to travel to humans. Some travel to learn
            more while some travel to take a break from their life. If a man
            stays at one place for a long time, he becomes monotonous and his
            life becomes boring and callous. Travelling removes our monotony and
            gives pleasure. Similarly, it also broadens our outlook and
            refreshes our mind. A good traveler can easily educate others.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-l pl-10">
        <div className="border text-center">
          <p className="pt-2">GET AN ADDITION 10% OFF</p>
          <p className="py-4">12 HOUR LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label htmlFor="" className="font-medium my-2">Destination</label>
            <select name="" id="" className="border p-2">
              <option value="">Select...</option>
              <option value="">Grande Antique</option>
              <option value="">Key West</option>
              <option value="">Maldives</option>
              <option value="">Cozumel</option>
            </select>
          </div>
          <div className="flex justify-between items-center my-3">
            <label htmlFor="" className="font-medium text-sm">Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="" className="font-medium text-sm">Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-4">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
