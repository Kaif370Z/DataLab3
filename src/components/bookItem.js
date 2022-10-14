import React from "react";
import Card from 'react-bootstrap/Card';

export class BookItem extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <img src={this.props.book.thumbnailUrl}></img>
                        <footer className="blockqoute mb=0">
                            {this.props.book.authors[0]}
                        </footer>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}