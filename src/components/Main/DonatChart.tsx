import "react";
interface type {
  number: number;
  name: string;
}
export default function DpnatChart({ number, name }: type) {
  return (
    <div className="place-items-center ">
      <div
        className={`relative w-26 h-26 rounded-full my-4`}
        style={{
          backgroundImage: `conic-gradient(${
            name === "In Progress"
              ? "#0225FF"
              : name === "Not Started"
              ? "#F21E1E"
              : "#05A301"
          } ${number}%, #e5e7eb 0%)`,
        }}
      >
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-[#F5F8FF] rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <span className="font-bold text-xl">{number}%</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p>{name}</p>
        <div
          className={`${
            name === "In Progress"
              ? "bg-[#0225FF]"
              : name === "Not Started"
              ? "bg-[#F21E1E]"
              : "bg-[#05A301]"
          } rounded-full w-2 h-2`}
        ></div>
      </div>
    </div>
  );
}
