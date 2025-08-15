import { Metadata } from "next";
import BlogDetailsPage from "./BlogDetailsPage";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const blogId = (await params).id;

  const title = decodeURIComponent(blogId as string);

  return {
    title: `${title}`,
  };
};

const Page = async ({ params }: Props) => {
  const blogId = (await params).id;

  return (
    <div>
      <BlogDetailsPage id={blogId} />
    </div>
  );
};

export default Page;
