import React from 'react'; //these are default exports
import ReactDOM from 'react-dom';
//import IndecisionApp from './components/IndecisionApp'
import Main from './main'
import './components/SideNavBar/SideNavBar.css';
//import './styles/styles.css';

const App = () => {
    return (
        <Main />
    )
}
ReactDOM.render(<App />, document.getElementById('app'));

// IndecisionApp.defaultProps = {
//     options: []
// }
