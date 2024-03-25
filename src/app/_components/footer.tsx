import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <a
            href={`https://github.com/olaurendeau/blog-starter-kit`}
            className="mx-3 font-bold hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
