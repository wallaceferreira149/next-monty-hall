import { useEffect, useState } from 'react'
import Link from 'next/link'

import { Door } from '../../../components/Door'
import { atualizarPortas, criarPortas } from '../../../functions/door'

import styles from '../../../styles/Jogo.module.scss'
import { useRouter } from 'next/router'

export default function Jogo() {
  const [valido, setValido] = useState(false)
  const router = useRouter()
  const [portas, setPortas] = useState([])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    const qtdPortasValido = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= portas

    setValido(qtdPortasValido && temPresenteValido)
  }, [portas])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {valido &&
          portas.map((porta) => (
            <Door
              key={porta.numero}
              value={porta}
              onChange={(novaPorta) =>
                setPortas(atualizarPortas(portas, novaPorta))
              }
            />
          ))}
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar</button>
        </Link>
      </div>
    </div>
  )
}
