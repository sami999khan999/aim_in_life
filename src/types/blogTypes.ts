export type Category = {
  id: number;
  user_id: number;
  category_name: string;
  category_description: string;
  publication_status: number;
  created_at: string;
  updated_at: string | null;
};

export type BlogDataType = {
  id: number;
  category_id: string;
  user_id: number;
  title: string;
  slug: string;
  short_description: string;
  long_description: string;
  image: string;
  keyword_description: string;
  status: number;
  created_at: string;
  updated_at: string;
  category: Category;
};

export type BlogsResponse = {
  blogs: {
    current_page: number;
    data: BlogDataType[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
};

export type BlogResponse = {
  blog: BlogDataType;
};

export type CategoryResponse = {
  categories: Category[];
};
