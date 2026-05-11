"use client";
import { useState, useEffect, useCallback } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdMJCDCe_PrMzhfttNkhoraS0QMsbRHL4",
  authDomain: "interior-design-6046e.firebaseapp.com",
  databaseURL: "https://interior-design-6046e-default-rtdb.firebaseio.com",
  projectId: "interior-design-6046e",
  storageBucket: "interior-design-6046e.firebasestorage.app",
  messagingSenderId: "547436953437",
  appId: "1:547436953437:web:14ab0fe0f89149ed57f2b4",
  measurementId: "G-90TXRMB3ZH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // ← YE LINE ADD KARO

const CATEGORIES = [
  "Residential",
  "Apartment",
  "Commercial",
  "Kitchen",
  "Office",
  "Other",
];

const emptyForm = {
  title: "",
  tag: "Residential",
  img: "",
  client: "",
  timeline: "",
  overview: "",
  featureInput: "",
  features: [],
  galleryInput: "",
  gallery: [],
};

function slugify(t) {
  return (
    t
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") +
    "-" +
    Date.now()
  );
}

const tagColors = {
  Residential: ["#e8f5e9", "#1b5e20"],
  Apartment: ["#e3f2fd", "#0d47a1"],
  Commercial: ["#fff3e0", "#e65100"],
  Kitchen: ["#fce4ec", "#880e4f"],
  Office: ["#f3e5f5", "#4a148c"],
  Other: ["#f5f5f5", "#212121"],
};

function TagBadge({ tag }) {
  const [bg, color] = tagColors[tag] || tagColors.Other;
  return (
    <span
      style={{
        background: bg,
        color,
        fontSize: 11,
        fontWeight: 600,
        padding: "2px 10px",
        borderRadius: 20,
        letterSpacing: "0.04em",
      }}
    >
      {tag}
    </span>
  );
}

