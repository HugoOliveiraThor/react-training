import React , {Component} from 'react'

class Field extends Component {
    constructor(props) {
        super(props)
        this.state = { value: props.initialValue}
        // Estou garantido que o this e da classe Field
        this.handleChange = this.handleChange.bind(this)
    }
    // Alterou estado o metodo render é chamado
    handleChange(event) {
        this.setState({value: event.target.value})
    }
    // Sempre quando baseado em classe precisa do metodo render
    render() {
        return (
            <div>
                <label> {this.state.value}</label><br/>
                <input onChange={this.handleChange} value={this.state.value} />
            </div>
        )    
    }
}
export default Field