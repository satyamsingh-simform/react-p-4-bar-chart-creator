import type { GraphData } from "../utils/type"
import { Pencil } from 'lucide-react';

type DisplayDataProps={
    graphData:GraphData[],
    setGraphData: React.Dispatch<React.SetStateAction<GraphData[]>>;
}

export const DisplayData = ({graphData,setGraphData}:DisplayDataProps) => {

    function handleLabelEdit(id:string){
        const label=String(prompt('enter label'));
        if(!label){
            alert('empty label not allowed')
            return
        }
        console.log(id);
        setGraphData(
            graphData.map((obj)=>(
                obj.id===id?
                 {
                    ...obj,
                    label:label,
                 }
                :obj
            ))
        )
    }
    function handleValueEdit(id:string){
        const value=Number(prompt('enter value'));
        if(!value){
            alert('empty value not allowed')
            return
        }
        console.log(id);
        setGraphData(
            graphData.map((obj)=>(
                obj.id===id?
                 {
                    ...obj,
                    value:value,
                 }
                :obj
            ))
        )
    }


  return (
    <div className="flex flex-col gap-5 shadow-md inset-shadow-2xs p-5 h-100 overflow-y-auto">
        <div className="flex justify-between border-b border-gray-300">
            <span>LABEL</span>
            <span>VALUE</span>
        </div>
        {
            graphData.map((obj)=>(
                <div key={obj.id} className="flex justify-between "
                
                
                >
                    <div className="hover:cursor-pointer flex items-center gap-2 text-lg"
                    >{obj.label}
                    <span 
                    onClick={()=>handleLabelEdit(obj.id)}
                    >
                        <Pencil size={14} color="orange"/>
                    </span>
                    </div>
                    <div className="hover:cursor-pointer flex items-center gap-2 text-lg">{obj.value}
                    <span 
                        onClick={()=>handleValueEdit(obj.id)}
                    >
                        <Pencil size={14} color="orange"/>
                    </span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
