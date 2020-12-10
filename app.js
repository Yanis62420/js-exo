class App extends React.Component {

    state = {
        name: "",
        comments: []
    }

    handleUsername = (event) => {
        this.setState({
            usename : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const tmp = this.state.comments.concat(this.state.username);
        
    }
   
 

    render() {
        return(
            <div>
            <form onSubmit={this.handleUsername}>
                <label>Your Name</label>
                <input type="text" 
                    value={this.state.username}
                    onChange={this.handleUsername}
                    placeholder="Your Name"
                />
                </form>
            <form onSubmit={this.handleSubmit}>
                <label>Your Comment</label>
                <input type="text" 
                    value={this.state.comments}
                    onChange={this.handleSubmit}
                    placeholder="Your Comment"
                />
                </form>
                <input type="submit" value="Envoyer" />
            
            </div>
            
        )
    }
    

}
ReactDOM.render(<App/>, document.getElementById('app'));