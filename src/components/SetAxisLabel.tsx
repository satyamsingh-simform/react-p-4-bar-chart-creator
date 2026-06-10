import { useContext } from "react";
import { axisLabelContext } from "../App";

export const SetAxisLabel = () => {

    const {xAxisLabel,yAxisLabel,setX,setY}=useContext(axisLabelContext)

  return(
    <div className="axis-label shadow-md flex gap-5 p-5 inset-shadow-2xs">
        <div>
          <label htmlFor="label" className="text-gray-700">
            X-Axis Label
          </label>
          <input
            id="label"
            className="w-full bg-gray-200 p-2 rounded-sm border border-gray-200 outline-gray-500 text-sm"
            type="text"
            placeholder="eg:-months"
            value={xAxisLabel}
            onChange={(e)=>setX(e.currentTarget.value)}
          />
        </div>

        <div>
          <label htmlFor="label" className="text-gray-700">
            Y-Axis Label--
          </label>
          <input
            className="w-full bg-gray-200 p-2 rounded-sm border border-gray-200 outline-gray-500 text-sm"
            type="text"
            placeholder="eg:-visitor"
            value={yAxisLabel}
            onChange={(e)=>setY(e.currentTarget.value)}
          />
        </div>
      </div>
  )
};
