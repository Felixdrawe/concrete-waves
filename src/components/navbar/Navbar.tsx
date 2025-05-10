import Container from '../global/Container';
import DarkMode from './DarkMode';
import FavouriteButton from './FavouriteButton';
import LinksDropdown from './LinksDropdown';
import LocateButton from './LocateButton';
import Logo from './Logo';
import MapButton from './MapButton';
import NavSearch from './NavSearch';

function Navbar() {
  return (
    <nav className="border-b">
      <Container className="flex flex-col flex-wrap items-center gap-4 py-6 md:flex-row md:justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <LocateButton />
          <NavSearch />
        </div>

        <div className="flex items-center gap-4">
          <MapButton />
          <FavouriteButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
