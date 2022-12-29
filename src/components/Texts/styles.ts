import styled from 'styled-components';
import { AppFontSize } from '../../styles/global';

type ContainerProps = {
    fontSize: string,
}

export const variantSizeFont = { 
    textSmall: {
        fontSize: AppFontSize.textSmall
    },
    textMedium: {
        fontSize: AppFontSize.textMedium
    },
    textLarge: {
        fontSize: AppFontSize.textLarge
    },
    headingLarge: {
        fontSize: AppFontSize.headingLarge
    },
    headingMedium: {
        fontSize: AppFontSize.headingMedium
    },
    headingSmall: {
        fontSize: AppFontSize.headingSmall
    }
}


export const Container = styled.button<ContainerProps>`
    font-size: ${props => props.fontSize};
`;

