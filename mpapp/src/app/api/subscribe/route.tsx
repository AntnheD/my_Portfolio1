import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// File path for `news.json`
const newsFilePath = path.join(process.cwd(), "news.json");

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    // Read existing emails
    let emails: string[] = [];
    if (fs.existsSync(newsFilePath)) {
      const fileData = fs.readFileSync(newsFilePath, "utf-8");
      emails = JSON.parse(fileData);
    }

    // Avoid duplicate emails
    if (emails.includes(email)) {
      return NextResponse.json({ message: "Email already subscribed" }, { status: 409 });
    }

    // Append new email
    emails.push(email);
    fs.writeFileSync(newsFilePath, JSON.stringify(emails, null, 2));

    return NextResponse.json({ message: "Email subscribed successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server error", error }, { status: 500 });
  }
}
