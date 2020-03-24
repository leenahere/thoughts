import React from 'react'

import {
    HeaderContainer,
    HeaderWrapper,
    HeaderTitle
} from './'
import { config } from "../../config"

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderTitle>{config.title}</HeaderTitle>
            </HeaderWrapper>
        </HeaderContainer>
    )
}
