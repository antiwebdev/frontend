import React, {
    Dispatch,
    SetStateAction,
    useState,
    useEffect,
    useLayoutEffect,
    useRef
}from "react";

import gsap from 'gsap';

import MenuItem from "./MenuItem";
import { TDateItem } from "../Layout/Layout";
import { dateItems } from "../Layout/Layout";

import * as Styled from "./CircleMenu.styles";


interface CircleMenuProps {
    activeItem: TDateItem;
    setActiveItem: Dispatch<SetStateAction<TDateItem>>;
    // dateItems: Array<TDateItem>
}

interface MenuItemType {
    position: { x: number; y: number };
    buttonText: string;
    buttonId: number;
    categoryId: number;
}

const getRotationDegrees = (length: number, index: number, currentDegrees: number, activeItemId: number):number => {
    if (index > activeItemId) {
        return currentDegrees - (360/length) * (index - activeItemId)
    }
    return currentDegrees + (360/length) * (activeItemId - index)


    // const value = (360/length) * (length - index)
    // if (value === 360 && currentDegrees < 180) {
    //     return 0
    // }
    // console.log('1', value, currentDegrees)
    // // if (value > 180 || currentDegrees < 0) {
    // //     console.log('2', value - 360)
    // //     return value - 360
    // // }
    // console.log('3', value)
    // return value
}

const CircleMenu: React.FC<CircleMenuProps> = ({
    activeItem,
    setActiveItem,
    // dateItems
}) => {
    const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
    const [rotationDegrees, setRotationDegrees] = useState<number>(0)

    const container = useRef<any>();
    const circle = useRef<any>();

    useLayoutEffect(() => {

        gsap.context(() => {
            gsap.to(circle.current, { rotation: rotationDegrees });

        }, container);

    }, [rotationDegrees]);

    const currentMenuItem = dateItems.find((obj) => obj.id === activeItem.id);

    useEffect(() => {
        if (!currentMenuItem) return;

        const length = dateItems.length;
        const arc = (2 * Math.PI) / length;
        const radius = 50;

        const positionedItems = dateItems.map((item, i) => {
            const angle = i * arc - (Math.PI / length);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            return { buttonText: item.name, buttonId: item.id, position: { x, y }, categoryId: currentMenuItem.id };
        });

        setMenuItems(positionedItems);
    }, [currentMenuItem, activeItem]);

    const handleClick = (itemId: number) => {
        const dateItemsLength = dateItems.length
        // const dateItemIndex = dateItems.findIndex((item) => item.id === itemId)
        const selectedItem = dateItems.find((item) => item.id === itemId && activeItem.id !== itemId);
        if (selectedItem) {
            setActiveItem(selectedItem);
            setRotationDegrees(getRotationDegrees(dateItemsLength, itemId, rotationDegrees, activeItem.id))
        }
    };

    return (
        <>
        <Styled.CenterHeight />
        <Styled.CenterWidth />
        {currentMenuItem && (
            <Styled.Years>
                <b style={{ color: "#5D5FEF" }}>{currentMenuItem.startDate}</b>
                <b style={{ color: "#EF5DA8" }}>{currentMenuItem.endDate}</b>
            </Styled.Years>
        )}
        <div ref={container}>
            <Styled.Circle ref={circle}>
                <Styled.CircularMenu>
                    {menuItems.map((item) => (
                        <MenuItem
                            key={item.buttonId}
                            buttonText={item.buttonText}
                            buttonId={item.buttonId}
                            isActive={currentMenuItem?.id === item.buttonId}
                            onClick={() => handleClick(item.buttonId)}
                            position={item.position}
                        />
                    ))}
                </Styled.CircularMenu>
            </Styled.Circle>
        </div>
        </>
    );
};

export default CircleMenu;
