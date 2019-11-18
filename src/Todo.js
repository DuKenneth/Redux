import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component{

    render() {
        return(
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.handleOnchange}/>
                    <button onClick={this.props.handleClick}>submit</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};

//store.dispatch props
const mapDispatchToProps = (dispatch) => {
    return {
        handleOnchange (e) {
            const action = {
                type: 'Change_value',
                value: e.target.value
            };
            dispatch(action)
        },
        handleClick () {
            const action = {
                type: 'add_item',
            };
            dispatch(action)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);