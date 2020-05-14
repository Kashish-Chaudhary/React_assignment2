import React , {Component} from 'react';
 // import ReactDom from 'react-dom'
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent';
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/Comments';
import About from './AboutComponent'
import { PROMOTIONS } from '../shared/Promotions';

import { LEADERS } from '../shared/leaders';

import { Switch ,Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
class Main extends Component{

    constructor(props){
      super(props);
      this.state={
        dishes:DISHES,
        comments:COMMENTS,
        promotions:PROMOTIONS,
        leaders:LEADERS
      };

    }



  render(){
    const HomePage= () => {
      return (
        <Home
               dish={this.state.dishes.filter((dish) => dish.featured)[0]}
               promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
               leader={this.state.leaders.filter((leader) => leader.featured)[0]}
           />

      );
    }
const DishWithId=({match})=>{
    return(
      <DishDetail dish={this.state.dishes.filter((dish)=> dish.id===parseInt(match.params.dishId,10))[0]}
      comments={this.state.comments.filter((comment)=> comment.dishId===parseInt(match.params.dishId,10))}
      />

    );
}
        return(
            <>

            <Header/>
              <Switch>
                  <Route path="/home" component={HomePage} />
                  <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} />} />
                  <Route exact path="/aboutus" component={()=> <About leaders={this.state.leaders } />}/>
                  <Route exact path="/menu/:dishId" component={DishWithId }  />

                  <Route exact path="/contactus" component={Contact}/>
                  <Redirect to = "/home"/>
            </Switch>
            <Footer/>
            </>
        )
    }
}

export default Main;


// import Person from './person'
// import Daa from './daa'
// let person=[
//     {
//         name:"A",
//         id:1
//     },
//     {
//         name:"B",
//         id:2
//     },
//     {
//         name:"C",
//         id:3
//     },
//     {
//         name:"D",
//         id:4
//     },
// ]
// class App extends Component{
//     render(){
//         // return <Person name={person[0].name} id={person[0].id} />
//         return <div>{person.map((p1,index)=> <Person name={p1.name} id={p1.id}/>)}</div>

//     }
// }

/*
class App extends Component{
    constructor()
    {
        super();
        this.state = {person:[
            {
                name: "k",
                id: 1
            },
            {
                name: "a",
                id: 2
            },
            {
                name: "s",
                id: 3
            }
        ]}
        this.nameChanger = this.nameChanger.bind(this);
    }
    nameChanger()
    {
        this.setState(
        {
            person: [
                {
                    name: "r",
                    id: 1
                },
                {
                    name: "a",
                    id: 2
                },
                {
                    name: "r",
                    id: 3
                }
            ]
        })
    }
    render()
    {
        // return this.state.person.map((p)=><Person name = {p.name} id = {p.id}/>)
        // return <div> <button onClick = {this.nameChanger}> Click Me </button> {this.state.person.map((p1,index)=> <Person name={p1.name} id={p1.id}/>)} </div>
        return(
            <Daa />
        )
    }
}
increment=()=>{
   this.setState({
       val:this.state.val+1
   })
}

decrement=()=>{
   this.setState({
       val:this.state.val-1
   })
}

Input=(e)=>{

    this.setState({
        val:Number(e.target.value)
    })
}
// <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />

export default App;*/
// import React from 'react';
// <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
//     <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
//     <Footer />
