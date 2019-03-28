import * as React from 'react';

import Checkbox from '../../components/UI/Checkbox/Checkbox';
import Icon from '../../components/UI/Icon/Icon';


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

	showCommentModal = () => {
		console.log('showCommentModal');
	}

	showScheduleModal = () => {
		console.log('showScheduleModal');
	}

	showActionModal = () => {
		console.log('showActionModal');
	}

	render() {
		const {isHovering} = this.state;
		const {completeTodo, content, schedule} = this.props;

		return (
			<div className="todo-container">
				{ isHovering && <Icon type="drag-drop" /> }
				<div className="todo-central">
					<Checkbox clicked={completeTodo} />
					<span className="todo-content">{content}</span>
					{ isHovering && <Icon type="comment" /> }
					<div className="todo-schedule">
						{ schedule ? schedule : isHovering ? <Icon type="schedule" clicked={this.showScheduleModal} /> : ''}
					</div>

				</div>
				{ isHovering && <Icon type="action" clicked={this.showActionModal} /> }
			</div>
		);
	}
}

export default Todo;