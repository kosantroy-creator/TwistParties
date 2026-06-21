import Seo from "../components/Seo";
import Button from "../components/Button";
import { Balloon } from "../components/Decorations";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[60vh] place-items-center overflow-hidden px-6 text-center">
      <Balloon size={60} color="#FFC93C" className="absolute left-[15%] top-10 animate-floaty opacity-70" />
      <Balloon size={44} color="#15ABE0" className="absolute right-[18%] bottom-12 animate-floaty opacity-70" />
      <div>
        <Seo title="Page not found | Twist Parties" />
        <p className="font-display text-6xl font-bold text-gradient-twist">404</p>
        <h1 className="mt-2 text-3xl">This balloon floated away</h1>
        <p className="mx-auto mt-3 max-w-md text-slatey">
          The page you're looking for isn't here — but the party's still on.
        </p>
        <div className="mt-6">
          <Button to="/" icon="ti-home">Back to home</Button>
        </div>
      </div>
    </section>
  );
}
