import * as React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';
import { IButtonProps } from './type';

export const Button = (props: IButtonProps) => {
    const { href, icon, title, onClick, className } = props;
    return (
        <Link to={href} onClick={onClick} className={className} id={style['Button']}>
            {title}
            {icon && <span className={`iconfont ` + icon}></span>}
        </Link>
    );
}
