import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={64}
        height={64}
        className="transition-transform duration-200 hover:scale-110"
      />
    </Link>
  );
}

export default Logo;
