import './styles/global.css';
import { Habit } from './components/habits'

function App() {
  return (
    // Passar informaçoes dentro do componente
    <div>
      <Habit completed={5}/>
      <Habit completed={10}/>
      <Habit completed={15}/>
      <Habit completed={20}/>
    </div>
  )
}

export default App
