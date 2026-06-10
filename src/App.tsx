import { useState } from "react";
import { AddData } from "./components/AddData";
import { DisplayGraph } from "./components/DisplayGraph";
import { Header } from "./components/Header";
import type { GraphData } from "./utils/type";


export default function App() {
    const [graphData,setGraphData]=useState<GraphData[]>([])

    return (
        <div className="h-screen flex flex-col">
            <Header/>
            <main className="flex flex-97 h-full gap-3">
                <AddData graphData={graphData} setGraphData={setGraphData}/>
                <DisplayGraph graphData={graphData}/>
            </main>
        </div>
    );
}
