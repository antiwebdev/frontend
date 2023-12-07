import React from "react";
import * as Styled from "./MenuItem.styles";

interface MenuItemProps {
    buttonText: string;
    buttonId: number;
    isActive: boolean;
    onClick: () => void;
    position: { x: number; y: number };
}

const MenuItem: React.FC<MenuItemProps> = ({ buttonText, buttonId, isActive, onClick, position }) => {
    return (
        <Styled.MenuItemContainer 
            isActive={isActive}
            style={{ left: `calc(50% + ${position.x}%)`, top: `calc(50% + ${position.y}%)` }}
            onClick={onClick}
        >
            <Styled.MenuItemIcon isActive={isActive}>
                {buttonId}
            </Styled.MenuItemIcon>
            <Styled.MenuItemText isActive={isActive}>{buttonText}</Styled.MenuItemText>
        </Styled.MenuItemContainer>
    );
};

export default MenuItem;
