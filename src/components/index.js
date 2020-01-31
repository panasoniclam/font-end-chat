import React from 'react'
import { connect } from 'react-redux'
import { actionTest, actionAdd, actionSaga } from './../actions/index'
class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 'ahihi do xvgb ngoc',
            result: ''
        }
    }
    handleChange() {
        this.props.handleChange(this.state.data)
    }
    handleState() {
        this.componentWillReceiveProps()
    }
    componentWillReceiveProps() {
        this.setState({
            data: 'ahihi do ngu',
            result: this.props.result
        })
    }
    handleChangeTalk() {
        this.setState({
            a: this.refs.a.value,
            b: this.refs.b.value,
        })
    }
    handleAdd() {
        this.props.handleAdd(this.state.a, this.state.b)
        this.componentWillReceiveProps()
    }
    handleSaga(){
        this.props.handleSaga()
    }
    render() {
       
        return (
            <div>
                <h1>{this.props.lam}</h1>
                <button onClick={this.handleChange.bind(this)} >ccc</button>
                <button onClick={this.handleState.bind(this)}>thay doi state</button>
                <hr />
                <div className="caculation">
                    <input onChange={this.handleChangeTalk.bind(this)} ref="a" />  <span>+</span>
                    <input onChange={this.handleChangeTalk.bind(this)} ref="b" />  <span>= {this.props.result}</span>
                    <button onClick={this.handleAdd.bind(this)}>Tinh</button>
                </div>
                <hr />
                <button onClick={this.handleSaga.bind(this)}>Saga</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    
    return {
        lam: state.lam,
        a: state.a,
        b: state.b,
        result: state.result
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (e) => {
            dispatch(actionTest(e))
        },
        handleAdd: (a, b) => {
            dispatch(actionAdd({ a, b }))
        },
        handleSaga:()=>{
            dispatch(actionSaga())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Test)