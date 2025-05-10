import { Map } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
async function MapButton() {
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="relative flex items-center justify-center"
    >
      <Link href="/">
        <Map />
      </Link>
    </Button>
  );
}
export default MapButton;
