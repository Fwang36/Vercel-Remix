import { LoaderFunction } from "remix"

export let loader: LoaderFunction = async ({request}) => {
  throw new Error("Sentry Error")

  // return null;
}

// const handleClick = () => {
//   throw new Error("SENTRY BUTTON TEST")
// }

export default function Home() {
  return (
    <div>
      {/* <button
      type="submit"
      className="test"
      onClick={handleClick}>TEST BUTTON</button> */}
      TEST
    </div>
  )
}
