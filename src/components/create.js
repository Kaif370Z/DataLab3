import React  from "react";

export class Create extends React.Component{

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookUrl = this.onChangeBookUrl.bind(this);

        this.state = {
            title:'',
            author:'',
            url:''
        }
    }


    handleSubmit(e){
        e.preventDefault();
        console.log(`${this.state.title}`);
        console.log(`${this.state.author}`);
        console.log(`${this.state.url}`);
    }

    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }

    onChangeBookAuthor(e){
        this.setState({
            author:e.target.value
        })
    }

    onChangeBookUrl(e){
        this.setState({
            url:e.target.value
        })
    }

    render(){
        return(
            <div>
                <h3>Hello from my Create Component</h3>
                <form onSubmit={this.handleSubmit}>
                <div className="forum-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                    className="forum-control"
                    value={this.state.title}
                    onChange={this.onChangeBookTitle} />
                </div>

                <div className="forum-group">
                    <label>Add Book Authors: </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.author}
                    onChange={this.onChangeBookAuthor} />
                </div>

                <div className="forum-group">
                    <label>Add Front Page Url: </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.url}
                    onChange={this.onChangeBookUrl} />
                </div>

                
                <input type="submit" value="Add Book" />
                </form>
            </div>
        );
    }
}