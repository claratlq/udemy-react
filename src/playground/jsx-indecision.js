//when we run this, babel will help auto-generate the browser-readable code in public/scripts/app.js

console.log('App.js is running');

const app = {
    title: 'Welcome to the Movie Picker!',
    subtitle: 'Let fate decide what movie you should watch!',
    options: ['Frozen', 'Dune II']
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const newOption = e.target.elements.option.value;
    app.options.push(newOption);
    e.target.elements.option.value = ' ';
    console.log('Form Submitted!' + app.options);
    rerender();
}

const onRemove = (e) => {
    app.options = [];
    rerender();
}

let chosen = null;
const chooseRandom = (e) => {
    const range = app.options.length;
    const randomNum = Math.floor(Math.random() * range);
    console.log(range, randomNum);
    const chosen = app.options[randomNum];
    alert(chosen);
    rerender();
}

const appRoot = document.getElementById("app");

const rerender = () => {

    // JSX - JavaScript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'Add your first option!'}</p> 
            {
            /*
                numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>
                })
            */
            }
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>
                )
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
            <button onClick={onRemove}>Remove all</button>
            <button disabled={app.options.length === 0} onClick={chooseRandom}>Click Me to Decide Your Fate!</button>
            {(chosen) && <p>The movie you should watch is: {chosen}</p>}
        </div> // need to wrap in a div as JSX only allows for a single root element 
    );
    ReactDOM.render(template, appRoot);
}

rerender();

//ReactDOM.render(template, appRoot)