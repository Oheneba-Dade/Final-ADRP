import { MdOutlineFileDownload } from "react-icons/md";
import { AiOutlineFile } from "react-icons/ai";
import CustomButton from "@/components/CustomButton";

const files = [
  { name: "ABOUT.txt", date: "September 25, 2024", size: "3.58 KB" },
  { name: "METADATA.txt", date: "September 25, 2024", size: "3.58 KB" },
  { name: "LICENSE.txt", date: "September 25, 2024", size: "3.58 KB" },
  { name: "Readme.txt", date: "September 25, 2024", size: "3.58 KB" },
  { name: "Checklist.docx", date: "September 25, 2024", size: "3.58 KB" },
];

const FileTable = () => {
  return (
    <div className="max-w-3xl mx-auto mt-6">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <p className="text-gray-700 max-w-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        </p>
        <CustomButton
            text=" Download Files "
            bgColor = "bg-white"
            textColor = "text-ashesi-red"
            onClick={() => alert("Downloading!")}
            width = "w-auto"
            height = "h-10"
            icon={MdOutlineFileDownload}
            iconPosition="right"
            iconClassName="text-xl cursor-pointer"
            className="text-sm !font-medium border border-ashesi-red px-4 py-2 px-4 hover:bg-ashesi-red hover:text-white"        
        />
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left font-semibold py-2">Filename</th>
              <th className="text-left font-semibold py-2">Last Modified</th>
              <th className="text-left font-semibold py-2">Size</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 flex items-center gap-2">
                  <AiOutlineFile className="text-xl text-gray-500" />
                  {file.name}
                </td>
            
                <td className="text-gray-600">{file.date}</td>
                <td className="text-gray-600">{file.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileTable;