export default function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [view, setView] = useState("list");
  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [previewProject, setPreviewProject] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const q = query(
        collection(db, "portfolio"),
        orderBy("createdAt", "desc"),
      );
      const snap = await getDocs(q);
      setProjects(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    } catch (e) {
      setError(
        "Failed to fetch data from Firebase. Please check your configuration. " +
          e.message,
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleSave = async () => {
    if (!form.title.trim() || !form.img.trim()) {
      showToast("Title and Hero Image are necessary!", "error");
      return;
    }
    setSaving(true);
    try {
      const payload = {
        title: form.title.trim(),
        tag: form.tag,
        img: form.img.trim(),
        client: form.client.trim(),
        timeline: form.timeline.trim(),
        overview: form.overview.trim(),
        features: form.features,
        gallery: form.gallery,
        slug: slugify(form.title),
      };
      if (editId) {
        await updateDoc(doc(db, "portfolio", editId), {
          ...payload,
          updatedAt: serverTimestamp(),
        });
        showToast("Project updated successfully ✓");
      } else {
        await addDoc(collection(db, "portfolio"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
        showToast("New project added successfully ✓");
      }
      setForm(emptyForm);
      setEditId(null);
      setView("list");
      fetchProjects();
    } catch (e) {
      showToast("Save failed: " + e.message, "error");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setSaving(true);
    try {
      await deleteDoc(doc(db, "portfolio", deleteId));
      showToast("Project delete ho gaya");
      setDeleteId(null);
      fetchProjects();
    } catch (e) {
      showToast("Delete failed: " + e.message, "error");
    } finally {
      setSaving(false);
    }
  };

  const startEdit = (p) => {
    setForm({ ...p, featureInput: "", galleryInput: "" });
    setEditId(p.id);
    setView("form");
  };

  const addFeature = () => {
    const v = form.featureInput.trim();
    if (v && !form.features.includes(v)) {
      setForm((f) => ({
        ...f,
        features: [...f.features, v],
        featureInput: "",
      }));
    }
  };

  const addGallery = () => {
    const v = form.galleryInput.trim();
    if (v && !form.gallery.includes(v)) {
      setForm((f) => ({ ...f, gallery: [...f.gallery, v], galleryInput: "" }));
    }
  };

  const s = {
    root: {
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
      background: "#f7f6f3",
      paddingBottom: 80,
    },
    header: {
      background: "#132A13",
      padding: "0 32px",
      height: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
    btn: (bg = "#132A13", color = "#fff") => ({
      background: bg,
      color,
      border: "none",
      borderRadius: 10,
      padding: "9px 20px",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
    }),
    outBtn: {
      background: "transparent",
      color: "#132A13",
      border: "1.5px solid #132A13",
      borderRadius: 10,
      padding: "8px 18px",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
    },
    card: {
      background: "#fff",
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
    },
    input: {
      width: "100%",
      border: "1.5px solid #e0e0e0",
      borderRadius: 10,
      padding: "10px 14px",
      fontSize: 14,
      outline: "none",
      boxSizing: "border-box",
      fontFamily: "inherit",
      background: "#fff",
    },
    label: {
      display: "block",
      fontSize: 12,
      fontWeight: 600,
      color: "#555",
      marginBottom: 6,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
    },
    formCard: {
      background: "#fff",
      borderRadius: 20,
      padding: 32,
      maxWidth: 740,
      margin: "32px auto",
      boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 24,
      padding: "32px",
    },
    pill: {
      background: "#f0f0f0",
      border: "none",
      borderRadius: 20,
      padding: "4px 12px 4px 14px",
      fontSize: 12,
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      cursor: "default",
    },
  };

  return (
    <div style={s.root}>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div style={s.header}>
        <span style={s.logo}>🌿 Portfolio Admin</span>
        <div style={{ display: "flex", gap: 10 }}>
          {view !== "list" && (
            <button
              style={{
                ...s.btn("#ffffff22", "#fff"),
                border: "1px solid #ffffff44",
              }}
              onClick={() => {
                setView("list");
                setForm(emptyForm);
                setEditId(null);
              }}
            >
              ← Back
            </button>
          )}
          {view === "list" && (
            <button
              style={s.btn("#4F772D")}
              onClick={() => {
                setForm(emptyForm);
                setEditId(null);
                setView("form");
              }}
            >
              + New Project
            </button>
          )}
        </div>
      </div>

      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: 28,
            right: 28,
            zIndex: 9999,
            background: toast.type === "error" ? "#c62828" : "#1b5e20",
            color: "#fff",
            borderRadius: 12,
            padding: "12px 22px",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          {toast.msg}
        </div>
      )}

      {deleteId && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: 32,
              maxWidth: 380,
              width: "90%",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 12 }}>🗑️</div>
            <h3 style={{ margin: "0 0 8px", color: "#132A13" }}>
              Delete Project?
            </h3>
            <p style={{ color: "#777", fontSize: 14, margin: "0 0 24px" }}>
              This action is permanent and will also remove the data from
              Firebase.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <button style={s.outBtn} onClick={() => setDeleteId(null)}>
                Cancel
              </button>
              <button
                style={s.btn("#c62828")}
                onClick={handleDelete}
                disabled={saving}
              >
                {saving ? "Deleting..." : "Haan, Delete Karo"}
              </button>
            </div>
          </div>
        </div>
      )}

      {previewProject && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            zIndex: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 24,
              maxWidth: 700,
              width: "100%",
              maxHeight: "85vh",
              overflow: "auto",
            }}
          >
            <img
              src={previewProject.img}
              alt=""
              style={{
                width: "100%",
                height: 280,
                objectFit: "cover",
                borderRadius: "24px 24px 0 0",
              }}
            />
            <div style={{ padding: 28 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 16,
                }}
              >
                <div>
                  <TagBadge tag={previewProject.tag} />
                  <h2
                    style={{
                      margin: "8px 0 4px",
                      color: "#132A13",
                      fontSize: 24,
                    }}
                  >
                    {previewProject.title}
                  </h2>
                  <p style={{ margin: 0, color: "#777", fontSize: 13 }}>
                    Client: {previewProject.client} · {previewProject.timeline}
                  </p>
                </div>
                <button
                  style={s.outBtn}
                  onClick={() => setPreviewProject(null)}
                >
                  ✕ Close
                </button>
              </div>
              <p style={{ color: "#555", lineHeight: 1.7, marginBottom: 20 }}>
                {previewProject.overview}
              </p>
              {previewProject.features?.length > 0 && (
                <ul
                  style={{ margin: "0 0 20px", padding: 0, listStyle: "none" }}
                >
                  {previewProject.features.map((f, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: 8,
                        padding: "5px 0",
                        fontSize: 14,
                        color: "#444",
                      }}
                    >
                      <span style={{ color: "#4F772D", fontWeight: 700 }}>
                        ✓
                      </span>{" "}
                      {f}
                    </li>
                  ))}
                </ul>
              )}
              {previewProject.gallery?.length > 0 && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(140px, 1fr))",
                    gap: 10,
                  }}
                >
                  {previewProject.gallery.map((g, i) => (
                    <img
                      key={i}
                      src={g}
                      alt=""
                      style={{
                        width: "100%",
                        height: 100,
                        objectFit: "cover",
                        borderRadius: 12,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {view === "list" && (
        <>
          <div
            style={{
              padding: "28px 32px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h1
                style={{
                  margin: 0,
                  color: "#132A13",
                  fontSize: 26,
                  fontWeight: 700,
                }}
              >
                Projects
              </h1>
              <p style={{ margin: "4px 0 0", color: "#888", fontSize: 14 }}>
                {loading
                  ? "Loading..."
                  : `${projects.length} projects are saved in Firebase`}{" "}
              </p>
            </div>
            <button style={s.btn("#f0f0f0", "#555")} onClick={fetchProjects}>
              ↻ Refresh
            </button>
          </div>

          {error && (
            <div
              style={{
                margin: "20px 32px 0",
                background: "#fff3cd",
                border: "1px solid #ffc107",
                borderRadius: 12,
                padding: "14px 18px",
                fontSize: 14,
                color: "#856404",
              }}
            >
              ⚠️ {error}
            </div>
          )}

          {loading ? (
            <div
              style={{
                textAlign: "center",
                padding: 80,
                color: "#aaa",
                fontSize: 15,
              }}
            >
              Loading from Firebase...
            </div>
          ) : projects.length === 0 && !error ? (
            <div style={{ textAlign: "center", padding: 80 }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🏠</div>
              <p style={{ color: "#aaa", fontSize: 16, marginBottom: 20 }}>
                No project found. Add your first project!
              </p>
              <button style={s.btn()} onClick={() => setView("form")}>
                + Add Project
              </button>
            </div>
          ) : (
            <div style={s.grid}>
              {projects.map((p) => (
                <div key={p.id} style={s.card}>
                  <div style={{ position: "relative" }}>
                    <img
                      src={p.img}
                      alt={p.title}
                      style={{
                        width: "100%",
                        height: 180,
                        objectFit: "cover",
                        display: "block",
                      }}
                      onError={(e) => {
                        e.target.src =
                          "https://placehold.co/400x180/e8f5e9/1b5e20?text=No+Image";
                      }}
                    />
                    <div style={{ position: "absolute", top: 12, left: 12 }}>
                      <TagBadge tag={p.tag} />
                    </div>
                  </div>
                  <div style={{ padding: "16px 18px 18px" }}>
                    <h3
                      style={{
                        margin: "0 0 4px",
                        fontSize: 16,
                        color: "#132A13",
                        fontWeight: 600,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        margin: "0 0 10px",
                        color: "#888",
                        fontSize: 12,
                      }}
                    >
                      {p.client || "—"} · {p.timeline || "—"}
                    </p>
                    <p
                      style={{
                        margin: "0 0 16px",
                        color: "#666",
                        fontSize: 13,
                        lineHeight: 1.5,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {p.overview || "No overview"}
                    </p>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button
                        style={{ ...s.btn("#f0faf0", "#1b5e20"), flex: 1 }}
                        onClick={() => setPreviewProject(p)}
                      >
                        👁 Preview
                      </button>
                      <button
                        style={{ ...s.btn("#e8f0fe", "#1565c0"), flex: 1 }}
                        onClick={() => startEdit(p)}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        style={s.btn("#fce8e8", "#c62828")}
                        onClick={() => setDeleteId(p.id)}
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {view === "form" && (
        <div style={{ padding: "0 16px" }}>
          <div style={s.formCard}>
            <h2 style={{ margin: "0 0 24px", color: "#132A13", fontSize: 22 }}>
              {editId ? "✏️ Edit Project" : "➕ Add New Project"}{" "}
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
                marginBottom: 20,
              }}
            >
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={s.label}>Project Title *</label>
                <input
                  style={s.input}
                  placeholder="e.g. Minimalist Villa, Pune"
                  value={form.title}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, title: e.target.value }))
                  }
                />
              </div>
              <div>
                <label style={s.label}>Category</label>
                <select
                  style={s.input}
                  value={form.tag}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, tag: e.target.value }))
                  }
                >
                  {CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={s.label}>Timeline</label>
                <input
                  style={s.input}
                  placeholder="e.g. 3 Months"
                  value={form.timeline}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, timeline: e.target.value }))
                  }
                />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={s.label}>Client Name</label>
                <input
                  style={s.input}
                  placeholder="e.g. Mr. Sharma & Family"
                  value={form.client}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, client: e.target.value }))
                  }
                />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={s.label}>Hero Image URL *</label>
                <input
                  style={s.input}
                  placeholder="https://images.unsplash.com/..."
                  value={form.img}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, img: e.target.value }))
                  }
                />
                {form.img && (
                  <img
                    src={form.img}
                    alt=""
                    style={{
                      marginTop: 8,
                      width: "100%",
                      height: 140,
                      objectFit: "cover",
                      borderRadius: 10,
                    }}
                  />
                )}
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={s.label}>Project Overview</label>
                <textarea
                  style={{ ...s.input, height: 90, resize: "vertical" }}
                  placeholder="Project ke baare mein likho..."
                  value={form.overview}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, overview: e.target.value }))
                  }
                />
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={s.label}>Features / What We Did</label>
              <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                <input
                  style={{ ...s.input, flex: 1 }}
                  placeholder="e.g. Custom Modular Kitchen"
                  value={form.featureInput}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, featureInput: e.target.value }))
                  }
                  onKeyDown={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addFeature())
                  }
                />
                <button style={s.btn()} onClick={addFeature}>
                  + Add
                </button>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {form.features.map((f, i) => (
                  <span key={i} style={s.pill}>
                    {f}
                    <span
                      onClick={() =>
                        setForm((fm) => ({
                          ...fm,
                          features: fm.features.filter((_, j) => j !== i),
                        }))
                      }
                      style={{
                        color: "#c62828",
                        fontWeight: 700,
                        fontSize: 14,
                        cursor: "pointer",
                      }}
                    >
                      ×
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 28 }}>
              <label style={s.label}>Gallery Image URLs</label>
              <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                <input
                  style={{ ...s.input, flex: 1 }}
                  placeholder="https://..."
                  value={form.galleryInput}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, galleryInput: e.target.value }))
                  }
                  onKeyDown={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addGallery())
                  }
                />
                <button style={s.btn()} onClick={addGallery}>
                  + Add
                </button>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                  gap: 8,
                }}
              >
                {form.gallery.map((g, i) => (
                  <div key={i} style={{ position: "relative" }}>
                    <img
                      src={g}
                      alt=""
                      style={{
                        width: "100%",
                        height: 80,
                        objectFit: "cover",
                        borderRadius: 8,
                      }}
                    />
                    <button
                      onClick={() =>
                        setForm((f) => ({
                          ...f,
                          gallery: f.gallery.filter((_, j) => j !== i),
                        }))
                      }
                      style={{
                        position: "absolute",
                        top: 4,
                        right: 4,
                        background: "#c62828",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        width: 20,
                        height: 20,
                        fontSize: 11,
                        cursor: "pointer",
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button
                style={{
                  ...s.btn(),
                  flex: 1,
                  justifyContent: "center",
                  padding: 14,
                  fontSize: 15,
                }}
                onClick={handleSave}
                disabled={saving}
              >
                {saving
                  ? "Saving..."
                  : editId
                    ? "✓ Update Project"
                    : "✓ Save to Firebase"}
              </button>
              <button
                style={{ ...s.outBtn, padding: "14px 24px" }}
                onClick={() => {
                  setView("list");
                  setForm(emptyForm);
                  setEditId(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
