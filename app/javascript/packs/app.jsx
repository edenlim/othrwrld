import React from 'react'
import AddQualities from '../components/characterDetails/addQualities.jsx'

class App extends React.Component {
    constructor(){
        super()
        this.state={
            active: false,
        }
    }

    handleClick(e){
        if(this.state.active === false){
            console.log("False");
            this.setState({active: true})
        } else if(this.state.active === true){
            console.log(e)
            console.log("True");
            this.setState({active: false})
        }
    }

    render(){

        let addQualities = <input type="text" name="name"/>;
        let button = <button onClick={()=>{this.handleClick()}}> Search </button>

        if (this.state.active === true) {
            addQualities = <AddQualities handleClick={()=>{this.handleClick()}}/>
            button = ""
        }

        return(
            <div>
                {addQualities}
                {button}
            </div>
        )
    }
}

export default App