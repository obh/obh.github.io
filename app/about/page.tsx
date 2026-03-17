import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <div className="prose mt-8 max-w-none">
        <p>
          I work as a Product manager at{" "}
          <a href="https://www.cashfree.com/">Cashfree</a>. Before this I have
          worked as a strat (quant) at Goldman Sachs and a software engineer at
          Flipkart.
        </p>
        <p>
          I completed my undergraduate degree from IIIT-Hyderabad in Computer
          Science and my MBA from IIM-Bangalore.
        </p>
      </div>
    </div>
  );
}
