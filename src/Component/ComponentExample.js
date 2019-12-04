import React from 'react';

class Component extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            checked: e.target.checked
        }); 
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillReceiveProps() {

    }

    render() {
        return (<div className='item-wrapper'>
             <input
                className='checkbox' 
                checked={this.state.checked}
                type='checkbox' 
                onChange={this.onChange}
                >
            </input>
            { 
            this.state.checked ? <lable className='item-name checked'> {this.props.name} </lable>
                : <label className='item-name'> {this.props.name} </label>
            }
        </div>)
    }
}
