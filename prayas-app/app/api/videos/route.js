import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const filePath = path.join(process.cwd(), "data", "videos.json");
function readData() { return JSON.parse(fs.readFileSync(filePath, "utf8")); }
function writeData(data) { fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); }

export async function POST(req) {
  const body = await req.json();
    const data = readData();
      const newVideo = {
          id: Date.now().toString(),
              subject: body.subject,
                  chapter: body.chapter,
                      title: body.title,
                          youtubeId: body.youtubeId,
                              pdfLink: body.pdfLink || "",
                                };
                                  data.videos.push(newVideo);
                                    writeData(data);
                                      return NextResponse.json({ success: true, video: newVideo });
                                      }