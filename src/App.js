import Countdown from './components/Countdown'
import './scss/app.scss'

const App = () =>{
  document.getElementById("root").innerHTML = `
  ${Countdown()}
  `;
}

App();