import * as React from 'react';

import Checkbox from '../../components/UI/Checkbox/Checkbox';
import Icon from '../../components/UI/Icon/Icon';
import './Todo.css';

export interface ITodoProp {
	completeTodo: () => void;
	content: string;
	schedule?: string;
}

interface ITodoState {
	isHovering: boolean;
}

class Todo extends React.Component<ITodoProp, ITodoState> {
	state = {
		isHovering: false
	}


	public render(): React.ReactNode {
		const {isHovering} = this.state;
		const {completeTodo, content, schedule} = this.props;

		return (
			<div className="todo-container" onMouseEnter={this.toggleIsHover} onMouseLeave={this.toggleIsHover}>
				{ isHovering && <Icon type="drag-drop" /> }
				<div className="todo-central">
					<Checkbox clicked={completeTodo} />
					<span className="todo-content">{content}</span>
					{ isHovering && <Icon type="comment" clicked={this.showCommentModal} /> }
					{
						!(!schedule && !isHovering) && <div className="todo-schedule">
							{ schedule ? schedule : isHovering ? <Icon type="schedule" clicked={this.showScheduleModal} /> : ''}
						</div>
					}


				</div>
				{ isHovering && <Icon type="action" clicked={this.showActionModal} /> }
			</div>
		);
	}

	private showCommentModal = () => {
		console.log('showCommentModal');
	}

	private showScheduleModal = () => {
		console.log('showScheduleModal');
	}

	private showActionModal = () => {
		console.log('showActionModal');
	}

	private toggleIsHover = () => {
		this.setState((prevState) => {
			return {
				isHovering:!prevState.isHovering
			}
		})
	}
}

// Todo.propTypes = {
// 	completeTodo: PropTypes.func.isRequired,
// 	content: PropTypes.string.isRequired,
// 	schedule: PropTypes.string.isRequired,
// };

export default Todo;