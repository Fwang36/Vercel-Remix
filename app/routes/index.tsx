import { LoaderFunction } from "remix"

export let loader: LoaderFunction = async () => {
  setTimeout(() => {
    
    throw new Error("Sentry error test");
  }, 2000)

  return null;
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
