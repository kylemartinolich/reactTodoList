import React, {Component} from 'react';

class TaskItems extends Component{
    render(){
        console.log(this.props);
        const{deleted} = this.props;
        return (
            <div>{deleted}</div>
                
        )
    }
}

export default TaskItems;