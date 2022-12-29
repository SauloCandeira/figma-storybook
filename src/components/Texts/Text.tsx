import { Container, variantSizeFont } from "./styles";

export type TextProps = {
    children: string;
    // type: 'regular' | 'bold';
    size: 'textSmall' | 'textMedium' | 'textLarge' | 'headingSmall' | 'headingMedium' | 'headingLarge'
}

export function Text({ children, size}: TextProps) {

    const { fontSize } = variantSizeFont[size];

    return (
        <Container
            fontSize={fontSize}  
        >
            {children}
        </Container>
    )
}

export default Text;