import { createContext, useState } from "react";
import { AddData } from "./components/AddData";
import { DisplayGraph } from "./components/DisplayGraph";
import { Header } from "./components/Header";
import type { GraphData } from "./utils/type";

type axisLabelContextType={
    xAxisLabel: string,
    yAxisLabel:string,
    setX:React.Dispatch<React.SetStateAction<string>>
    setY:React.Dispatch<React.SetStateAction<string>>
}

export const axisLabelContext=createContext<axisLabelContextType>({
    xAxisLabel:'',
    yAxisLabel:'',
    setX:()=>{},
    setY:()=>{},
})

export default function App() {
    const [graphData,setGraphData]=useState<GraphData[]>([])
    const [xAxisLabel,setX]=useState('');
    const [yAxisLabel,setY]=useState('');

    console.log(xAxisLabel,yAxisLabel);
    
    
    return (
        <div className="h-screen flex flex-col">
            <Header/>
            <main className="flex flex-97 h-full gap-3 mb-4">
                <axisLabelContext.Provider value={{xAxisLabel, yAxisLabel, setX, setY}}>
                    <AddData graphData={graphData} setGraphData={setGraphData}/>
                    <DisplayGraph graphData={graphData}/>
                </axisLabelContext.Provider>
            </main>
        </div>
    );
}
