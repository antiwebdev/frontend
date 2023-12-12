import React, {Dispatch, SetStateAction} from "react";

import * as Styled from "./Navigation.styles";

import { TDateItem } from "../../containers/Layout/Layout";


interface NavigationProps {
    activeItem: TDateItem;
    setActiveItem: Dispatch<SetStateAction<TDateItem>>;
    dateItems: Array<TDateItem>
}

const Navigation: React.FC<NavigationProps> = ({
    activeItem,
    setActiveItem,
    dateItems
}) => {


    const dateItemsLength = dateItems.length;

    const goBack = () => {
        const newIndex = activeItem.id === 1 ? dateItems.length-1 : activeItem.id - 2;
        setActiveItem(dateItems[newIndex]);
    };

    const goForward = () => {
        const newIndex = activeItem.id === dateItems.length ? 0 : activeItem.id;
        setActiveItem(dateItems[newIndex]);
    };

    return (
        <>
            <Styled.NavigationItemContainer>
                <p>0{activeItem.id}/0{dateItemsLength}</p>
                <button onClick={goBack}> &lt; </button>
                <button onClick={goForward}> &gt; </button>
            </Styled.NavigationItemContainer>
        </>
    );
}


export default Navigation;