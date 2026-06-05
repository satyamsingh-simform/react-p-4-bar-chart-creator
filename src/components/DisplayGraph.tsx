import type { GraphData } from "../utils/type";

type DisplayGraphProps = {
  graphData: GraphData[];
};

export const DisplayGraph = ({ graphData }: DisplayGraphProps) => {

    const maxVal=Math.max(...graphData.map((obj)=>obj.value))
    console.log(maxVal);
    
  return (
    <div className="flex gap-10 flex-80 p-5 border">
      {graphData.map((data) => (
        <div
          key={data.id}
          className=" flex flex-col justify-end items-center p-3"
        >
          <span
            style={{ height: `${data.value/maxVal * 800}px` }}
            className="p-3 bg-amber-200 w-full min-w-15 flex justify-center"
          >
            {data.value}
          </span>
          <span className="bg-amber-900 p-3 w-full min-w-15 flex justify-center">
            {data.label}
          </span>
        </div>
      ))}
    </div>
  );
};

//height = (currentValue / maxValue) * containerHeight