import React, {useState, useEffect, useLayoutEffect, useRef} from "react";
import gsap from 'gsap';
import MenuItem from "./MenuItem";
import * as Styled from "./CircleMenu.styles";
import { TDateItem } from "../Layout/Layout";


interface CircleMenuProps {
    dateItems: Array<TDateItem>;
    activeItem: TDateItem;
    setActiveItem: (item: TDateItem) => void;
}

interface MenuItemType {
    position: { x: number; y: number };
    buttonText: string;
    buttonId: number;
    categoryId: number;
    isActive: boolean
}

const getRotationDegrees = (length: number, index: number, currentDegrees: number, activeItemId: number):number => {
    
    if (index > activeItemId) {
        return currentDegrees - (360/length) * (index - activeItemId)
    }
    return currentDegrees + (360/length) * (activeItemId - index)
}


const CircleMenu: React.FC<CircleMenuProps> = ({dateItems, setActiveItem, activeItem }) => {
    const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
    const [rotationDegrees, setRotationDegrees] = useState<number>(0);

    const container = useRef<any>();
    const circle = useRef<any>();
    useLayoutEffect(() => {

        gsap.context(() => {
            gsap.to(circle.current, { rotation: rotationDegrees });

        }, container);

    }, [rotationDegrees]);

    useEffect(() => {

        const length = dateItems.length;
        const arc = (2 * Math.PI) / length;
        const radius = 50;

        const positionedItems = dateItems.map((item, i) => {
            const angle = i * arc - (1.5*Math.PI / length);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            const isActive: boolean = activeItem.id === item.id;


            return { 
                buttonText: item.name, 
                buttonId: item.id, 
                position: { x, y }, 
                categoryId: activeItem.id,
                isActive 
            };
        });

        setMenuItems(positionedItems);
    }, [activeItem]);

    const handleClick = (currentItem: MenuItemType) => {
        setActiveItem(dateItems[currentItem.buttonId-1]);
        const dateItemsLength = dateItems.length
        const selectedItem = dateItems.find((item) => item.id === currentItem.buttonId && activeItem.id !== currentItem.buttonId);
        if (selectedItem) {
            setActiveItem(selectedItem);
            setRotationDegrees(getRotationDegrees(dateItemsLength, currentItem.buttonId, rotationDegrees, activeItem.id))
        }
    }


    return (
        <>
            <Styled.CenterHeight />
            <Styled.CenterWidth />
            {activeItem && (
                <Styled.Years>
                    <b style={{ color: "#5D5FEF" }}>{activeItem.startDate}</b>
                    <b style={{ color: "#EF5DA8" }}>{activeItem.endDate}</b>
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
                                    isActive={item.isActive}
                                    onClick={() => handleClick(item)}
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
