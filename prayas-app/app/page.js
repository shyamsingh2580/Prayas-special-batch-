import Link from "next/link";

export default function Home() {
  return (
      <main className="min-h-screen bg-[#0f172a] text-white">
            <header className="border-b border-gray-800 bg-[#0f172a]/90 backdrop-blur-md sticky top-0 z-50">
                    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                              <h1 className="text-xl font-bold text-blue-500">Prayas Special Batch</h1>
                                        <Link href="/admin" className="text-sm bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition">
                                                    Admin
                                                              </Link>
                                                                      </div>
                                                                            </header>
                                                                                  
                                                                                        <section className="max-w-6xl mx-auto px-6 py-24 text-center">
                                                                                                <span className="bg-blue-500/10 text-blue-400 px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block border border-blue-500/20">
                                                                                                          Dropper Batch 2026
                                                                                                                  </span>
                                                                                                                          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                                                                                                                                    Padhai Ab Aur Bhi <span className="text-blue-500">Aasan</span>
                                                                                                                                            </h2>
                                                                                                                                                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                                                                                                                                                              Physics, Chemistry aur Math ke premium lectures aur notes ek hi jagah. Ghar baithe apne sapno ko poora karo.
                                                                                                                                                                      </p>
                                                                                                                                                                              <Link href="/batch" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-blue-500/30 transition transform hover:-translate-y-1 inline-block">
                                                                                                                                                                                        Browse Lectures →
                                                                                                                                                                                                </Link>
                                                                                                                                                                                                      </section>
                                                                                                                                                                                                          </main>
                                                                                                                                                                                                            );
                                                                                                                                                                                                            }