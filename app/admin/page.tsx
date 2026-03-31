"use client";

import { useState, useEffect, type FormEvent } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Star,
  X,
  LogOut,
  Save,
  Loader2,
} from "lucide-react";

interface Article {
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

const emptyArticle: Article = {
  id: "",
  title: "",
  source: "",
  sourceUrl: "",
  summary: "",
  imageUrl: "",
  videoEmbed: "",
  category: "growth",
  publishedAt: new Date().toISOString().split("T")[0],
  featured: false,
};

const categories = ["growth", "tournament", "business", "culture"] as const;

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [editing, setEditing] = useState<Article | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  const headers = {
    "Content-Type": "application/json",
    Authorization: password,
  };

  async function login(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (data.valid) {
      setAuthed(true);
      loadArticles();
    } else {
      setStatus("Wrong password");
    }
  }

  async function loadArticles() {
    const res = await fetch("/api/admin/articles", { headers });
    if (res.ok) setArticles(await res.json());
  }

  async function saveArticles(updated: Article[]) {
    setSaving(true);
    setStatus("");
    const res = await fetch("/api/admin/articles", {
      method: "PUT",
      headers,
      body: JSON.stringify(updated),
    });
    if (res.ok) {
      setArticles(updated);
      setStatus("Saved!");
      setTimeout(() => setStatus(""), 3000);
    } else {
      setStatus("Error saving");
    }
    setSaving(false);
  }

  function openNew() {
    setIsNew(true);
    setEditing({
      ...emptyArticle,
      id: `manual-${Date.now()}`,
    });
  }

  function openEdit(article: Article) {
    setIsNew(false);
    setEditing({ ...article });
  }

  function saveEdit() {
    if (!editing) return;
    let updated: Article[];
    if (isNew) {
      updated = [editing, ...articles];
    } else {
      updated = articles.map((a) => (a.id === editing.id ? editing : a));
    }
    setEditing(null);
    saveArticles(updated);
  }

  function deleteArticle(id: string) {
    if (!confirm("Delete this article?")) return;
    saveArticles(articles.filter((a) => a.id !== id));
  }

  function toggleFeatured(id: string) {
    const updated = articles.map((a) => ({
      ...a,
      featured: a.id === id ? !a.featured : a.featured,
    }));
    saveArticles(updated);
  }

