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
        var searchbox = document.getElementById("searchbox");
        console.log(searchbox.value);
    }

    render(){

        let addQualities = <input id="searchbox" type="text" name="name"/>;
        let button = <button onClick={()=>{this.handleClick()}}> Search </button>

        // if (this.state.active === true) {
        //     addQualities = <AddQualities handleClick={()=>{this.handleClick()}}/>
        //     button = ""
        // }

        return(
            <div>
                {addQualities}
                {button}
            </div>
        )
    }
}

export default App