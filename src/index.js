// import React from 'react'
//  import ReactDom from 'react-dom'
// import React,{Component} from 'react'
// const element=React.createElement
// ('h1',null,'helloworld');


// const ol=React.createElement('ol',null,
//     React.createElement('li',null,'todo1'),
//     React.createElement('li',null,'todo2'),
//     );
//     const tasks=['todo1','todo2','todo3']
//    // tasks.map((task)=>{return React.createElement('li',null,task)})
//    tasks.map((task,index)=>{return React.createElement('li',{key:index},task)})
//     ReactDom.render(tasks,document.getElementById('root'));


 //const tasks=['todo1','todo2','todo3']
// const ol1=<ol>
//             <li>{tasks[0]}</li>
//             <li>{tasks[1]}</li>
//             <li>{tasks[2]}</li>
//         </ol>
// const ol2=<ol>
//        {
//            tasks.map((task,index)=>
//            {return <li key={index} >{task} </li>})
//        }
//     </ol>
//          ReactDom.render(ol2,document.getElementById('root'));
//const ol2 = <div><h1>Kashish</h1><ol><li>todo1</li><li>todo2</li><li>todo3</li></ol></div>

// class List extends Component{
//     render()
//     {
//         return <ol>
//                 {
//                     tasks.map((task,index)=>
//                     {return <li key={index} >{task} </li>})
//                 }
//              </ol>
//     }
// }
// class Title extends Component{
//     render()
//     {
//         return <h1>Kashish</h1>
//     }
// }
// class Main extends Component{
//     render()
//     {
//         return <div><Title/><List/></div>
//     }
// }
// ReactDom.render(<Main/>,document.getElementById('root'));

/*imp
class List extends Component{
    render()
    {
        return <ol>

                    <li>{this.props.tasks[0]}</li>
                    <li>{this.props.tasks[1]}</li>
                    <li>{this.props.tasks[2]}</li>

             </ol>
    }
}
class Title extends Component{
    render()
    {
        return <h1>Kashish</h1>
    }
}
class Main extends Component{
    render()
    {
            return <div><Title/><List tasks={['todo1','todo2','todo3']}/><List tasks={['to','do','do3']}/></div>
    }
}
ReactDom.render(<Main/>,document.getElementById('root'));
*/
// import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-social/bootstrap-social.css'
// ReactDom.render(<App />,document.getElementById("root"))
import React from 'react'
ReactDom.render(<App />,document.getElementById("root"))













//
