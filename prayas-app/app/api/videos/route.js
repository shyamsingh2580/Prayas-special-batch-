import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
    
      let ytId = body.youtubeId || "";
        if (body.youtubeId && body.youtubeId.includes("http")) {
            const url = body.youtubeId;
                if (url.includes("v=")) ytId = url.split("v=")[1].split("&")[0];
                    else if (url.includes("youtu.be/")) ytId = url.split("youtu.be/")[1].split("?")[0];
                      }

                        const { data, error } = await supabase.from("videos").insert([{
                            subject: body.subject,
                                chapter: body.chapter,
                                    title: body.title,
                                        youtube_id: ytId,
                                            pdf_link: body.pdfLink || null,
                                              }]).select();

                                                if (error) return NextResponse.json({ error: error.message }, { status: 400 });
                                                  return NextResponse.json({ success: true, video: data[0] });
                                                  }