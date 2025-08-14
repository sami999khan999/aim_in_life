import { cn } from "@/lib/utils";
import { FaPaperPlane } from "react-icons/fa";
import Heading from "./Heading";
import PingAnimation from "./PingAnimation";

const NewsLetter = () => {
  const handleSearch = () => {};

  return (
    <div className="space-y-space-sm">
      <div className="flex  items-center gap-space-base">
        <PingAnimation className="w-2" />
        <h3 className="text-size-16 font-medium text-text-color">Newsletter</h3>
      </div>
      <p className="text-size-14 text-text-color-muted">
        subscribe newsletter to get latest articles
      </p>
      <form
        onSubmit={handleSearch}
        className={cn(
          "flex items-center border border-border rounded-full pl-space-lg bg-bg-light py-space-xs pr-space-xs w-full"
        )}
      >
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow outline-none border-none"
        />
        <button
          type="submit"
          className="bg-primary p-space-xs rounded-full text-bg-light hover:bg-text-color flex items-center justify-center duration-300 text-size-14 gap-space-sm px-space-sm"
        >
          <FaPaperPlane size={14} />
          <span>Join</span>
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
