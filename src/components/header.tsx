import Link from "next/link";

const Header = () => {
  return (
    <section className="w-full absolute text-white z-10">
      <nav className="container relate flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bond text-3xl">
          Home
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/about">About</Link>
        </div>
      </nav>
    </section>
  );
};

export default Header;
