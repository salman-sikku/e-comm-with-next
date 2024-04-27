import { dbConnect } from '@/mogoConfig/dbConfig';
import { NextResponse, NextRequest } from 'next/server';
import Product from '@/models/productModel';

dbConnect();

export async function GET(req: Request, route: { params: { id: string } }) {
    console.log("GET function called");
    try {
        const id: string = route.params.id;
        // Check if _id is prov_ided
        if (!id) {
            return NextResponse.json({
                success: false,
                status: 400,
                msg: 'Product _id is required'
            });
        }
        
        const product = await Product.findById({_id : id});
        
        // Check if product is found
        if (!product) {
            return NextResponse.json({
                success: false,
                status: 404,
                msg: 'Product not found'
            });
        }

        // Return success response
        return NextResponse.json({
            success: true,
            status: 200,
            msg: 'Product retrieved successfully',
            product
        });
    } catch (error: any) {
        console.error(error);

        // Return error response
        return NextResponse.json({
            success: false,
            status: 500,
            msg: 'Something went wrong in getting product',
            error: error // send only the error message for security reasons
        });
    }
}
