export default function RectangularBlocks() {
  return (
    <div className="lg:flex justify-center items-center lg:space-x-2 lg:p-0 p-3 lg:space-y-0 space-y-3 container m-auto mt-4">
      {/* Block 1 */}
      <div className="bg-[#46146C] text-white p-6 lg:w-64 hover:bg-[#9258BC] transition duration-500 ease-in-out h-32 flex items-center justify-center transform hover:scale-105">
        <p className="text-center">Sound in design</p>
      </div>
      
      {/* Block 2 */}
      <div className="bg-[#541484] text-white p-6 lg:w-64 hover:bg-[#7944A0] transition duration-500 ease-in-out h-32 flex items-center justify-center transform hover:scale-105">
        <p className="text-center">Have statistical validity</p>
      </div>

      {/* Block 3 */}
      <div className="bg-[#622F88] text-white p-6 lg:w-64 hover:bg-[#7944A0] transition duration-500 ease-in-out h-32 flex items-center justify-center transform hover:scale-105">
        <p className="text-center">Do not compromise the safety of the human subjects</p>
      </div>

      {/* Block 4 */}
      <div className="bg-[#7944A0] text-white p-6 lg:w-64 hover:bg-[#541484] transition duration-500 ease-in-out h-32 flex items-center justify-center transform hover:scale-105">
        <p className="text-center">Conducted under supervision of trained persons</p>
      </div>

      {/* Block 5 */}
      <div className="bg-[#9258BC] text-white p-6 lg:w-64 hover:bg-[#46146C] transition duration-500 ease-in-out h-32 flex items-center justify-center transform hover:scale-105">
        <p className="text-center">Include participants with informed consent</p>
      </div>
    </div>
  );
}
