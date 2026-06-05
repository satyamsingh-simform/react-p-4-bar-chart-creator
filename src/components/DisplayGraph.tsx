import type { GraphData } from "../utils/type";

type DisplayGraphProps = {
  graphData: GraphData[];
};

export const DisplayGraph = ({ graphData }: DisplayGraphProps) => {

    const maxVal=Math.max(...graphData.map((obj)=>obj.value))
    console.log(maxVal);

    const gap = Math.ceil(maxVal/10)
    const intervals = Array.from({length:11},(_,index)=> index === 10 ? maxVal   :  gap * index).reverse()
    
  return (
    <div className="left-right flex gap-10 flex-80 p-5 pb-1 border-l-2 border-b-2 relative">
      <div  className="flex flex-col justify-between"
      >
        { maxVal === Number.NEGATIVE_INFINITY ? null : intervals.map((interval)=>{
        return <span>{interval}</span>
      })}
      </div>
      {graphData.map((data) => (
        <div
          key={data.id}
          className=" flex flex-col justify-end items-center p-3 pb-0"
        >
          <span
            style={{ height: `${data.value/maxVal * 100}%` }}
            className="p-3 bg-amber-200 w-full min-w-15 flex justify-center relative hover:bg-pink-300 hover:cursor-pointer"
          >
            <span className="absolute -top-7">{data.value}</span>
          </span>
          <span className="bg-amber-900 text-white min-w-15 flex justify-center items-center absolute -bottom-7">
            {data.label}
          </span>
        </div>
      ))}
    </div>
  );
};

//height = (currentValue / maxValue) * containerHeight