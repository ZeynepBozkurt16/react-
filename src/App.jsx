import 'bulma/css/bulma.css'
import './App.css'
import Course from './Course'
import angular from './images/angular.jpg'
import bootstrap from './images/bootstrap5.png'
import Csharp from './images/ccsharp.png'
import web from './images/kompleweb.jpg'


function App() {
  return (
    <>

      <div>
        <Course image={angular} title="angular" description="Lorem ipsum dolor sit amet."> </Course>

        <Course image={bootstrap} title="bootstrap 5" description="Lorem ipsum dolor sit amet"></Course>
        <Course image={Csharp} title="web" description="Lorem ipsum dolor sit amet"></Course>
        <Course image={web} title="frontend" description="lorem ispum"> </Course>
      </div>
    </>
  )
}

export default App
