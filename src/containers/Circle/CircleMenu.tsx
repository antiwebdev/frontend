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


import * as Styled from "./CircleMenu.styles";


interface CircleMenuProps {
    activeItem: TDateItem;
    setActiveItem: Dispatch<SetStateAction<TDateItem>>;
    dateItems: Array<TDateItem>
}

interface MenuItemType {
    position: { x: number; y: number };
    buttonText: string;
    buttonId: number;
    categoryId: number;
    counterRotateAngle: number;
}

const getRotationDegrees = (length: number, activeIndex: number): number => {
    // Вычисляем угол так, чтобы активный элемент был вверху
    return -360 * activeIndex / length;
}

const CircleMenu: React.FC<CircleMenuProps> = ({
    activeItem,
    setActiveItem,
    dateItems
}) => {
    const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
    const [rotationDegrees, setRotationDegrees] = useState<number>(0)

    const container = useRef<any>();
    const circle = useRef<any>();
    const dateItemsLength = dateItems.length;

    useLayoutEffect(() => {

        gsap.context(() => {
            gsap.to(circle.current, { rotation: rotationDegrees });
            console.log("Rotation degrees: ", rotationDegrees);
        }, container);

    }, [rotationDegrees, activeItem]);

    const currentMenuItem = dateItems.find((obj) => obj.id === activeItem.id);

    useEffect(() => {
        if (!currentMenuItem) return;

        const length = dateItems.length;
        const arc = (2 * Math.PI) / length;
        const radius = 50;

        const positionedItems = dateItems.map((item, i) => {
            const angle = i * arc ;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            const counterRotateAngle = -rotationDegrees;
            return { buttonText: item.name, buttonId: item.id, position: { x, y }, counterRotateAngle, categoryId: currentMenuItem.id };
        });


        console.log("Active item updated in CircleMenu", activeItem);

        const newDegrees = getRotationDegrees(dateItemsLength, activeItem.id);

        setRotationDegrees(newDegrees);
        setMenuItems(positionedItems);
    }, [activeItem, dateItems]);

    const handleClick = (itemId: number) => {
        const selectedItem = dateItems.find((item) => item.id === itemId && activeItem.id !== itemId);
        if (selectedItem) {
            setActiveItem(selectedItem);
            setRotationDegrees(getRotationDegrees(dateItemsLength, selectedItem.id))
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
                            counterRotateAngle={-rotationDegrees}
                        />
                    ))}
                </Styled.CircularMenu>
            </Styled.Circle>
        </div>
        </>
    );
};

export default CircleMenu;
