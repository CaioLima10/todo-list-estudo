import { Text } from "./components/text/text";

export function App() {
  return (
    <>
      <Text as="h1" children="hello world" variant={"body-md-regular"}/>
      <Text  children="hello world" variant={"bold-md"}/>
      <Text as="h1" children="hello world" variant={"body-sm-semibold"}/>
    </>
  )
}

