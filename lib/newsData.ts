export interface NewsArticle {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  summary: string;
  imageUrl?: string;
  videoEmbed?: string;
  category: "growth" | "tournament" | "business" | "culture";
  publishedAt: string;
  featured: boolean;
}

export function getNewsArticles(): NewsArticle[] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const data = require("../public/news-articles.json");
    return (data as NewsArticle[]).sort(
      (a: NewsArticle, b: NewsArticle) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  } catch {
    return [];
  }
}
