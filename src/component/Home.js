import React, { Component } from 'react';
import '../App.css'
import { connect } from 'react-redux';
import fire from '../fire'
import {
    changeTodo, deleteTodo, editTodo, isCancel, _updateButton, firebase
} from '../store/action/action';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state =
            {
                text: {
                    input: '',
                },
                editArray: props.todo,
            }
    }

    componentDidMount() {
        let that = this
        console.log(this.state.editArray)
        fire.database().ref('/todo').on('child_added', function (snap) {
            let snapshout = snap.val();
            snapshout.id = snap.key;
            that.props.firebase(snapshout)
        })
    }
    _deleteButton(index) {
        this.props.deleteTodo(index);
    }
    isCancel(index) {
        this.props.isCancel(index);
    }
    _updateButton(index) {
        let valu = {
            name: this.state.editArray.editInput,
            isEdit: false,
            id: this.props.todo[index].id
        }
        this.props._updateButton(valu, index);
        this.props.isCancel(index);
    }
    _editButton(index) {
        this.props.editTodo(index);
    }
    _changehandler(property, event) {
        let text = this.state.text
        text[property] = event.target.value
        this.setState({
            [event.target.name]: event.target.value,
            input: text
        })
    }
    _editInputA(property, event) {
        let array = this.state.editArray;
        array[property] = event.target.value;
        this.setState({
            editArray: array
        })
    }
    // editArray
    _submitButton(event) {
        let user = {
            name: this.state.text.input
        }
        let hahah = this.state.editArray.concat(user)
        this.setState({
            text: {
                input: '',
                editArray: hellobhai,
                id: event
            }
        })
        this.props.changeTodo(user);
    }
    render() {
        return (
            <div>
                <div className="uk-child-width-expand@s uk-text-center" uk-grid="true">
                    <div className="uk-card uk-card-default uk-card-body">
                        <h2 className="uk-text-center"> TODO APP </h2>
                       <div className="uk-width-1-2 uk-position-center">
                        <input className="uk-input" placeholder="Write You Todo's..." type="text" value={this.state.text.input} onChange={this._changehandler.bind(this, 'input')} />
                        </div><br/><br/>
                        <button className="uk-button uk-button-primary" onClick={this._submitButton.bind(this)}> Submit </button>
                       
                      
                    </div>
                        </div>
                    <div>
                        {this.props.todo.map((task, index) => {
                            return (<div key={index} index={index} detail={task}>
                                {(task.isEdit) ?
                                    <div className="uk-card uk-card-secondary uk-card-body uk-width-1-4@m uk-position-center">
                                        <input className="uk-input" placeholder="type edit value" type="text" defaultValue={task.name} onChange={this._editInputA.bind(this, 'editInput')} />
                                        <button  className="uk-button uk-button-danger" onClick={this.isCancel.bind(this, index)} >Cancel</button>
                                        <button  className="uk-button uk-button-secondary" onClick={this._updateButton.bind(this, index)} >Update</button>
                                    </div>
                                    :
                                    <div className="uk-card uk-card-default uk-card-body uk-width-1-4@m uk-position-center">
                                          <div className="uk-card-badge uk-label">Todo</div>
                                        <h4 className="uk-text-center">{task.name}</h4><br/><br/>
                                    <div className="uk-margin uk-position-center">
                                        <button className="uk-button uk-button-danger" onClick={this._deleteButton.bind(this, index)}>Delete</button>
                                        <button className="uk-button uk-button-secondary" onClick={this._editButton.bind(this, index)} >Edit</button>
                                   </div>
                                    </div>

                                }
                            </div>)
                        })
                        }
                    </div>
            </div>
        )
    }

}

function mapStateToProp(state) {
    return ({
        todo: state.root.todo
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        changeTodo: (user) => { dispatch(changeTodo(user)) },
        deleteTodo: (index) => { dispatch(deleteTodo(index)) },
        editTodo: (ind) => { dispatch(editTodo(ind)) },
        isCancel: (ind) => { dispatch(isCancel(ind)) },
        _updateButton: (valu, index) => { dispatch(_updateButton(valu, index)) },
        firebase: (snapshout) => { dispatch(firebase(snapshout)) }
    })
}
export default connect(mapStateToProp, mapDispatchToProp)(Home);