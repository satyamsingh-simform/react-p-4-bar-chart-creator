
export const AddData=()=>{
    return (
        <section className="h-full flex-20 border-r-2 border-gray-300 p-3 ">
            <div className="shadow-md flex flex-col gap-5 p-5">
                <div>
                    <label htmlFor="label" className="text-gray-700">Add label</label>
                    <input id="label" className="w-full bg-gray-200 p-3 rounded-sm border border-gray-200 outline-gray-500"
                        type="text" placeholder="enter label eg:-react"
                    />
                </div>
                
                <div>
                    <label htmlFor="label" className="text-gray-700">Add value</label>
                    <input className="w-full bg-gray-200 p-3 rounded-sm border border-gray-200 outline-gray-500"
                        type="text" placeholder="enter value"
                    />
                </div>
                
                <button className="bg-red-400 p-2.5 text-white text-lg rounded-sm">submit</button>
            </div>
        </section>
    )
}
