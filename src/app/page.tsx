import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      

      <div className="flex mt-10 gap-6 justify-center">
        <div className="border-t-2 border-gray-300 mt-4 w-80"></div>

        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Sell Your Car on PakWheels and Get the Best Price
        </h1>

        <div className="border-t-2 border-gray-300 mt-4 w-80"></div>
      </div>

      <div className="flex justify-center gap-8 mt-10">
        <div className="box1 flex flex-col items-center p-6 shadow-md rounded-lg bg-gray-50">
          <h4 className="text-2xl font-semibold text-blue-600 mb-4">
            Post your Ad on PakWheels
          </h4>
          <ul className="list-inside text-gray-700 space-y-2 mb-4">
            <li>
              <span className="text-green-500">✔</span>
              Post your Ad for Free in 3 Easy Steps.
            </li>
            <li>
              <span className="text-green-500">✔</span>
              Get Genuine offers from Verified Buyers.
            </li>
            <li>
              <span className="text-green-500">✔</span>
              Sell your car Fast at the Best Price.
            </li>
          </ul>
          <button className="font-semibold hover:bg-red-900 bg-red-600 text-white rounded-lg w-36 h-10 mr-40">
            POST YOUR AD
          </button>
        </div>

        <div className="or-divider flex flex-col items-center justify-center">
          <div className="border-l-2 border-t-2 border-b-2 h-16 mb-4"></div>
          <div className="text-gray-600 font-semibold">OR</div>
          <div className="border-l-2 border-t-2 border-b-2 h-16 mt-4"></div>
        </div>

        <div className="secbox flex flex-col items-center p-6 shadow-md rounded-md bg-gray-50">
          <h4 className="text-2xl font-semibold text-blue-600 mb-4">
            Try PakWheels Sell It For Me
          </h4>
          <ul className="list-inside text-gray-700 space-y-2 mb-4">
            <li>
              <span className="text-green-500">✔</span>
              Dedicated Sales Expert to Sell your Car.
            </li>
            <li>
              <span className="text-green-500">✔</span>
              We Bargain for you and share the Best Offer.
            </li>
            <li>
              <span className="text-green-500">✔</span>
              We ensure Safe & Secure Transaction.
            </li>
          </ul>
          <button className="font-semibold hover:bg-blue-900 bg-blue-500 text-white rounded-lg w-48 h-10 mr-40">
            REGISTER YOUR CAR
          </button>
        </div>
      </div>

      <div className="bg-gray-200 min-h-screen">
        <div className="featured-cars mt-20 ">
          <h2 className="ml-5  pt-8 font-bold">FEATURED NEW CARS</h2>
          <ul className="flex gap-6 ml-5">
            <li className="font-bold">Popular</li>
            <li>Upcoming</li>
            <li>Newly Launched</li>
          </ul>
          <div className="border-t-2 border-gray-600  w-16 ml-5 "></div> {/* Underline effect */}
        </div>
        <div className="border-t-2 w-5"></div>
        <div className="flex bg-gray-200 gap-8 mt-20 mb- ml-2">
          <div className="car1 flex flex-col items-center ml-7 p-4 bg-white rounded-md mb-5 shadow-md">
            <Link href={"/mercedes"}>
              <Image
                className="w-60 hover:w-64 transition-transform"
                src={"/mercedes.jpg"}
                alt="car pic"
                width={110}
                height={110}
              />
            </Link>
            <div className="text-center mt-2">
              <span className="text-blue-900 font-medium">MERCEDES-BENZ SUV</span>
              <div className="text-green-800">PKR 11,500,000</div>
            </div>
          </div>

          <div className="car2 flex flex-col items-center p-4 bg-white rounded-md mb-5 shadow-md ">
            <Link href={"/gtr"}>
              <Image
                className="w-60 hover:w-64 transition-transform"
                src={"/gtr.jpg"}
                alt="car pic"
                width={150}
                height={150}
              />
            </Link>
            <div className="text-center mt-6">
              <span className="text-blue-900 font-medium">NISSAN GT-R R34</span>
              <div className="text-green-800">PKR 8,100,000</div>
            </div>
          </div>
          <div className="car3 flex flex-col items-center p-4 bg-white rounded-md mb-5 shadow-md">
            <Link href={"/rolls"}>
              <Image
                className="w-60 hover:w-64 transition-transform"
                src={"/rolls.jpg"}
                alt="car pic"
                width={150}
                height={150}
              />
            </Link>
            <div className="text-center mt-2">
              <span className="text-blue-900 font-medium">ROLLS ROYCE CULLINAN</span>
              <div className="text-green-800">PKR 27.62 CRORE</div>
            </div>
          </div>
          <div className="car4 flex flex-col items-center p-4 bg-white rounded-md mb-5 shadow-md">
            <Link href={"/jaguar"}>
              <Image
                className="w-60 hover:w-64 transition-transform"
                src={"/jaguar.jpeg"}
                alt="car pic"
                width={150}
                height={150}
              />
            </Link>
            <div className="text-center mt-2">
              <span className="text-blue-900 font-medium">JAGUAR SPORTS</span>
              <div className="text-green-800">PKR 2.5 CRORE</div>
            </div>
          </div>
        </div>
      </div>

    
    </main>
  );
}

  
