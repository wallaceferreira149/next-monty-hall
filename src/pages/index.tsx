import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { Card } from '../components/Card'
import { NumberInput } from '../components/NumberInput'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [portaPresente, setPortaPresente] = useState(2)

  return (
    <div className={styles.formulario}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput
            text="Qtde portas?"
            value={qtdePortas}
            onChange={(novaQtde) => setQtdePortas(novaQtde)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput
            text="Porta com presente?"
            value={portaPresente}
            onChange={(novaPortaPresente) =>
              setPortaPresente(novaPortaPresente)
            }
          />
        </Card>
        <Card bgColor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${portaPresente}`}>
            <h1 className={styles.link}>Iniciar</h1>
          </Link>
        </Card>
      </div>
    </div>
  )
}

export default Home
