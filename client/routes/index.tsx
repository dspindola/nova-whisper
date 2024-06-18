import React from "react"
import { index } from "../actions"

const loader = index();

export default function Index() {
  const { data, error } = React.use(
    loader
  );

  if (!data || error) {
    return <p>error</p>
  }

  return <p>{data}</p>
}
