import React from  'react'
import { connect } from 'react-redux'
import  {actionTest} from  './../actions/index'
 class Test extends React.Component {
     constructor(props){
         super(props)
         this.state = {
             data:'ahihi do ngoc'
         }
         this.handleChange= this.handleChange.bind(this)
         this.handleState = this.handleState.bind(this)
     }
     handleChange(){
         this.props.handleChange(this.state.data)
     }
     handleState(){
        this.componentWillReceiveProps()
        // console.log(this.state.data)
     }
     componentWillReceiveProps  () {
       this.setState({
           data:'ahihi do ngu'
       })
     }
     render(){
         return(
             <div>
                <h1>{this.props.lam}</h1>
                <button  onClick={this.handleChange } >ccc</button>
                <button onClick={this.handleState}>thay doi state</button>
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