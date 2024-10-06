import { MapPinned } from "lucide-react";

const Addresses = () => {
  return (
    <div className="bg-gray-900 py-12 flex flex-col items-center justify-center">
      {/* Header on top */}
      <h3 className="text-3xl font-bold text-white text-center mb-12">
        Our Offices
      </h3>

      {/* Offices side by side */}
      <div className="max-w-screen-xl w-full mx-auto px-8 lg:flex lg:justify-between lg:space-x-12">
        {/* Office 1 */}
        <div className="text-gray-300 border-l-4 border-indigo-500 pl-6 py-4 lg:w-1/2 bg-gray-800 rounded-lg shadow-md">
          <h4 className="flex items-center gap-2 text-xl font-semibold text-white">
            <MapPinned /> Houston Office
          </h4>
          <p className="mt-2 font-semibold">
          10333 Harwin Dr. #220 <br />
          Houston, TX 77036
          </p>
        </div>

        {/* Office 2 */}
        <div className="text-gray-300 border-l-4 border-indigo-500 pl-6 py-4 lg:w-1/2 mt-8 lg:mt-0 bg-gray-800 rounded-lg shadow-md">
          <h4 className="flex items-center gap-2 text-xl font-semibold text-white">
            <MapPinned /> Miami Office
          </h4>
          <p className="mt-2 font-semibold">
          14508 Lincoln Blvd #121 <br />
          Miami, FL 33176
          </p>
        </div>
        {/* Office 2 */}
        <div className="text-gray-300 border-l-4 border-indigo-500 pl-6 py-4 lg:w-1/2 mt-8 lg:mt-0 bg-gray-800 rounded-lg shadow-md">
          <h4 className="flex items-center gap-2 text-xl font-semibold text-white">
            <MapPinned /> New York Office
          </h4>
          <p className="mt-2 font-semibold">
          1178 Broadway 3rd floor #1424 <br />
          New York, NY 10001
          </p>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
