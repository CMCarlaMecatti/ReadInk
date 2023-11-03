'use client'

import { NextUIProvider } from '@nextui-org/react'
import { store } from '../redux/store'

/* Core */
import { Provider } from 'react-redux'


export function Providers ({ children }: { children: React.ReactNode }): React.JSX.Element {
    return (
        <Provider store={store}>
           
                <NextUIProvider>
                    {children}
                </NextUIProvider>
            
        </Provider>
    )
}