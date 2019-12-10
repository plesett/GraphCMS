import React from 'react';
// import * as actions from './store/actions';
// import { connect } from 'react-redux';

export interface IAppProps {
	name: string;
	count?: number;
	onIncrement?: () => void;
	onDecrement?: () => void;
	getDataTest?: any;
	info: any;
	success: string;
	title: string;
	data: Array<string>
}

class Home extends React.Component<IAppProps> {
	render(){
		const { onIncrement, onDecrement, count, name, success, data } = this.props;
		return (
			<div>
				{name}
				数目:
			<button onClick={onIncrement}>+</button>
				{count}
				<button onClick={onDecrement}>-</button>
				{success}
				{
					data
						?
						data.map((value: any) => {
							return (
								<ul key={value.id}>
									<li>{value.title}</li>
								</ul>

							)
						})
						:
						<p>加载中...</p>
				}
			</div>
		);
	}
}

export default Home;