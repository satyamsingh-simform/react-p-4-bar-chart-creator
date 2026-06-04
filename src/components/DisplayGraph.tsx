import type { GraphData } from "../utils/type"

type DisplayGraphProps={
    graphData:GraphData[],
}

export const DisplayGraph=({graphData}:DisplayGraphProps)=>{
    return (
        <article className="flex gap-10 flex-80 p-5 border">
            {
                graphData.map((data)=>(
                    <div key={data.id} className=" flex flex-col justify-end items-center p-3">
                        <span style={{height:`${data.value*10}px`}} className="p-3 bg-amber-200 w-full min-w-15 flex justify-center" >{data.value}</span>
                        <span className="bg-amber-900 p-3 w-full min-w-15 flex justify-center">{data.label}</span>
                    </div>
                ))
            }
        </article>
    )
}
