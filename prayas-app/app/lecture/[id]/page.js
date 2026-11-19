export const dynamic = 'force-dynamic';
import Link from "next/link";
import fs from "fs";
import path from "path";

export default async function LecturePage(props) {
  const params = await props.params;
    const id = params.id;

      const filePath = path.join(process.cwd(), "data", "videos.json");
        const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
          const video = data.videos.find((v) => v.id === id);

            if (!video) {
                return (
                      <main className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">
                              <p>Lecture not found.</p>
                                    </main>
                                        );
                                          }

                                            return (
                                                <main className="min-h-screen bg-[#0f172a] text-white">
                                                      <header className="border-b border-gray-800 bg-[#0f172a]/90 backdrop-blur-md sticky top-0 z-50">
                                                              <div className="max-w-6xl mx-auto px-6 py-4">
                                                                        <Link href={`/subject/${video.subject}`} className="text-gray-400 hover:text-white transition">← Back to {video.subject}</Link>
                                                                                </div>
                                                                                      </header>
                                                                                            
                                                                                                  <div className="max-w-5xl mx-auto py-8 px-6">
                                                                                                          <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                                                                                                                    <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${video.youtubeId}`} title={video.title} allowFullScreen />
                                                                                                                            </div>
                                                                                                                                    
                                                                                                                                            <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#1e293b] p-6 rounded-2xl border border-gray-700">
                                                                                                                                                      <div>
                                                                                                                                                                  <h1 className="text-2xl font-bold">{video.title}</h1>
                                                                                                                                                                              <p className="text-gray-400 mt-1">{video.subject} • {video.chapter}</p>
                                                                                                                                                                                        </div>
                                                                                                                                                                                                  
                                                                                                                                                                                                            {video.pdfLink && (
                                                                                                                                                                                                                        <a href={video.pdfLink} target="_blank" className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition flex items-center gap-2">
                                                                                                                                                                                                                                      📄 Download Notes
                                                                                                                                                                                                                                                  </a>
                                                                                                                                                                                                                                                            )}
                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                              </main>
                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                }