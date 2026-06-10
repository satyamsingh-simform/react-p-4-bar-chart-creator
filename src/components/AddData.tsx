import { useState } from "react";
import type { GraphData } from "../utils/type";

type AddDataProps = {
  graphData: GraphData[];
  setGraphData: React.Dispatch<React.SetStateAction<GraphData[]>>;
};

export const AddData = ({ graphData, setGraphData }: AddDataProps) => {
  const [label, setLabel] = useState("");
  const [value, setValue] = useState(0);

  // console.log(label,value);
  console.log(graphData);

  function handleAddData() {
    const data = {
      id: crypto.randomUUID(),
      label: label,
      value: value,
    };
    console.log(data);
    setGraphData([data, ...graphData]);

    setLabel("");
    setValue(0);
  }

  return (
    <section className="h-full flex-20 border-r-2 border-gray-300 p-3 ">
      <div className="shadow-md flex flex-col gap-5 p-5">
        <div>
          <label htmlFor="label" className="text-gray-700">
            Add label
          </label>
          <input
            id="label"
            className="w-full bg-gray-200 p-3 rounded-sm border border-gray-200 outline-gray-500"
            type="text"
            placeholder="enter label eg:-react"
            onChange={(e) => setLabel(e.currentTarget.value)}
            value={label}
          />
        </div>

        <div>
          <label htmlFor="label" className="text-gray-700">
            Add value
          </label>
          <input
            className="w-full bg-gray-200 p-3 rounded-sm border border-gray-200 outline-gray-500"
            type="text"
            placeholder="enter value"
            onChange={(e) => setValue(Number(e.currentTarget.value))}
            value={value}
          />
        </div>

        <button
          className="bg-red-400 p-2.5 text-white text-lg rounded-sm"
          onClick={handleAddData}
        >
          submit
        </button>
      </div>
    </section>
  );
};
