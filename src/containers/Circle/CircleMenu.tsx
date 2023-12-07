import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import * as Styled from "./CircleMenu.styles";


interface CircleMenuProps {
    activeButton: number;
    setActiveButton: (buttonId: number) => void;
}

interface MenuItemType {
    position: { x: number; y: number };
    buttonText: string;
    buttonId: number;
}

const CircleMenu: React.FC<CircleMenuProps> = ({ activeButton, setActiveButton }) => {
    const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
    const years = [
        {id: 1, leftYear: 1900, rightYear: 1925},
        {id: 2, leftYear: 1925, rightYear: 1950},
        {id: 3, leftYear: 1950, rightYear: 1975},
        {id: 4, leftYear: 1975, rightYear: 2000},
        {id: 5, leftYear: 2000, rightYear: 2025},
        {id: 6, leftYear: 2025, rightYear: 2050},
    ]

    const items: MenuItemType[] = [
        { buttonText: "Наука", buttonId: 1, position: { x: 0, y: 0 } },
        { buttonText: "Игры", buttonId: 2, position: { x: 0, y: 0 } },
        { buttonText: "История", buttonId: 3, position: { x: 0, y: 0 } },
        { buttonText: "Кино", buttonId: 4, position: { x: 0, y: 0 } },
        { buttonText: "Театры", buttonId: 5, position: { x: 0, y: 0 } },
        { buttonText: "Медицина", buttonId: 6, position: { x: 0, y: 0 } },
    ];

    const filteredArr = years.filter((obj) => obj.id === activeButton);

    useEffect(() => {
        
        const length = items.length;
        const arc = 2 * Math.PI * (1 / length);
        const radius = 50;

        const positionedItems = items.map((item, i) => {
            const angle = i * arc;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            return { ...item, position: { x, y } };
        });

        setMenuItems(positionedItems);
    }, []);

    return (
        <Styled.Circle>
            <Styled.CenterHeight/>
            <Styled.CenterWidth/>
            <Styled.CircularMenu>
                {filteredArr.map((obj) => (
                    <Styled.Years>
                        <b style={{color: "#5D5FEF"}}>{obj.leftYear}</b>
                        <b style={{color: "#EF5DA8"}}>{obj.rightYear}</b>
                    </Styled.Years>
                ))}
                {menuItems.map((item) => (
                    <MenuItem
                        key={item.buttonId}
                        buttonText={item.buttonText}
                        buttonId={item.buttonId}
                        isActive={activeButton === item.buttonId}
                        onClick={() => setActiveButton(item.buttonId)}
                        position={item.position}
                    />
                ))}
            </Styled.CircularMenu>
        </Styled.Circle>
       
    );
};

export default CircleMenu;
