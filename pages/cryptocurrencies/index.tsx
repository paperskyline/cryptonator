import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../../styles/Cryptocurrencies.module.css'
import Crypto from '../../components/Cryptocurrencies/Crypto'
import { CryptoType } from '../../types/cryptos'
import { CurrencyType } from '../../types/currencies'

const Cryptocurrencies: NextPage<{cryptos: CryptoType[]}> = ({cryptos}) => {

  const [cryptocurrencies, setCryptocurrencies] = useState<CryptoType[]>(cryptos);
  const [currency, setCurrency] = useState<CurrencyType>('usd');
  
  return (
    <div className={styles.wrapper}>
    <div className={styles.crypto__container}>
        {cryptocurrencies.map((item, index) => <Crypto key={index} data={item} currency={currency} />)}
    </div>
  </div>
  )
}

export default Cryptocurrencies


export async function getServerSideProps(context: any) {

  const response = await fetch('http://localhost:3001/cryptos')
  const data = await response.json()

  return {
    props: {
      cryptos: data,
    },
  }
}