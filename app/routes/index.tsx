import * as Sentry from "@sentry/remix"
export let loader = async () => {

  throw new Error("Sentry error test");

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
