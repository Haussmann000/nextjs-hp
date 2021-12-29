import Head from "next/head";
import Image from "next/image"
import HeaderButton from "./header-btn";

export default function Layout({ children, title = "HP by Nextjs" }){
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="sticky top-0">
        <nav className="bg-yellow-300 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <HeaderButton link="/">Home</HeaderButton>
              <HeaderButton link="/blog-page">Blog</HeaderButton>
              <HeaderButton link="/contact-page">Contact</HeaderButton>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen bg-gray-400 bg-index-background bg-cover bg-no-repeat bg-scroll bg-blend-luminosity">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
}