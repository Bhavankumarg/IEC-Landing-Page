import Image from "next/image";
import { Committe } from "@/utils/data";

export default function CommitteeCard() {
  return (
   <>
   <div>
    <h2 className="text-center iec-title iec-title-color font-bold py-7 p-1">Meet The Committee</h2>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-8 justify-items-center container mx-auto">
      {Committe.map((member, index) => (
        <div key={index} className="overflow-hidden w-64">
          <Image
            width={300}
            height={200}
            className="w-full h-72 object-cover rounded-3xl"
            src={member.image}
            alt={member.name}
          />

          <div className="p-4 text-start">
            <h3 className="text-lg font-semibold text-[#191D42]">
              {member.name}
            </h3>
            <p className="text-sm text-[#06180C]">{member.designation}</p>

            <div className="flex justify-start mt-4 space-x-4">
              <a href={member.linkedin} className=" text-blue-600">
                <Image
                  width={300}
                  height={200}
                  src="/in.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>

              <a href="#" className=" text-gray-500">
                <Image
                  width={300}
                  height={200}
                  src="/x.svg"
                  alt="Icon X"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
   </>
  );
}
