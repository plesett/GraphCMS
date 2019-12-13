import * as React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';
import { ICardProps } from './type';

const More = () => {
    return (
        <div className={style['smalllogo']}>
            LEARN MORE
                        <span className="iconfont icon-icon2"></span>
        </div>
    )
}


export const Card = (props: ICardProps) => {

    const { WarpImg, CardTitle, CardInfo, more } = props;

    return (
        <Link to="" className={style['Href_Card']} >
            <div className={style['Card']}>
                <div className={style['Card_warp']}>
                    <img className={style['background']} src={WarpImg} alt="" />
                </div>
                <div className={style['Content_type']}>
                    <h3>{CardTitle}</h3>
                    <p>{CardInfo}</p>
                </div>
                {more && <More />}
            </div>
        </Link>
    );
}
