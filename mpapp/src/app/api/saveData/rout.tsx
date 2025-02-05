import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Define the expected structure of the form data
interface FormDataType {
  name: string;
  email: string;
  category: string;
  message: string;
}

// Define the file path where data will be stored
const filePath = path.join(process.cwd(), "data.json");

export async function POST(req: NextRequest) {
  try {
    // Read the request body and validate it
    const body: FormDataType = await req.json();

    // Read existing data from file
    let data: FormDataType[] = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8");
      data = JSON.parse(fileData);
    }

    // Add new data
    data.push(body);

    // Write updated data back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ message: "Data saved successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error saving data", error }, { status: 500 });
  }
}
