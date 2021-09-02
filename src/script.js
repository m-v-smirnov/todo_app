
class Inputform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'add todos',
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.value}/>
            </form>);
    }
}

class Todos extends React.Component {

    render() {
      return (<div className='todos'>
        <div className='todos__header'>
            <h1>TODOS</h1>
        </div>
        <div className='todos__input'>
        <Inputform />
        </div>
        <div className='todos__list'>
        todos list here soon
        </div>
        <div className='todos__controls'>
        todos control here soon
        </div>
      </div>);
    }
}
//*******************************

ReactDOM.render(<Todos />, document.getElementById('root'));
