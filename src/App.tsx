import { AddData } from "./components/AddData";
import { DisplayGraph } from "./components/DisplayGraph";
import { Header } from "./components/Header";

export default function App() {

    return (
        <div className="h-screen flex flex-col">
            <Header/>
            <main className="flex flex-97 h-full gap-3">
                <AddData/>
                <DisplayGraph/>
            </main>
        </div>
    );
}
