import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Redux recommend using the React-Redux hooks API as the default approach in your React components.

// Use throughout your app instead of plain `useDispatch` and `useSelector`.
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
