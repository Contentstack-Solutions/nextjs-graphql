import { gql } from "@apollo/client";
import { useState, useEffect } from "react";
import client from "../apollo-client";

export default function Home() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const Fetchdata = () => {
      client.query({
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
      })
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    };
    Fetchdata();
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  if (!data) {
    return <div className="App">Loading...</div>;
  }

  const home = data.data.all_home.items[0]

  return (
    <div>
      <h1>{home.header}</h1>
      <p>{home.body}</p>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max="10000"
        value={home.number}
      />
    </div>
  );
}