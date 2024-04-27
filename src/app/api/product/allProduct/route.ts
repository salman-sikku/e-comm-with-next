import {dbConnect} from '@/mogoConfig/dbConfig';
import { NextResponse } from 'next/server';
import  Product from '@/models/productModel';

dbConnect();

export async function GET (){
    try {
       const products = await Product.find({});
       return NextResponse.json(
         { 
            success : true,
            status : 200,
            msg : 'Get products successfully',
            products
         }
       ) 
    } catch (error) {
      console.log(error);
      NextResponse.json(
        {
            success : false,
            status : 500,
            msg : 'Something went wrong in getting products',
            error
        }
      )  
    }
}