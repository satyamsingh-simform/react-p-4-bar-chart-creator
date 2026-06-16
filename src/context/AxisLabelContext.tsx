import { createContext, useState, type ReactNode } from "react"

type AxislabelContext={
    xAxisLabel:string,
    yAxisLabel:string,
    setX:(val:string)=>void,
    setY:(val:string)=>void,
}

export const AxislabelContext=createContext<AxislabelContext|null>(null);

type AxislabelProviderProps={
    children:ReactNode,
}

export function AxislabelProvider({children}:AxislabelProviderProps){
    const [xAxisLabel,setX]=useState('')
    const [yAxisLabel,setY]=useState('')

    return(
        <AxislabelContext.Provider
            value={{
                xAxisLabel,yAxisLabel,setX,setY
            }}
        >
            {children}
        </AxislabelContext.Provider>
    )
}