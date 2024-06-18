import React from "react";
import { GET } from "../actions/api/index";
import { server } from "../libs/api";

const loader = async () =>
  GET(server).catch((error) => {
    console.log(error);
    return {
      data: "error",
      error: error,
      response: new Response(),
      status: 500,
      headers: {},
    };
  });

export default function Index() {
  const RESPONSE = React.use(loader());

  if (RESPONSE?.error) {
    return <p>error</p>;
  }

  return <p>{RESPONSE.data}</p>;
}
