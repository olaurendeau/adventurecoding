import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <a
            href={`https://github.com/olaurendeau/adventurecoding`}
            className="mx-3 font-bold hover:underline"
          >
            View on GitHub
          </a>
          <a
            href={`https://apps.apple.com/hr/app/racine-partage/id1617526882`}
            className="mx-3 font-bold hover:underline"
          >
            Racine app
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
