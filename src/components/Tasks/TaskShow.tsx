import "react";
import BoxHeader from "../Main/BoxHeader";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function TaskShow() {
  const data = [
    { title: "Task Title", description: "Document Submission." },
    {
      title: "Objective",
      description: "To submit required documents for something important",
    },
    {
      title: "Task Description",
      description:
        "Task Description: Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing.",
    },
    {
      title: "Additional Notes",
      description:
        "Ensure that the documents are authentic and up-to-date. Maintain confidentiality and security of sensitive information during the submission process. If there are specific guidelines or deadlines for submission, adhere to them diligently.",
    },
    { title: "Deadline for Submission", description: "End of Day" },
  ];
  return (
    <div>
      <div className="flex">
        <div className="img"></div>
        <div className="text">
          <h2>Task Name</h2>
          <p>
            <span>Priority:</span>
            <span className="text-[#F21E1E]">Extreme</span>
          </p>
          <p>
            <span>Status:</span>
            <span className="text-[#F21E1E]">Extreme</span>
          </p>
          <p className="text-[#A1A3AB]">
            <span>Create on:</span>
            <span className="">20/06/2023</span>
          </p>
        </div>
      </div>
      <div>
        {data.map((res) => (
          <p className="text-[#747474]">
            <span className=" font-bold text-[18px]">{res.title}:</span>{res.description}
          </p>
        ))}
      </div>
      <div dir="rtl" className="flex items-center gap-2 bottom-0  relative">
       <BoxHeader >
        <MdEditSquare></MdEditSquare>
       </BoxHeader>
        <BoxHeader >
        <MdDelete></MdDelete>
       </BoxHeader>
      </div>
    </div>
  );
}
