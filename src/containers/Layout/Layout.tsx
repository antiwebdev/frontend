import React, { FC, useState } from 'react'
import Carousel from "../Carousel/Carousel";
import CircleMenu from '../Circle/CircleMenu';
import Header from '../../component/Header/Header';

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
                description: 'Выход альбома "Thriller" Майкла Джексона'
            },
            {
                id: 2,
                date: '1983',
                description: 'Концерт "Live Aid" для борьбы с голодом в Эфиопии'
            },
            {
                id: 3,
                date: '1984',
                description: 'Выход альбома "Purple Rain" Принса'
            },
            {
                id: 4,
                date: '1985',
                description: 'Группа Queen выступает на стадионе Уэмбли'
            }
        ]
    },
    {
        id: 2,
        name: 'Кино',
        startDate: '1987',
        endDate: '1990',
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
        name: 'Литература',
        startDate: '1992',
        endDate: '1996',
        items: [
            {
                id: 1,
                date: '1992',
                description: 'Роман "Преступление и наказание", Ф.М. Достоевский'
            },
            {
                id: 2,
                date: '1993',
                description: 'Поэма "Унесённые ветром", М. Митчелл'
            },
            {
                id: 3,
                date: '1994',
                description: 'Рассказ "Шум и ярость", У. Фолкнер'
            },
            {
                id: 4,
                date: '1995',
                description: 'Роман "Три товарища", Э.М. Ремарк'
            }
        ],
    },
    {
        id: 4,
        name: 'Наука',
        startDate: '1997',
        endDate: '2001',
        items: [
            {
                id: 1,
                date: '1997',
                description: 'Первый успешный клонированный млекопитающий, овца Долли'
            },
            {
                id: 2,
                date: '1999',
                description: 'Международная космическая станция начинает свою работу'
            },
            {
                id: 3,
                date: '2000',
                description: 'Расшифрована человеческая геномная последовательность'
            },
            {
                id: 4,
                date: '2001',
                description: 'Первый полет частного космического корабля, космический корабль Союз'
            }
        ]
    },
    {
        id: 5,
        name: 'Искусство',
        startDate: '2002',
        endDate: '2006',
        items: [
            {
                id: 1,
                date: '2002',
                description: 'Открытие Музея современного искусства в Нью-Йорке'
            },
            {
                id: 2,
                date: '2003',
                description: 'Выход фильма "Пианист", режиссер Р. Полански'
            },
            {
                id: 3,
                date: '2004',
                description: 'Открытие Лувра в Абу-Даби'
            },
            {
                id: 4,
                date: '2006',
                description: 'Выход фильма "Исчезнувшая" (The Departed), режиссер М. Скорсезе'
            }
        ]
    },
    {
        id: 6,
        name: 'Технологии',
        startDate: '2007',
        endDate: '2011',
        items: [
            {
                id: 1,
                date: '2007',
                description: 'Запуск первого iPhone'
            },
            {
                id: 2,
                date: '2008',
                description: 'Запуск Google Chrome'
            },
            {
                id: 3,
                date: '2010',
                description: 'Выход первого iPad'
            },
            {
                id: 4,
                date: '2011',
                description: 'Запуск социальной сети Instagram'
            }
        ]
    }
]

const Layout: FC  = () => {

    const [activeItem, setActiveItem] = useState<TDateItem>(dateItems[0])

    return(
        <Styled.Container>
            <Header/>
            <CircleMenu dateItems={dateItems} setActiveItem={setActiveItem} activeItem={activeItem}/>
            <Styled.Inner>    
                <Carousel items={activeItem?.items}/>
            </Styled.Inner>
        </Styled.Container>
    )
}

export default Layout;
