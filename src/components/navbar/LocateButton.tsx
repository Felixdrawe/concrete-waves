import { LocateFixed } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
async function LocateButton() {
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="relative flex items-center justify-center"
    >
      <Link href="/">
        <LocateFixed />
      </Link>
    </Button>
  );
}
export default LocateButton;
