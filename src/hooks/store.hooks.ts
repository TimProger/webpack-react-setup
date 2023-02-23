import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState, AppDispatch} from "@/store";
import {useDispatch} from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();