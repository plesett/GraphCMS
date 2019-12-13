import React, { CSSProperties } from 'react';
import style from './style.module.scss';
import { ITitleProps } from './type';

export const Title = (props: ITitleProps) => {
    const { titleWarpText, titleSonText, fontSizeWarp, fontSizeSon, colorWarp, colorSon, fontWeightWarp, fontWeightSon, lineHeight } = props;
    const styleWarp: CSSProperties = {
        fontSize: fontSizeWarp,
        color: colorWarp,
        fontWeight: fontWeightWarp
    };
    const styleSon: CSSProperties = {
        fontSize: fontSizeSon,
        color: colorSon,
        fontWeight: fontWeightSon
    };

    return (
        <div className={style['Title']} style={{ lineHeight: lineHeight }}>
            <h3 className={style['title_warp']} style={styleWarp}>{titleWarpText}</h3>
            <p className={style['title_son']} style={styleSon}>{titleSonText}</p>
        </div>
    )
}
