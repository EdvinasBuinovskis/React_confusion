import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(dish) {
        if (dish != null && dish.comments !=null) {
            const usercomments = dish.comments.map((usercomment) =>
                <div key ={usercomment.id}>
                    <ListGroupItem>
                        <ListGroupItemHeading>{usercomment.comment}</ListGroupItemHeading>
                    </ListGroupItem>
                    <ListGroupItem>  
                        <ListGroupItemText>&#45;&#45; {usercomment.author} &#44; {usercomment.date}</ListGroupItemText>
                    </ListGroupItem>  
                </div>
                );
                return (
                    <div>
                        <h4>Comments</h4>
                        <ListGroup>{usercomments}</ListGroup>
                    </div>
                );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {
    //     if (this.props.dish != null && this.props.dish.comments !=null) {
    //     const usercomments = this.props.dish.comments.map((usercomment) => {
    //         return (
    //             <div key={comment.id} className="col-12 col-md-5 m-1">
    //                 <p>{comment.comment}</p>
    //                 <p>{comment.author}</p>
    //                 <p>{comment.date}</p>
    //             </div>
    //         );
    //     });
    // }
        return ( 
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;