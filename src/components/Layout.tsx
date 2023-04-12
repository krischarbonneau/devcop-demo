import { FC, ReactNode } from "react";
import Head from "next/head";

export interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        role="main"
        id="mainContent"
        className="container mx-auto mt-5 flex-1 px-4 pb-8"
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
