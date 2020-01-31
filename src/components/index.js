import React from  'react'
import { connect } from 'react-redux'
import  {actionTest} from  './../actions/index'
import {Avatar, Drawer,Button, Input, Spin, Tabs} from "antd";
 class Test extends React.Component {
     constructor(props){
         super(props)
         this.state = {
             data:'ahihi do ngoc',
             a:0,
             b:0,
             result:0
         }
        
     }
     handleChange(){
         this.props.handleChange(this.state.data)
     }
     handleState(){
        this.componentWillReceiveProps()
         
     }
     componentWillReceiveProps  () {
       this.setState({
           data:'ahihi do ngu'
       })
     }
     handleChangeTalk (){
         this.setState({
             a:this.refs.a.value,
             b:this.refs.b.value,
         })

     }
     render(){
         const  result =  parseInt(this.state.b) + parseInt(this.state.a)
          
         return(
             <div>
                <h1>{this.props.lam}</h1>
                <button  onClick={this.handleChange.bind(this) } >ccc</button>
                <button onClick={this.handleState.bind(this)}>thay doi state</button>
                <hr/>
                <div className="caculation">
                     <input onChange={this.handleChangeTalk.bind(this)} ref="a"/>  <span>+</span>
                     <input onChange={this.handleChangeTalk.bind(this)} ref="b"/>  <span>=</span>
                      <input value={result}/>
                </div>  
             </div>
         )
     }
 }
 const mapStateToProps = state =>{
     console.log(state)
     return {
          lam:state.lam
     }
 }
 const mapDispatchToProps = (dispatch) =>{
     return {
         handleChange :(e)=>{
              dispatch(actionTest(e))
         }
     }
 }
 export default connect(mapStateToProps,mapDispatchToProps)(Test)