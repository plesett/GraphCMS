import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

export const HeaderWarp = () => {
    return (
        <Link to="" className={style['HeaderWarp']}>
            <div className={style['HeaderWarp_box']}>
                <div className={style['HeaderWarp_Headingsif']}>Ebook</div>
                <p className={style['HeaderWarp_info']}>Navigating Towards Delivering Tomorrow's Content With a Headless CMS</p>
            </div>
        </Link>
    )
}
