import React from 'react';
import { Breadcrumb ,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
function Contact(props) {
    return(
        <div className="container">
            <Breadcrumb>
              <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Contact Us</BreadcrumbItem>

            </Breadcrumb>
            <div className="col-12">
              <h3>Contact us</h3>
              <hr/>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;























import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Dishdetails from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);

    this.state={
      dishes:DISHES,
      comments:COMMENTS,
      leaders:LEADERS,
      promotions:PROMOTIONS,

    //   selectedDish:null,
    }
  }

//   onDishSelect(dishId){
//     this.setState({selectedDish:dishId});
//   }

  render(){
    const HomePage=()=>{
        return (
            <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
            promotion={this.state.promotions.filter((promotion)=> promotion.featured)[0]}
            leader={this.state.leaders.filter((leader)=> leader.featured)[0]}
            />
        );
    }
    const DishWithId=({match})=>{
      return(
        <Dishdetails dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
          comments={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
        />
      );
    }
    return (
      <div>
        <Header />
        <Switch>
            <Route path="/home" component={HomePage}/>
            <Route exact path="/aboutus" component={()=><About leaders={this.state.leaders}/>}/>
            <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
            <Route path="/menu/:dishId" component={DishWithId}/>
            <Route exact path="/contactus" component={Contact}/>
            <Redirect to="/home" />
        </Switch>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}/> */}
        {/* <Dishdetails dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}/> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
