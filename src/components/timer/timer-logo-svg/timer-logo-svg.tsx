import {FC} from 'react';
import {useScreenSize} from "@/hooks/use-screen-size";

export const TimerLogoSvg: FC<TimerLogoSvgProps> = ({text}) => {
    const {widthScreen} = useScreenSize();

    const width = widthScreen > 1024 ? 132 : 64
    const height = widthScreen > 1024 ? 54 : 40

    return (
        <svg width={width} height={height} viewBox="0 0 132 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                id="Vector"
                d="M0 54C6.67 42.56 14.41 41.55 29.09 41.55C43.77 41.55 61.01 41.18 84.87 41.55C110.55 41.95 130.38 28.74 132 0C125.32 11.43 116.64 13.51 101.96 13.51C87.28 13.51 78.45 13.88 54.6 13.51C28.91 13.11 8.88 25.99 0 54Z"
                fill="#DF2224"
                fillOpacity="1"
                fillRule="nonzero"
            />
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#FFFFFF"
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="400"
                letterSpacing="0"
            >
                {text}
            </text>
        </svg>
    );
};

type TimerLogoSvgProps = {
    text: string;
}