"use client";

import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function page() {
    const [getImg, setgetImg] = useState('');
    const [imgUrl, setimgUrl] = useState('');
    const [name, setName] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState(0);
    const [bgcolor, setbgcolor] = useState('');

    const handlerSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/product/createproduct', { imgUrl, name, description, price, bgcolor });
            
            alert(data.msg)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <div className="w-full h-screen flex justify-center items-center ">
                <div className="w-[70%] border">
                    <div className="flex flex-col items-center justify-between">
                        <UploadButton
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => {
                                // Check if the response contains files
                                if (res && res.length > 0) {
                                    // Extract the URL of the first uploaded file
                                    const uploadedImageUrl = res[0].url;
                                    // Set the image URL in the state
                                    setgetImg(uploadedImageUrl);
                                    alert("Upload Completed");
                                } else {
                                    alert("No files found in the response");
                                }
                            }}
                            onUploadError={(error: Error) => {
                                // Handle upload errors
                                alert(`ERROR! ${error.message}`);
                            }}
                        />
                        {/* Display the uploaded image if imageUrl is not empty */}
                        {getImg && (
                            <>
                                <Image src={getImg} alt="Uploaded" width={150} height={150} />
                                <p>{getImg}</p>
                            </>
                        )}

                        <form className="max-w-sm mx-auto w-[100%]" onSubmit={handlerSubmit}>
                            <input
                                type="text"
                                value={imgUrl}
                                onChange={(e) => setimgUrl(e.target.value)}
                                className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="img url"
                                required
                            />
                            <input type="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border  mt-2  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="product name" required />
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setdescription(e.target.value)}
                                rows={4}
                                className="block mt-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="write product description"
                                required
                            />
                            <input
                                type="number"
                                value={price || ''}
                                onChange={(e) => {
                                    const newValue = parseFloat(e.target.value);
                                    if (!isNaN(newValue)) {
                                        setprice(newValue);
                                    }
                                }}
                                aria-describedby="helper-text-explanation"
                                className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="write price"
                                required
                            />
                            <input type="text" value={bgcolor} onChange={(e) => setbgcolor(e.target.value)} aria-describedby="helper-text-explanation" className="  mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="tell us bgcolor" required />
                            <button type="submit" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 mt-2">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
