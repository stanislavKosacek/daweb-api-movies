import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

const Home: NextPage = () => {
  const [host, setHost] = useState('');
  const [protocol, setProtocol] = useState('');
  useEffect(() => {
    setHost(window.location.host);
    setProtocol(window.location.protocol);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Digitální akademie Web - filmové api</title>
        <meta
          name="description"
          content="Digitální akademie Web - filmové api"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Digitální akademie Web</h1>
        <h2 className={styles.subTitle}>Filmové api</h2>
        <div className={styles.docs}>
          <h2>Dokumentace</h2>
          <article className={styles.endpoint}>
            <h3>Seznam filmů [GET]</h3>
            {host && (
              <>
                <a href={`/api/movies`} target="_blank" rel="noreferrer">
                  {`${protocol}//${host}`}/api/movies
                </a>
                <table>
                  <thead>
                    <tr>
                      <th>Parametr</th>
                      <th>Hodnota</th>
                      <th>Příklad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>genre</td>
                      <td>string</td>
                      <td>
                        <a
                          href={`/api/movies?genre=komedie`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {`${protocol}//${host}`}/api/movies?genre=komedie
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>year</td>
                      <td>number</td>
                      <td>
                        <a
                          href={`/api/movies?year=1994`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {`${protocol}//${host}`}/api/movies?year=1994
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
          </article>
          <article className={styles.endpoint}>
            <h3>Detail filmu [GET]</h3>
            {host && (
              <a href={`/api/movies/1`} target="_blank" rel="noreferrer">
                {`${protocol}//${host}`}/api/movies/{'{id}'}
              </a>
            )}
          </article>
        </div>
      </main>
    </div>
  );
};

export default Home;
