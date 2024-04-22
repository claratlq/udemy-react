class Visibility extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            visible: false
        }
    }

    toggle() {
        this.setState( (prevState) => { return {
            visible: !prevState.visible
        }}
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.toggle}><p>{this.state.visible ? 'Hide Details' : 'Show Details'}</p></button>
                {this.state.visible && <p>Thor Jun Jie</p>}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById("app"))

// //when we run this, babel will help auto-generate the browser-readable code in public/scripts/app.js

// console.log('App.js is running');


// const onFormSubmit = (e) => {
//     e.preventDefault();
//     const newOption = e.target.elements.option.value;
//     app.options.push(newOption);
//     e.target.elements.option.value = ' ';
//     console.log('Form Submitted!' + app.options);
//     rerender();
// }

// const onRemove = (e) => {
//     app.options = [];
//     rerender();
// }

// let show = false;
// const toggle = () => {
//     show = !show;
//     rerender();
// }

// const appRoot = document.getElementById("app");

// const rerender = () => {

//     // JSX - JavaScript XML
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>

//             <button onClick={toggle}>{show ? 'Hide Details' : 'Show Details'}</button>
//             {show && <p>Details are shown!</p>}
//         </div> // need to wrap in a div as JSX only allows for a single root element 
//     );
//     ReactDOM.render(template, appRoot);
// }

// rerender();

// //ReactDOM.render(template, appRoot)