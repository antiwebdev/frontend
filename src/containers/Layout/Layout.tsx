import React, { FC, useState } from 'react'
import CircleMenu from "../Circle/CircleMenu";
import Carousel from "../Carousel/Carousel";

import * as Styled from './Layout.styles'

export interface  IItems {
    id: number
    date: string
    description: string
}

export interface TDateItem {
    id: number
    name: string
    startDate: string
    endDate: string
    items: Array<IItems>
}

export const dateItems: Array<TDateItem> = [
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
    },
    {
        id: 3,
        name: 'Кек',
        startDate: '2000',
        endDate: '2001',
        items: [
            {
                id: 1,
                date: '2000',
                description: 'music1'
            }
        ]
    },
    {
        id: 4,
        name: 'Кек',
        startDate: '2000',
        endDate: '2001',
        items: [
            {
                id: 1,
                date: '2000',
                description: 'music1'
            }
        ]
    },
    {
        id: 5,
        name: 'Кек',
        startDate: '2000',
        endDate: '2001',
        items: [
            {
                id: 1,
                date: '2000',
                description: 'music1'
            }
        ]
    },
]

const Layout: FC  = () => {

    const [activeItem, setActiveItem] = useState<TDateItem>(dateItems[0])

    return(
        <Styled.Container>
            <CircleMenu
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />
            <Styled.Inner>
                <Carousel items={activeItem?.items}/>
            </Styled.Inner>
        </Styled.Container>
    )
}

export default Layout
