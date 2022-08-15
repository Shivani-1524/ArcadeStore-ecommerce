import { createContext, useContext, useReducer } from 'react'
import { filterReducer, initialState, Filter, Action } from '../Reducers/FilterReducer'

type ProviderProps = {
    children: JSX.Element
}

interface ContextProps {
    filteredState: Filter;
    dispatch: (a:Action)=>void;
}

const defaultValue = {
    filteredState: initialState,
    dispatch: ()=> console.error("attempting to use Filter Context outside of a valid provider"),
}


const FilterContext = createContext<ContextProps>(defaultValue);
const useFilter = () => useContext(FilterContext)

const FilterProvider = ({ children }:ProviderProps) => {
    const [filteredState, dispatch] = useReducer(filterReducer, initialState)

    return (
        <FilterContext.Provider value={{ filteredState, dispatch }}>
            {children}
        </FilterContext.Provider>
    )
}

export { FilterProvider, useFilter }