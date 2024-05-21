import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import React from 'react';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

interface IDebounceProps {
    searchQuery: string;
    delay: number;
}

export const useDebounced = ({ searchQuery, delay }: IDebounceProps) => {
    const [debouncedValue, setDebouncedValue] = React.useState<string>("");
    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(searchQuery)

        }, delay);
        return () => {
            clearTimeout(handler);
        }

    }, [searchQuery, delay])


    return debouncedValue;

}