import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="xl:py-6 sm:py-4 xl:px-0 px-6 py-6 border-b border-color border-solid">
    {/* <div className="container mx-auto max-w-screen-xl">
        <a href={"/"} className="inline-block">
            <img src="/img/logo.svg" className="w-48 md:w-auto" />
        </a>
    </div> */}
<div className="container mx-auto max-w-screen-xl">
<Link href={"/"} className="inline-block">
            
            <Image
              src="/img/logo.svg"
              alt="spurtCMS Profile Image"
              className="w-48 md:w-auto"
              width={32}
              height={32}
              priority
            /></Link>
            </div>
</header>
  );
}
