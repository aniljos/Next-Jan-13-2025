'use client'

import { store } from "@/redux/store";
import { Provider } from "react-redux";

type ReduxProviderProps = {
    children: React.ReactNode
}

export default function ReduxProvider(props: ReduxProviderProps){

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}