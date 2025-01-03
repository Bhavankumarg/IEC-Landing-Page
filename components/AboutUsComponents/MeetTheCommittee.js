import Image from "next/image";
import { Committe } from "@/utils/data";

export default function CommitteeCard() {
  return (
    <>
      <div>
        <h2 className="text-center iec-title iec-title-color font-bold  p-1 relative">
          Meet The Committee
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-8 justify-items-center container mx-auto">
        {Committe.map((member, index) => (
          <div key={index} className="group overflow-hidden w-64">
            <div className="group">
              <Image
                width={300}
                height={200} 
                className="border w-full mt-4 h-72 object-cover rounded-3xl transition duration-500 ease-in-out flex items-center justify-center transform group-hover:scale-110 "
                src={member.image}
                alt={member.name}
              />
            </div>

            <div className="p-4 text-start">
              <h3 className="text-lg font-semibold text-[#191D42]">
                {member.name}
              </h3>
              <p className="text-sm text-[#06180C]">{member.designation}</p>

              <div className="flex justify-start mt-4 space-x-4">
                <a
                  target="_blank"
                  href={member.linkedin}
                  className=" text-blue-600"
                >
                  <Image
                    width={400}
                    height={200}
                    src="/in.svg"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>

                {/* <a href="#" className=" text-gray-500">
                <Image
                  width={300}
                  height={200}
                  src="/x.svg"
                  alt="Icon X"
                  className="w-6 h-6"
                />
              </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
