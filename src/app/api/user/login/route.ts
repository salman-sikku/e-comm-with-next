import { dbConnect } from "@/mogoConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { comparePassword } from "@/helper/hashPassword";
import jwt from 'jsonwebtoken';

dbConnect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          msg: "Invalid user",
        },
        { status: 402 }
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          msg: "Email is not registered",
        },
        { status: 402 }
      );
    }

    const checkPassword = await comparePassword(password, user.password);
    if (!checkPassword) {
      return NextResponse.json(
        {
          success: false,
          msg: "Invalid password",
        },
        { status: 402 }
      );
    }
    
    const jsonWebKey: any = process.env.JSON_WEB_KEY || '';
    const token: any = jwt.sign({_id: user._id}, jsonWebKey, {expiresIn : '28d'});

    const response = NextResponse.json({
      success : false,
      msg : 'User login successFully',
      token
    })
    

    return response

  } catch (error: any) {
    console.log(error);
    NextResponse.json(
      {
        success: false,
        msg: "something went wrong in login",
        error,
      },
      { status: 502 }
    );
  }
}
