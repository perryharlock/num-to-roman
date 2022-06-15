import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import romanNumeralGenerator from '../script.js';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const [result, setResult] = useState<string | undefined>('-');
  const [inputValue, setInputValue] = useState(0);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>, number?: number) => {
    e.preventDefault();
    setResult(romanNumeralGenerator(number));
  };

  return (
    <div>
      <Head>
        <title>Roman numerals</title>
        <meta name="description" content="Roman numerals converter" />
      </Head>

      <main className={styles.home__container}>
        <h1 className={styles.home__title}>Number to Roman Numerals</h1>
        <form onSubmit={(e) => handleFormSubmit(e, inputValue)}>
          <label className={styles.home__label} htmlFor="numberToConvert">
            Enter a number between 1 and 3999
          </label>
          <input
            className={styles.home__input}
            required
            min="1"
            max="3999"
            type="number"
            onChange={(e) => setInputValue(Number(e.target.value))}
          />
          <button className={styles.home__button}>Convert</button>
        </form>
        <div className={styles['home__result-container']}>
          <span className={styles.home__label}>Result</span>
          <div className={styles.home__result}>{result}</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
