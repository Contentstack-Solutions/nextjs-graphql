import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
    query {
      all_home {
        items {
          body
          header
          number
        }
      }
    }
    `,
  });

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const home = data.all_home.items[0]
  console.log(data)
  return (
    <div>
      <h1>{home.header}</h1>
      <p>{home.body}</p>
      <input type="number" id="quantity" name="quantity" min="1" max="50" value={home.number}/>
    </div>
  );
}
