import React  from "react";
import { BookItem } from "./bookItem";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component{
    
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
        .then(
            (response)=>{
                this.setState({
                    books:response.data
                })
            }
        )
        .catch((error)=>{
            console.log(error)
        });
      }

    state = {
        books: []
    }
    
    render(){
        return(
            <div>
                <h3>Hello from Read component</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}