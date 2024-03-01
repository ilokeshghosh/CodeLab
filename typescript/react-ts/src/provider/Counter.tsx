import React, { createContext, useContext, useState } from 'react'

interface CounterProviderProps {
    children: React.ReactNode
}

interface CounterContextValue {
    value: number,
    setCounter: (num: number) => void
}
const CounterContext = createContext<CounterContextValue | null>(null)

export const useCounter = () => {
    return useContext(CounterContext)
}

export const CounterProvider: React.FC<CounterProviderProps> = (props) => {
    const [counter, setCounter] = useState<number>(1)
    return (
        <CounterContext.Provider value={{ value: counter, setCounter }}>
            {props.children}
        </CounterContext.Provider>
    )
}


