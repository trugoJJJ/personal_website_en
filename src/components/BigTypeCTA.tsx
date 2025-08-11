import { Link } from "react-router-dom";

export const BigTypeCTA = () => {
  return (
    <section aria-labelledby="big-type-cta">
      <div className="container">
        <Link to="/portfolio" className="block focus:outline-none">
          <div className="rounded-full bg-foreground text-background px-6 py-10 md:py-16 shadow-card hover-scale">
            <h2 id="big-type-cta" className="text-center">
              ZOBACZ WIĘCEJ PRAC
            </h2>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BigTypeCTA;
