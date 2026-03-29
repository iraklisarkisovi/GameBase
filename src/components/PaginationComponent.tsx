import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import { useAtom } from "jotai";
import { Theme } from "./Toggle";
import { Language } from "./SelectComponent";

interface PaginationProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

export const PaginationComponent = ({
  setPage,
  currentPage,
}: PaginationProps) => {
  const [Lang] = useAtom(Language);

  const [theme] = useAtom(Theme);

  const HandlePrevPage = () => {
    setPage((prev) => (prev <= 1 ? 4 : prev - 1));
  };

  const HandleNextPage = () => {
    setPage((prev) => (prev >= 4 ? 1 : prev + 1));
  };
  return (
    <Pagination
      className={`${theme === "dark" ? "bg-secondary-foreground  text-accent" : "bg-secondary"} h-[60px]`}
    >
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            language={Lang}
            isCurrent={false}
            onClick={HandlePrevPage}
          />
        </PaginationItem>
        {[1, 2, 3, 4].map((it) => (
          <PaginationItem key={it}>
            <PaginationLink
              isCurrent={currentPage === it}
              onClick={() => setPage(it)}
            >
              {it}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            language={Lang}
            isCurrent={false}
            onClick={HandleNextPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
