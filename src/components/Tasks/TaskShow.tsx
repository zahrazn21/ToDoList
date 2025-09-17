import "react";
import BoxHeader from "../boxes/BoxHeader";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useAuth } from "../../hooks/AppContext";
import type { typeRes } from "../../types/TypeRes";
import AddTask from "../../pages/AddTask";
import { LuClipboardList } from "react-icons/lu";

interface props {
  dataShow?: typeRes;
}
export default function TaskShow({ dataShow }: props) {
  // const data = [
  //   { title: "Task Title", description: "Document Submission." },
  //   {
  //     title: "Objective",
  //     description: "To submit required documents for something important",
  //   },
  //   {
  //     title: "Task Description",
  //     description:
  //       "Task Description: Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing.",
  //   },
  //   {
  //     title: "Additional Notes",
  //     description:
  //       "Ensure that the documents are authentic and up-to-date. Maintain confidentiality and security of sensitive information during the submission process. If there are specific guidelines or deadlines for submission, adhere to them diligently.",
  //   },
  //   { title: "Deadline for Submission", description: "End of Day" },
  // ];

  const { isOpen, setIsOpen, id } = useAuth();
  return (
    <div
      dir="ltr"
      className=" px-5 relative py-2 w-[60%] rounded-2xl border-1 h-full border-[#A1A3AB] shadow-xl"
    >
      {dataShow && id !== "" ? (
        <>
          <div className="flex  gap-2 my-3 items-end">
            <div
              className="img w-[200px]  bg-center bg-cover rounded-2xl  h-[200px]"
              style={{
                backgroundImage: `url(${
                  dataShow?.url
                    ? dataShow.url
                    : "/src/assets/images/default4.png"
                })`,
              }}
            ></div>
            <div dir="ltr" className="text gap-2 grid">
              <h2 className="text-2xl font-bold">{dataShow?.title}</h2>
              {dataShow?.status !== "Coplected" && (
                <div>
                  <span>Priority:</span>
                  <span className="text-[#F21E1E]">{dataShow?.priority}</span>
                </div>
              )}

              <div>
                <span>Status:</span>
                <span className="text-[#F21E1E]">Extreme</span>
              </div>
              <div className="text-[#A1A3AB]">
                <span>Create on : </span>
                <span className="">{dataShow?.date}</span>
              </div>
            </div>
          </div>
          <div
            className="relative  h-[55%] overflow-y-auto
      [&::-webkit-scrollbar]:w-0 
      "
          >
            <p className="text-[#747474]">
              <span className=" font-bold text-[18px]">Task Title:</span>
              <span className=" break-all">{dataShow?.description}</span>
            </p>
            <p className="text-[#747474]">
              <span className=" font-bold text-[18px]">Task Description:</span>
              <span className="w-[400px] break-all">
                {dataShow?.description}
              </span>
            </p>
          </div>
          <div
            dir="rtl"
            className="flex   items-center gap-2 bottom-0 riht-35  "
          >
            <div className="" onClick={() => setIsOpen(3)}>
              <BoxHeader>
                <MdEditSquare></MdEditSquare>
              </BoxHeader>
            </div>

            <BoxHeader>
              <MdDelete></MdDelete>
            </BoxHeader>
          </div>

          {isOpen == 3 && (
            <div className="fixed place-content-center place-items-center w-screen h-screen z-30 bg-[#2222229e] left-0 top-0 ">
              <AddTask></AddTask>
            </div>
          )}
        </>
      ) : (
        <div className="place-items-center gap-5 grid place-content-center text-center h-full">
          <div className="text-[80px] text-[#b0aaaa]">
            <LuClipboardList></LuClipboardList>
          </div>
          select a task for show
        </div>
      )}
    </div>
  );
}
