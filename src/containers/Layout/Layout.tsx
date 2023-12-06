import React, { FC, useState } from 'react'
import Carousel from "../Carousel/Carousel";

import * as Styled from './Layout.styles'

export interface  IItems {
    id: number
    date: string
    description: string
}

interface TDateItem {
    id: number
    name: string
    startDate: string
    endDate: string
    items: Array<IItems>
}

const dateItems: Array<TDateItem> = [
    {
        id: 1,
        name: 'Музыка',
        startDate: '1981',
        endDate: '1986',
        items: [
            {
                id: 1,
                date: '1982',
                description: 'music1'
            }
        ]
    },
    {
        id: 2,
        name: 'Кино',
        startDate: '1987',
        endDate: '1991',
        items: [
            {
                id: 1,
                date: '1987',
                description: 'Хищник/Predator, США'
            },
            {
                id: 2,
                date: '1988',
                description: 'Кто подставил кролика Роджера/Who Framed Roger Rabbit, США'
            },
            {
                id: 3,
                date: '1989',
                description: 'Назад в будущее 2/Back to future 2, США'
            },
            {
                id: 4,
                date: '1990',
                description: 'Крепкий орешек/Die hard, США'
            }
        ]
    }
]

const Layout: FC  = () => {

    const [state, setState] = useState<TDateItem>(dateItems[1])

    return(
        <Styled.Container>
            <Styled.Inner>
                <Carousel items={state?.items}/>
            </Styled.Inner>
        </Styled.Container>
    )
}

export default Layout
