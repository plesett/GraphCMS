import React, { Component } from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';
import { Center, FlexRow, FlexCol } from '../../comm/Center/index';

interface Props {

}
interface State {

}

class Header extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div>
            <Center width={92}>
                <FlexRow>
                    <FlexCol width="17%">
                        <Link to="/" className={style['header_logo_inner']}>
                            <img src="https://graphcms.com/static/graphcms-logo-graphql-cms-4cde8eb0db5d2441b0c7f3725c583b8b.svg" alt="" />
                        </Link>
                    </FlexCol>
                    <FlexCol width="40%" marginLeft={118}>
                        <div className={style['Header_Menu']}>
                            <div className={style['Header_item']}>
                                <Link to="">Product </Link>
                            </div>
                            <div className={style['Header_item']}>
                                <Link to="">Pricing</Link>
                            </div>
                            <div className={style['Header_item']}>
                                <Link to="">Agencies</Link>
                            </div>
                            <div className={style['Header_item']}>
                                <Link to="">Enterprise</Link>
                            </div>
                            <div className={style['Header_item']}>
                                <Link to="">Docs</Link>
                            </div>
                        </div>
                    </FlexCol>
                    <FlexCol width="28%">
                        <div className={style['Header_User']}>
                            <div className={style['Header_User_item']}>
                                <Link to=""><span className="iconfont icon-user"></span> Log In</Link>
                            </div>
                            <div className={style['Header_User_item']}>
                                <Link to=""><span className="iconfont icon-plane"></span> Contact Us</Link>
                            </div>
                            <div className={style['Header_User_item']} style={{marginTop: 5}}>
                                <Link to="" id={style['Header_Sign']}>Sign up <span className="iconfont icon-arrow-right1"></span></Link>
                            </div>
                        </div>
                    </FlexCol>
                </FlexRow>
            </Center>
            </div>
        )
    }
}

export default Header;