import styled from 'styled-components';
import { AppColors } from '../../styles/global';

type ContainerProps = {
    bgColor: string,
    color: string,
    borderColor: string,
    hoverBgColor: string,
    hoverColor: string
}

export const variantToColor = { 
    primary: {
        bgColor: AppColors.primary,
        borderColor: AppColors.primary,
        color: AppColors.dark,
        hover: {
            bgColor: AppColors.primaryHover,
            color: AppColors.primaryHover
        }

    },
    secondary: {
        bgColor: AppColors.secondary,
        borderColor: AppColors.secondary,
        color: AppColors.dark,
        hover: {
            bgColor: AppColors.primaryHover,
            color: AppColors.primaryHover
        }
    },
    outline: {
        bgColor: 'transparent',
        borderColor: AppColors.primary,
        color: AppColors.primary,
        hover: {
            bgColor: AppColors.primary,
            color: AppColors.primary,
        }
    }
}


export const Container = styled.button<ContainerProps>`
    width: 100%;
    max-width: 180px;
    height: 48px;
    background-color: ${props => props.bgColor};
    border: 1px solid ${props => props.borderColor};
    color: ${props => props.color};
    font-size: 16px;
    cursos: pointer;
    border-radius: 4px;

    &:hover{
        background-color: ${props => props.hoverbgColor};
        border: 1x solid ${props => props.hoverbgColor}
        color: ${props => props.hoverColor};
    }
`;

