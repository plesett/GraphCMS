import * as React from 'react';
import style from './style.module.scss';
import { ICenterProps, IFlexRowProps } from './type';

export const Center = (props: ICenterProps) => {
    var { width, bg, children } = props;
    return (
        <div className={style['Center']} style={{ width: typeof width == 'number' ? width + '%' : width, background: bg }}>
            {children}
        </div>
    )
}

export const FlexRow = (props: IFlexRowProps) => {
    var { children } = props;
    return (
        <div className={style['FlexRow']}>
            {children}
        </div>
    )
}

export const FlexCol = (props: IFlexRowProps) => {
    var { justifyContent, children, bg, width, marginLeft } = props;
    return (
        <div className={style['FlexCol']} style={{ width: width, justifyContent: justifyContent, backgroundColor: bg, marginLeft: marginLeft }}>
            {children}
        </div>
    )
}
