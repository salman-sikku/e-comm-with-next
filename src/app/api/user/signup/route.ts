import { dbConnect } from "@/mogoConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { doHashPassword } from "@/helper/hashPassword";

dbConnect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    let existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        { status: 400 }
      );
    }

    let hashpassword = await doHashPassword(password);

    let user = await new User({
      username,
      email,
      password: hashpassword,
    }).save();


    return NextResponse.json({
      success: true,
      msg: "User successfully signup",
      user,
    });
  } catch (error) {
    console.log(error);
    NextResponse.json(
      {
        success: false,
        msg: "Error in signup",
        error,
      },
      { status: 502 }
    );
  }
}
