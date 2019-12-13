import React from 'react';
import { IHomeProps } from './type';
import Header from '../../components/Header/Header';
import { HeaderWarp } from '../../components/HeaderWarp';

class Home extends React.Component<IHomeProps> {

	componentDidMount() {
		// 触发dispatch请求数据
		this.props.HeaderInfo()
		console.log(this.props);
	}
	hanhleXX = () => {
		console.log(1);
	}
	render() {
		return (
			<React.Fragment>
				<HeaderWarp />
				<Header />
			</React.Fragment>
		);
	}
}

export default Home;