import Link from "next/link";
import fs from "fs";
import path from "path";

export default async function SubjectPage(props) {
  // Naya tarika URL param nikalne ka
    const params = await props.params;
      const subject = decodeURIComponent(params.subject);
        
          const filePath = path.join(process.cwd(), "data", "videos.json");
            const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

              const videos = data.videos.filter((v) => v.subject === subject);
                const chapters = [...new Set(videos.map((v) => v.chapter))];

                  return (
                      <main className="min-h-screen bg-[#0f172a] text-white">
                            <header className="border-b border-gray-800 bg-[#0f172a]/90 backdrop-blur-md sticky top-0 z-50">
                                    <div className="max-w-6xl mx-auto px-6 py-4">
                                              <Link href="/batch" className="text-gray-400 hover:text-white transition">← Back to Subjects</Link>
                                                      </div>
                                                            </header>

                                                                  <div className="max-w-4xl mx-auto py-12 px-6">
                                                                          <h1 className="text-3xl font-bold mb-8 text-blue-400">{subject || "Subject"} Lectures</h1>
                                                                                  
                                                                                          {chapters.length === 0 && <p className="text-gray-400">No lectures added yet. Admin panel se add karo.</p>}
                                                                                                  
                                                                                                          {chapters.map((ch) => (
                                                                                                                    <div key={ch} className="mb-8">
                                                                                                                                <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">{ch}</h2>
                                                                                                                                            <div className="grid gap-3">
                                                                                                                                                          {videos.filter((v) => v.chapter === ch).map((v) => (
                                                                                                                                                                          <Link key={v.id} href={`/lecture/${v.id}`} className="bg-[#1e293b] p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition flex items-center gap-4 group">
                                                                                                                                                                                            <div className="bg-blue-500/20 text-blue-400 p-3 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition">▶</div>
                                                                                                                                                                                                              <span className="font-medium">{v.title}</span>
                                                                                                                                                                                                                              </Link>
                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                          ))}
                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                    </main>
                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                      }