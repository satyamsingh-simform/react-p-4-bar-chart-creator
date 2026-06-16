import type { GraphData } from "../utils/type";
import { useAxislabelContext } from "../customhook/useAxislabelContext";

type DisplayGraphProps = {
  graphData: GraphData[];
};

export const DisplayGraph = ({ graphData }: DisplayGraphProps) => {

  const {xAxisLabel,yAxisLabel}=useAxislabelContext();

  const maxVal = graphData.reduce((acc,obj)=> Math.max(acc,obj.value),0);
  const gap = (maxVal / 10);
  const intervals = Array.from({ length: 11 }, (_, index) =>
    index === 10 ? maxVal : (gap * index).toFixed(2),
  ).reverse();
  
  return (
    <div className="left-right flex gap-10 flex-80 p-5 pb-1 border-l-2 border-b-2 relative ">
      <div className="absolute -left-10 top-100 rotate-270 h-10 w-10">{yAxisLabel}</div>
      <div className="absolute left-150 -bottom-16 ">{xAxisLabel}</div>
      <div className="flex flex-col justify-between">
        {maxVal === Number.NEGATIVE_INFINITY
          ? null
          : intervals.map((interval,index) => {
              return <span key={index}>{interval}</span>;
            })}
      </div>
      {graphData.map((data) => (
        <div
          key={data.id}
          className=" flex flex-col justify-end items-center p-3 pb-0"
        >
          <span
            title={`${data.label}-${data.value}`}
            style={{ height: `${(data.value/ maxVal)* 100 }%` }}
            className="bg-amber-200 w-full min-w-15 flex justify-center relative hover:bg-pink-300 hover:cursor-pointer"
          >
            <span className="absolute -top-7">{data.value}</span>
          </span>
          <span className=" text-black min-w-15 flex justify-center items-center absolute -bottom-7">
            {data.label}
          </span>
        </div>
      ))}
    </div>
  );
};
