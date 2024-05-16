import React from "react";

function Product() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
    
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#"></a>
            <div className="relative">
              <a href="#">
                <img
                  className="w-30 h-auto"
                  src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0  px-4 py-2 text-white mt-3 mr-3">
                  <svg
                    class="text-red-900 w-6 h-auto fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                  </svg>
                </div>
              </a>
            </div>

            <div className="px-6 py-4 mb-auto">
  <a
    href="#"
    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
  >
    Chicken Sandwich
  </a>
  <span className="bg-pink-200 px-2 py-1 rounded-lg text-sm font-medium">$5.99</span>
</div>


            <div class="p-6 pt-0">
              <button
                type="button"
                class="text-white bg-black font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                ADD TO CART
              </button>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1">6 mins ago</span>
              </span>
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1">39 Comments</span>
              </span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#"></a>
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0  px-4 py-2 text-white mt-3 mr-3">
                  <svg
                    class="text-red-900 w-6 h-auto fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
  <a
    href="#"
    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
  >
    Chicken Sandwich
  </a>
  <span className="bg-pink-200 px-2 py-1 rounded-lg text-sm font-medium">$5.99</span>
</div>


            <div class="p-6 pt-0">
              <button
                type="button"
                class="text-white bg-black font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                ADD TO CART
              </button>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1">6 mins ago</span>
              </span>
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1">39 Comments</span>
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#"></a>
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0  px-4 py-2 text-white mt-3 mr-3">
                  <svg
                    class="text-red-900 w-6 h-auto fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
  <a
    href="#"
    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
  >
  Egg Rice
  </a>
  <span className="bg-pink-200 px-2 py-1 rounded-lg text-sm font-medium">$5.99</span>
</div>

            <div class="p-6 pt-0">
              <button
                type="button"
                class="text-white bg-black font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                ADD TO CART
              </button>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1">6 mins ago</span>
              </span>
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1">39 Comments</span>
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#"></a>
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0  px-4 py-2 text-white mt-3 mr-3">
                  <svg
                    class="text-red-900 w-6 h-auto fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
  <a
    href="#"
    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
  >
Chicken Tikka
  </a>
  <span className="bg-pink-200 px-2 py-1 rounded-lg text-sm font-medium">$5.99</span>
</div>

            <div class="p-6 pt-0">
              <button
                type="button"
                class="text-white bg-black font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                ADD TO CART
              </button>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1">6 mins ago</span>
              </span>
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1">39 Comments</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
