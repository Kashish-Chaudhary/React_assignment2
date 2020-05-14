
import React from 'react'
// import {Media} from 'reactstrap'
import {Card,CardImg,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap'
import { Link } from 'react-router-dom';
 function RenderDish({dish}){
  return (


    <div className="col-lg-5 col-md-5 col-sm-12 m-1">

    <Card>
        <CardImg width="100%"  src={dish.image} alt={dish.name}/>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>




   </div>


  );
}
function RenderComments({comments})
{var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

 const com = comments.map((comment)=> {
  return (
    <div key={comment.id} >

      <p> {comment.comment}</p>
      <p> -- {comment.author} , {month[parseInt(comment.date.substr(5,2))-1]} {comment.date.substr(8,2)}, {comment.date.substr(0,4)} </p>
    </div>
  );
});
return (
  <div className="col-lg-5 col-md-5 col-sm-12 m-1">
   <h2>Comments</h2><br/>
     {com}
   </div>
)
}
  const DishDetail= (props) =>{
if(props.dish!=null){
  return(
      <div className="container">

            <Breadcrumb>
              <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
              <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>

            </Breadcrumb>
            <div className="row">
              <RenderDish dish={props.dish}/>
              <RenderComments comments={props.comments}/>
            </div>
      </div>
);
  }

  else return(
    <div></div>
  );
  }

export default DishDetail;
