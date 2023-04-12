import LinkButton from "@/components/LinkButton";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white items-center justify-center">
      <Head>
        <title>DevCoP React Showcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-mono">
        <h1 className="drop-shadow-xl font-medium text-black text-4xl lg:text-6xl text-center">
          DevCoP React Showcase
        </h1>
        <div className="grid grid-cols-2 py-4 px-8 items-center justify-center gap-4">
        <LinkButton text="Reusable Components" href="/reusable" size="lg"/>
        <LinkButton text="State Management" href="/state-management" size="lg"/>
        <LinkButton text="Conditional Rendering" href="/conditional-rendering" size="lg"/>
        <LinkButton text="Other Hooks" href="/other-hooks" size="lg"/>
        </div>
      </main>
    </div>
  );
}
