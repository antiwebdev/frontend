import React, {Dispatch, SetStateAction,useState, useEffect}from "react";
import MenuItem from "./MenuItem";
import * as Styled from "./CircleMenu.styles";
import { TDateItem } from "../Layout/Layout";
import {dateItems} from "../Layout/Layout";


interface CircleMenuProps {
    activeButton: number;
    setActiveButton: (buttonId: number) => void;
    setState: Dispatch<SetStateAction<TDateItem>>;
}

interface MenuItemType {
    position: { x: number; y: number };
    buttonText: string;
    buttonId: number;
    categoryId: number;
}

const CircleMenu: React.FC<CircleMenuProps> = ({ setState, activeButton, setActiveButton }) => {
    const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);

    const currentMenuItem = dateItems.find((obj) => obj.id === activeButton);

    useEffect(() => {
        if (!currentMenuItem) return;

        const length = dateItems.length;
        const arc = (2 * Math.PI) / length;
        const radius = 50;

        const positionedItems = dateItems.map((item, i) => {
            const angle = i * arc;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            return { buttonText: item.name, buttonId: item.id, position: { x, y }, categoryId: currentMenuItem.id };
        });

        setMenuItems(positionedItems);
    }, [currentMenuItem, activeButton]);

    const handleClick = (itemId: number) => {
        setActiveButton(itemId);
        const selectedItem = dateItems.find((item) => item.id === itemId);
        if (selectedItem) {
            setState(selectedItem);
        }
    };

    return (
        <Styled.Circle>
            <Styled.CenterHeight />
            <Styled.CenterWidth />
            <Styled.CircularMenu>
                {currentMenuItem && (
                    <Styled.Years>
                        <b style={{ color: "#5D5FEF" }}>{currentMenuItem.startDate}</b>
                        <b style={{ color: "#EF5DA8" }}>{currentMenuItem.endDate}</b>
                    </Styled.Years>
                )}
                {menuItems.map((item) => (
                    <MenuItem
                        key={item.buttonId}
                        buttonText={item.buttonText}
                        buttonId={item.buttonId}
                        isActive={activeButton === item.buttonId}
                        onClick={() => handleClick(item.buttonId)}
                        position={item.position}
                    />
                ))}
            </Styled.CircularMenu>
        </Styled.Circle>
    );
};

export default CircleMenu;
