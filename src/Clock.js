import React, {Component} from 'react';

class Clock extends Component{
    state = {
        hora:'',
        usuario:'Yvonne'
    };
 /*   constructor(){
        super();
        this.state = {
            hora:'',
            usuario:'Yvonne'
        };
    }
    */
componentDidMount(){
  this.timeId =  setInterval(()=>{
        this.actualizarhora();
    },1000);
}

componentWillUnmount(){
    clearInterval(this.timeId);
}
actualizarhora(){
    this.setState({
        hora : (new Date().toLocaleTimeString())
    });
}
    render(){
        return(
            <div>
                La hora es : {this.state.hora}
            </div>
           ) 
    }
       
    
}

export default Clock;
