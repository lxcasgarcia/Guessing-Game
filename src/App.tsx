import styles from "./app.module.css"

import { Tip } from "./components/Tip"
import { Header } from './components/Header'

export default function App() {

  function handleRestartGame() {
    alert("Reiniciando o jogo!")
  }

  return (
    <div className={styles.container}>
        <main>
          <Header current={5} max={10} onRestart={handleRestartGame}/>
          <Tip tip="Linguagem de programação dinâmica" />
        </main>
    </div>
  )
}