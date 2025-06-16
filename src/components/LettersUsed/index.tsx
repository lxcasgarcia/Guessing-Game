import styles from "./styles.module.css"

import { Letter } from "../Letter"

export function LettersUsed(){
    return (
        <div className={styles.lettersUsed}>
            <h5>Letras utilizadas</h5>

            <div>
                <Letter value="A" size="small"/>
                <Letter value="B" size="small"/>
            </div>
        </div>
    )
}