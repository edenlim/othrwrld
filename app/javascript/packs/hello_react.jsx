// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from './app.jsx'

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

console.log(test)


document.addEventListener('DOMContentLoaded', () => {
    var tableDiv = document.getElementsByClassName("tableDiv")
    ReactDOM.render(
        <App/>,
        document.body.querySelector(".tableDiv").appendChild(document.createElement('div')),
    )
})