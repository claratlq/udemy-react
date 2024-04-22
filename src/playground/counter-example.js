
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        const countString = localStorage.getItem('count')
        const count = parseInt(countString, 10)
        if (!isNaN(count)) {
            this.setState( () => ({ count } ))
        }

    }

    componentDidUpdate(prevState, prevProps) {
        if (this.state.count !== prevState.count) {
            //const count = JSON.stringify(this.state.count)
            localStorage.setItem('count', this.state.count)
        }
    }

    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    minusOne() {
        this.setState((prevState) => {      //takes in current this.state
            return {                        //return updated 'state' object
                count: prevState.count - 1
            }
        })
        
    };
    reset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    };
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter count={1}/>, document.getElementById('app'));
// let count = 0;
// const addOne = () => {
//     count++
//     rerender()
//     console.log('Added One!')
// };
// const minusOne = () => {
//     count--
//     rerender()
//     console.log('Minused One!')
// };

// const reset = () => {
//     count = 0
//     rerender()
//     console.log('Reset!')
// };

// const rerender = () => {
//     const template2 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(template2, appRoot); //arg1: what to render, arg2: where to render (as identified by id in index.html) check html, "h1" from "template" should be in the "div" section
// }

// rerender();