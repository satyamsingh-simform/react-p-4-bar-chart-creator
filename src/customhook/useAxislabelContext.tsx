import { useContext } from "react"
import { AxislabelContext } from "../context/AxisLabelContext"

export const useAxislabelContext = () => {
    const context=useContext(AxislabelContext);
    if(!context) throw new Error('useAxislabelContext inside AxislabelProvider')
    return context;
}
