import Image from "next/image";
import Link from "next/link";

export default function BrandLogo() {
  return (
    <div className="flex lg:flex-1">
      <Link href="/" className="-m-10 ml-0 flex items-center">
        <Image
          alt="Logo"
          src="/logo.png"
          width={80}
          height={80}
          className="w-auto h-auto object-contain"
        />
      </Link>
    </div>
  );
}
