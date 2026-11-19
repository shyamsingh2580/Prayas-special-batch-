"use client";
import { useState, useEffect } from "react";

const ADMIN_PASSWORD = "prayas2026";

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
    const [pass, setPass] = useState("");
      const [videos, setVideos] = useState([]);
        const [form, setForm] = useState({
            subject: "Physics",
                chapter: "",
                    title: "",
                        youtubeLink: "",
                            pdfLink: "",
                              });

                                async function loadVideos() {
                                    const res = await fetch("/api/list");
                                        const data = await res.json();
                                            setVideos(data.videos);
                                              }

                                                useEffect(() => {
                                                    if (loggedIn) loadVideos();
                                                      }, [loggedIn]);

                                                        function extractYoutubeId(link) {
                                                            const match = link.match(/(?:youtu\.be\/|v=)([^&]+)/);
                                                                return match ? match[1] : link;
                                                                  }

                                                                    async function handleAdd(e) {
                                                                        e.preventDefault();
                                                                            await fetch("/api/videos", {
                                                                                  method: "POST",
                                                                                        headers: { "Content-Type": "application/json" },
                                                                                              body: JSON.stringify({ ...form, youtubeId: extractYoutubeId(form.youtubeLink) }),
                                                                                                  });
                                                                                                      setForm({ ...form, chapter: "", title: "", youtubeLink: "", pdfLink: "" });
                                                                                                          loadVideos();
                                                                                                            }

                                                                                                              if (!loggedIn) {
                                                                                                                  return (
                                                                                                                        <main className="min-h-screen flex items-center justify-center bg-gray-50">
                                                                                                                                <div className="bg-white p-8 rounded shadow w-80">
                                                                                                                                          <h1 className="text-xl font-bold mb-4">Admin Login</h1>
                                                                                                                                                    <input type="password" placeholder="Password" className="border p-2 w-full mb-3 rounded" value={pass} onChange={(e) => setPass(e.target.value)} />
                                                                                                                                                              <button onClick={() => { if (pass === ADMIN_PASSWORD) setLoggedIn(true); else alert("Wrong password"); }} className="bg-blue-600 text-white w-full py-2 rounded">Login</button>
                                                                                                                                                                      </div>
                                                                                                                                                                            </main>
                                                                                                                                                                                );
                                                                                                                                                                                  }

                                                                                                                                                                                    return (
                                                                                                                                                                                        <main className="min-h-screen bg-gray-50 p-6">
                                                                                                                                                                                              <div className="max-w-3xl mx-auto">
                                                                                                                                                                                                      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
                                                                                                                                                                                                              <form onSubmit={handleAdd} className="bg-white p-6 rounded shadow mb-8 grid gap-3">
                                                                                                                                                                                                                        <select className="border p-2 rounded" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                                                                                                                                                                                                                                    <option>Physics</option>
                                                                                                                                                                                                                                                <option>Chemistry</option>
                                                                                                                                                                                                                                                            <option>Math</option>
                                                                                                                                                                                                                                                                      </select>
                                                                                                                                                                                                                                                                                <input className="border p-2 rounded" placeholder="Chapter (e.g. Kinematics)" value={form.chapter} onChange={(e) => setForm({ ...form, chapter: e.target.value })} required />
                                                                                                                                                                                                                                                                                          <input className="border p-2 rounded" placeholder="Lecture title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
                                                                                                                                                                                                                                                                                                    <input className="border p-2 rounded" placeholder="YouTube link" value={form.youtubeLink} onChange={(e) => setForm({ ...form, youtubeLink: e.target.value })} required />
                                                                                                                                                                                                                                                                                                              <input className="border p-2 rounded" placeholder="Google Drive PDF link (optional)" value={form.pdfLink} onChange={(e) => setForm({ ...form, pdfLink: e.target.value })} />
                                                                                                                                                                                                                                                                                                                        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Lecture</button>
                                                                                                                                                                                                                                                                                                                                </form>

                                                                                                                                                                                                                                                                                                                                        <h2 className="text-lg font-bold mb-3">All Lectures ({videos.length})</h2>
                                                                                                                                                                                                                                                                                                                                                <div className="grid gap-2">
                                                                                                                                                                                                                                                                                                                                                          {videos.map((v) => (
                                                                                                                                                                                                                                                                                                                                                                      <div key={v.id} className="bg-white p-3 rounded shadow">
                                                                                                                                                                                                                                                                                                                                                                                    <p className="font-semibold">{v.title}</p>
                                                                                                                                                                                                                                                                                                                                                                                                  <p className="text-sm text-gray-500">{v.subject} • {v.chapter}</p>
                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                        ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                          </main>
                                                                                                                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                                                                                                                            }