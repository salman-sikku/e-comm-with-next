import {dbConnect} from '@/mogoConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import Product from '@/models/productModel';

dbConnect();

export async function POST(request : NextRequest){
   try {
    const reqBody = await request.json();
    const { name, description, price, imgUrl, bgcolor, isSpecial} = reqBody ;

    const product = await Product.create({ name, description, price, imgUrl, bgcolor, isSpecial});
    return NextResponse.json({
      success : true,
      msg : 'Product is create successfully',
      status : 200,
      product
    })
   } catch (error) {
     console.log(error);
     NextResponse.json({
      success : false,
      msg : 'Error in creating product',
      status : 500,
     })
   }
}