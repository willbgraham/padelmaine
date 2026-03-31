import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { getNewsArticles, type NewsArticle } from "@/lib/newsData";
import { ArrowLeft, Play, ExternalLink, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Padel News",
  description:
    "The latest padel news, tournament results, and updates on the explosive growth of padel in the United States.",
  openGraph: {
    title: "Padel News — Maine Padel at the Downs",
    description:
      "Stay up to date with the fastest-growing sport in America. Tournament results, league updates, and industry news.",
  },
};

const categoryLabels: Record<string, string> = {
  growth: "Growth",
  tournament: "Tournaments",
  business: "Business",
  culture: "Culture",
};

const categoryColors: Record<string, string> = {
  growth: "bg-emerald-100 text-emerald-800",
  tournament: "bg-blue-100 text-blue-800",
  business: "bg-amber-100 text-amber-800",
  culture: "bg-purple-100 text-purple-800",
};

function FeaturedArticle({ article }: { article: NewsArticle }) {
  return (
    <article className="rounded-2xl border border-charcoal/5 bg-white overflow-hidden shadow-sm">
      {article.videoEmbed ? (
        <div
          className="aspect-video w-full"
          dangerouslySetInnerHTML={{ __html: article.videoEmbed }}
        />
      ) : article.imageUrl ? (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full aspect-video object-cover"
        />
      ) : null}
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[article.category]}`}
          >
            {categoryLabels[article.category]}
          </span>
          {article.videoEmbed && (
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
              <Play size={12} fill="currentColor" />
              Video
            </span>
          )}
          <span className="text-sm text-charcoal/50">
            {new Date(article.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-3">
          {article.title}
        </h2>
        <p className="text-charcoal/70 text-lg leading-relaxed mb-4">
          {article.summary}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-charcoal/50">
            Source: {article.source}
          </span>
          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-forest font-medium text-sm hover:underline"
          >
            Read full article
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}

function ArticleCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group rounded-xl border border-charcoal/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-44 object-cover"
        />
      )}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[article.category]}`}
          >
            {categoryLabels[article.category]}
          </span>
          {article.videoEmbed && (
            <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              <Play size={10} fill="currentColor" />
              Video
            </span>
          )}
        </div>
        <h3 className="font-display text-lg font-bold text-charcoal mb-2 group-hover:text-forest transition-colors">
          {article.title}
        </h3>
        <p className="text-charcoal/60 text-sm leading-relaxed mb-4 line-clamp-3">
          {article.summary}
        </p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-charcoal/40">
            {article.source} &middot;{" "}
            {new Date(article.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </span>
          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-forest font-medium hover:underline"
          >
            Read
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function NewsPage() {
  const articles = getNewsArticles();
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      {/* Header */}
      <div className="bg-forest pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cream/60 hover:text-cream text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            Padel News
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">
            The latest on padel&apos;s explosive growth in the United States —
            tournament results, league updates, and industry developments.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Featured Article */}
        {featured && (
          <section className="mb-12">
            <h2 className="text-sm font-medium text-charcoal/50 uppercase tracking-wider mb-4">
              Featured
            </h2>
            <FeaturedArticle article={featured} />
          </section>
        )}

        {/* Article Grid */}
        {rest.length > 0 && (
          <section>
            <h2 className="text-sm font-medium text-charcoal/50 uppercase tracking-wider mb-4">
              Latest News
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {rest.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}

        {articles.length === 0 && (
          <p className="text-center text-charcoal/50 py-20">
            News articles coming soon.
          </p>
        )}

        {/* WhatsApp Community CTA */}
        <section className="mt-16 rounded-2xl bg-forest p-8 md:p-10 text-center">
          <MessageCircle className="mx-auto mb-4 text-cream/80" size={32} />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-cream mb-3">
            Join the Maine Padel Community
          </h2>
          <p className="text-cream/70 max-w-lg mx-auto mb-6">
            Find players, set up matches, and talk padel with the growing Maine
            padel community on WhatsApp.
          </p>
          <a
            href="https://chat.whatsapp.com/CmfXMW8LgeoF8Gjps4g7uy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-full transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Join WhatsApp Group
          </a>
        </section>
      </div>
    </main>
  );
}
