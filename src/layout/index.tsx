import React from 'react';
import style from './header.module.scss';


export default class HeaderLayout extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <header className={style['Header_bg']}>
                <div className={style['Header_Icon']}>
                    {
                        this.props.children
                    }
                </div>
            </header>
        )
    }
}