import styled from "styled-components";
import { JSX, ReactElement, ReactNode } from "react";
import { ResponsiveContainer } from "recharts";

interface ChartContainerProps {
    width: number | string,
    height: number,
    color?: string,
    chartWidth?: number,
    chartHeight?: number,
    position?: "static" | "relative" | "fixed" | "absolute" | "sticky",
    children: ReactElement,
    subElement?: ReactElement | JSX.Element,
    title?: ReactNode | string,
    titlePosition?: "static" | "relative" | "fixed" | "absolute" | "sticky",
    titlePos?: {
        left?: number,
        right?: number,
        top?: number,
        bottom?: number,
    }
    titlePadding?: {
        left?: number,
        right?: number,
        top?: number,
        bottom?: number,
    }
    padding?: {
        left?: number,
        right?: number,
        top?: number,
        bottom?: number,
    }
}

const ChartDiv = styled.div<{
    $width: string | number,
    $height: number,
    $color?: string,
    $position?: "static" | "relative" | "fixed" | "absolute" | "sticky",
    $padding?: {
        top?: string | number,
        right?: string | number,
        bottom?: string | number,
        left?: string | number,
    },

}>`
    width: ${({$width}) => $width && (typeof $width === "string") ? `${$width}` : `${$width}px`};
    height: ${({$height}) => $height ? `${$height}px` : "100%"};
    background: ${({$color}) => $color ? $color : "rgb(35 39 47)"};
    position: ${({$position}) => $position && $position};

    padding: ${({$padding}) => $padding && `
            ${$padding.top && $padding.top != 0 ? $padding.top + "px" : 0} 
            ${$padding.right && $padding.right != 0 ? $padding.right + "px" : 0} 
            ${$padding.bottom && $padding.bottom != 0 ? $padding.bottom + "px" : 0} 
            ${$padding.left && $padding.left != 0 ? $padding.left + "px" : 0}`
    };
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.02);
    transition: all 400ms cubic-bezier(.47, 1.64, .41, .8);

    @media (max-width: 1024px) {
        height: ${({$height}) => $height ? `${Math.floor($height / 1.3)}px` : "100%"};
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    }
`;


const formatPosValue = (data: number | string) => {
    if (isNaN(data as number)) {
        return `${data}%`;
    } else {
        return `${data}px`;
    }
};

const TitleWrapper = styled.div<{
    $height?: number | null;
    $position?: string;
    $titlePos?: {
        top?: number | string,
        right?: number | string,
        bottom?: number | string,
        left?: number | string,
    };
    $padding?: {
        top?: number | string,
        right?: number | string,
        bottom?: number | string,
        left?: number | string,
    };
}>`
    position: ${props => props.$position && props.$position};
    height: ${(props) => props.$height && `${props.$height}%`};
    top: ${(props) => props.$titlePos?.top && formatPosValue(props.$titlePos?.top)};
    right: ${(props) => props.$titlePos?.right && formatPosValue(props.$titlePos?.right)};
    bottom: ${(props) => props.$titlePos?.bottom && formatPosValue(props.$titlePos?.bottom)};
    left: ${(props) => props.$titlePos?.left && formatPosValue(props.$titlePos?.left)};
    min-height: ${(props) => props.$height && `${props.$height}%`};
    padding: ${(props) =>
            props.$padding &&
            `
            ${props.$padding.top && props.$padding.top != 0 ? props.$padding.top + "px" : 0} 
            ${props.$padding.right && props.$padding.right != 0 ? props.$padding.right + "px" : 0} 
            ${props.$padding.bottom && props.$padding.bottom != 0 ? props.$padding.bottom + "px" : 0} 
            ${props.$padding.left && props.$padding.left != 0 ? props.$padding.left + "px" : 0}
           `
    };
`;

const ChartContainer = ({
                            width,
                            height,
                            color,
                            position,
                            padding,
                            chartWidth,
                            chartHeight,
                            title,
                            titlePosition,
                            titlePos,
                            titlePadding,
                            children,
                            subElement,
                        }: ChartContainerProps) => {

    const _chartWidth = `${chartWidth ? chartWidth : 100}%`;
    const _chartHeight = `${chartHeight ? chartHeight : 100}%`;
    const titleHeight = chartHeight ? 100 - chartHeight : null;
    return (
        <ChartDiv $width={width}
                  $height={height}
                  $color={color}
                  $position={position}
                  $padding={padding}>
            {title &&
                <TitleWrapper $height={titleHeight} $padding={titlePadding} $position={titlePosition}
                              $titlePos={titlePos}>
                    {title}
                </TitleWrapper>}
            {subElement}
            <ResponsiveContainer width={_chartWidth} height={_chartHeight}>
                {children}
            </ResponsiveContainer>
        </ChartDiv>
    );
};

export default ChartContainer;
