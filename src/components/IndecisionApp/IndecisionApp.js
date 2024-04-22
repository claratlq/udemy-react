import React from 'react'
import Options from './Options'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleRemoveOne = this.handleRemoveOne.bind(this)
        this.state = {
            options: []
            //options: props.options  //references defaultProps
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options'); //json (string) format
            const options = JSON.parse(json)
            if (options) {
                this.setState( () => ({options})) //wow, the () around {options} MATTERS. it implicitly returns an objcet by wrapping it in ()
            }
        } catch (e) {
            //do nth at all
        }
    }

    componentDidUpdate(prevProps, prevState) {  //after state or prop updates
        console.log('prevState: ' + prevState.options)
        console.log('curr: ' + this.state.options)
        if (prevState.options.length !== this.state.options.length) {
            console.log('saving data')
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
        
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    handleRemoveOne(optionToRemove) {   
        //this.state.options.splice(this.state.options.indexOf(option), 1)       
        this.setState( (prevState) => ({ 
            options: prevState.options.filter( (option) => option != optionToRemove )
        }));
    }

    handleRemoveAll() {                             //put this here as we need to reference the global options array
        this.setState( () => ({options: []}))
    }

    handlePick() {
        const range = this.state.options.length;
        const randomNum = Math.floor(Math.random() * range);
        console.log(range, randomNum);
        const chosen = this.state.options[randomNum];
        alert(chosen);
    }

    handleAddOption(option) {
        if(!option.trim()) {
            return 'Please enter a valid option.'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        } else {
            this.setState( (prevState) => ({options: prevState.options.concat([option]) }))
            //options: prevState.options.push(option)
        }
    }

    render() {
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Options                                            //these are like the 'bridge' between parent (this class) and child (options class)
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleRemoveOne={this.handleRemoveOne}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
                <Action
                    hasOption={this.state.options.length > 0}
                    handlePick={this.handlePick} // 'hasOption', 'handlePick' are props --> the 'bridge' between a parent and its child   
                />
            </div>
        )
    }
}
