import { createContext, useContext, useReducer } from 'react'
import { filterReducer, initialState } from '../Reducers/filter-reducer'

const FilterContext = createContext()
const useFilter = () => useContext(FilterContext)

const FilterProvider = ({ children }) => {
    const [filteredState, dispatch] = useReducer(filterReducer, initialState)

    return (
        <FilterContext.Provider value={{ filteredState, dispatch }}>
            {children}
        </FilterContext.Provider>
    )
}

export { FilterProvider, useFilter }