  // Login screen
  if (!authed) {
    return (
      <div className="min-h-screen bg-forest flex items-center justify-center px-6">
        <form onSubmit={login} className="w-full max-w-sm">
          <h1 className="font-display text-3xl font-bold text-cream mb-8 text-center">
            News Admin
          </h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 bg-cream/5 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-cream/40 mb-4"
            autoFocus
          />
          <button
            type="submit"
            className="w-full py-3 bg-cream text-forest font-medium rounded-full hover:bg-white transition-colors"
          >
            Log In
          </button>
          {status && (
            <p className="text-red-300 text-sm text-center mt-3">{status}</p>
          )}
        </form>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-forest px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="font-display text-xl font-bold text-cream">
            News Admin
          </h1>
          <div className="flex items-center gap-3">
            {status && (
              <span className="text-cream/60 text-sm">{status}</span>
            )}
            {saving && <Loader2 className="text-cream animate-spin" size={16} />}
            <button
              onClick={openNew}
              className="flex items-center gap-2 px-4 py-2 bg-cream text-forest text-sm font-medium rounded-full hover:bg-white transition-colors"
            >
              <Plus size={14} />
              Add Article
            </button>
            <button
              onClick={() => {
                setAuthed(false);
                setPassword("");
              }}
              className="text-cream/50 hover:text-cream transition-colors"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Article Table */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl border border-charcoal/5 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-charcoal/5 text-left text-sm text-charcoal/50">
                <th className="px-4 py-3 w-12"></th>
                <th className="px-4 py-3 w-16">Image</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3 w-28">Source</th>
                <th className="px-4 py-3 w-28">Category</th>
                <th className="px-4 py-3 w-28">Date</th>
                <th className="px-4 py-3 w-24">Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr
                  key={article.id}
                  className="border-b border-charcoal/5 hover:bg-cream/30 transition-colors"
                >
                  <td className="px-4 py-3">
                    <button
                      onClick={() => toggleFeatured(article.id)}
                      className={`transition-colors ${
                        article.featured
                          ? "text-amber-500"
                          : "text-charcoal/20 hover:text-amber-300"
                      }`}
                    >
                      <Star
                        size={16}
                        fill={article.featured ? "currentColor" : "none"}
                      />
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    {article.imageUrl ? (
                      <img
                        src={article.imageUrl}
                        alt=""
                        className="w-12 h-8 object-cover rounded"
                      />
                    ) : article.videoEmbed ? (
                      <span className="text-xs text-red-500 font-medium">
                        Video
                      </span>
                    ) : (
                      <span className="text-xs text-charcoal/30">None</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-charcoal line-clamp-1">
                      {article.title}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-sm text-charcoal/60">
                    {article.source}
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-charcoal/5 text-charcoal/60">
                      {article.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-charcoal/60">
                    {article.publishedAt}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEdit(article)}
                        className="text-charcoal/40 hover:text-forest transition-colors"
                      >
                        <Pencil size={14} />
                      </button>
                      <button
                        onClick={() => deleteArticle(article.id)}
                        className="text-charcoal/40 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {articles.length === 0 && (
            <p className="text-center text-charcoal/40 py-12">
              No articles yet
            </p>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {editing && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl font-bold text-charcoal">
                {isNew ? "Add Article" : "Edit Article"}
              </h2>
              <button
                onClick={() => setEditing(null)}
                className="text-charcoal/40 hover:text-charcoal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-charcoal/60 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  value={editing.title}
                  onChange={(e) =>
                    setEditing({ ...editing, title: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-charcoal/10 rounded-lg text-charcoal focus:outline-none focus:border-forest"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-charcoal/60 mb-1">
                    Source *
                  </label>
                  <input
                    type="text"
                    value={editing.source}
                    onChange={(e) =>
                      setEditing({ ...editing, source: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-charcoal/10 rounded-lg text-charcoal focus:outline-none focus:border-forest"
                    placeholder="CNBC, Padel Tonic, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm text-charcoal/60 mb-1">
                    Source URL *
                  </label>
                  <input
                    type="url"
                    value={editing.sourceUrl}
                    onChange={(e) =>
                      setEditing({ ...editing, sourceUrl: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-charcoal/10 rounded-lg text-charcoal focus:outline-none focus:border-forest"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-charcoal/60 mb-1">
                  Summary *
                </label>
                <textarea
                  rows={3}
                  value={editing.summary}
                  onChange={(e) =>
                    setEditing({ ...editing, summary: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-charcoal/10 rounded-lg text-charcoal focus:outline-none focus:border-forest resize-none"
                />
              </div>

              <div>
                <label className="block text-sm text-charcoal/60 mb-1">
                  Image URL
                </label>
                <input
                  type="url"
                  value={editing.imageUrl || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, imageUrl: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-charcoal/10 rounded-lg text-charcoal focus:outline-none focus:border-forest"
                  placeholder="https://..."
                />
                {editing.imageUrl && (
                  <img
                    src={editing.imageUrl}
                    alt="Preview"
                    className="mt-2 h-24 object-cover rounded-lg"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm text-charcoal/60 mb-1">
                  Video Embed (HTML)
                </label>
                <textarea
                  rows={2}
                  value={editing.videoEmbed || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, videoEmbed: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-charcoal/10 rounded-lg text-charcoal text-xs font-mono focus:outline-none focus:border-forest resize-none"
                  placeholder='<iframe src="..." ...></iframe>'
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-charcoal/60 mb-1">
                    Category
                  </label>
                  <select
                    value={editing.category}
                    onChange={(e) =>
                      setEditing({
                        ...editing,
                        category: e.target.value as Article["category"],
                      })
                    }
                    className="w-full px-3 py-2 border border-charcoal/10 rounded-lg text-charcoal focus:outline-none focus:border-forest"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c.charAt(0).toUpperCase() + c.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-charcoal/60 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={editing.publishedAt}
                    onChange={(e) =>
                      setEditing({ ...editing, publishedAt: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-charcoal/10 rounded-lg text-charcoal focus:outline-none focus:border-forest"
                  />
                </div>
                <div className="flex items-end pb-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editing.featured}
                      onChange={(e) =>
                        setEditing({ ...editing, featured: e.target.checked })
                      }
                      className="w-4 h-4 accent-forest"
                    />
                    <span className="text-sm text-charcoal/60">Featured</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-charcoal/5">
              <button
                onClick={() => setEditing(null)}
                className="px-4 py-2 text-sm text-charcoal/60 hover:text-charcoal transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={saveEdit}
                className="flex items-center gap-2 px-5 py-2 bg-forest text-cream text-sm font-medium rounded-full hover:bg-forest-light transition-colors"
              >
                <Save size={14} />
                {isNew ? "Add Article" : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
