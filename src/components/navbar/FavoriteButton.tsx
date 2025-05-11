import { MapPlus } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
async function FavoritesButton() {
  // temp
  const numItems = 9;
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="relative flex items-center justify-center"
    >
      <Link href="/favorites">
        <MapPlus />
        <span className="bg-primary absolute -top-3 -right-3 flex h-6 w-6 items-center justify-center rounded-full text-xs text-white">
          {numItems}
        </span>
      </Link>
    </Button>
  );
}
export default FavoritesButton;
