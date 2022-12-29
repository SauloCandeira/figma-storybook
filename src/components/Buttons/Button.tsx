import { Container, variantToColor } from "./styles";


export type ButtonProps = {
    children: string;
    variant: 'primary' | 'secondary' | 'outline';
}

export function Button({ children, variant }: ButtonProps) {

    const {bgColor, borderColor,color, hover} = variantToColor[variant];
    return (
        // <button className="py-3 px-2 bg-orange-50 rounded font-semibold text-white text-sm w-full transition-colors">
        //     {children}
        // </button>

        <Container
            bgColor={bgColor}
            color={color}
            borderColor={borderColor}
            hoverBgColor={hover.bgColor}
            hoverColor={hover.color}
        >
            {children}
        </Container>


    )
}


export default Button;