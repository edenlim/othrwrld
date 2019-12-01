import React from 'react'
import axios from 'axios'
import classnames from 'classnames'

class AddQualities extends React.Component {
    render(){

        // if(this.state.active ===)
        return(
            <div>
                <div >
                    <form>
                        Key: <input type="text"/><br/>
                        Value: <input type="text"/><br/>
                        <input type="submit" onClick={(e)=>{this.props.handleClick(e)}}/>
                    </form>
                </div>

            </div>
        )
    }
}

export default AddQualities;