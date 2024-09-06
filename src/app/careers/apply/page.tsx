'use client'
import React, { useRef } from "react";

function Apply() {

    const formRef = useRef<any>(null); 

    async function handleSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target);
       
        formData.append("access_key", "8739b33b-939a-4751-ad7b-f09ad3a1c955");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        });
     
        const result = await response.json();
        if (result.success) {
          console.log(result);
          alert("Message Sent Sucessfully")
          if(formRef.current){
            formRef.current.reset()
          }
         
        }
      }
    return (
        <>
            <div className="max-w-screen-lg mx-auto px-4  sm:px-0 mt-20">
                <div className="w-full mx-auto">
                    <h1  className='text-3xl text-[#F5EBEB] w-full text-center py-8 font-semibold'>Apply Now</h1>
                    <div className="p-6 border border-gray-600 sm:rounded-md bg-gray-800">
                        <form 
                        ref={formRef}
                        onSubmit={handleSubmit}
                        >
                            <label className="block mb-6">
                                <span className="text-gray-300">Full name</span>
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    className="block w-full mt-1 border-gray-600 rounded-sm shadow-sm bg-transparent placeholder-gray-400 text-gray-300 border-b outline-none"
                                    placeholder="Full-Name"
                                />
                            </label>
                            <label className="block mb-6">
                                <span className="text-gray-300">Email address</span>
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    className="block w-full mt-1 border-gray-600 rounded-sm shadow-sm bg-transparent placeholder-gray-400 text-gray-300 border-b outline-none"
                                    placeholder="example@gmail.com"
                                />
                            </label>
                            <label className="block mb-6">
                                <span className="text-gray-300">Position Applying for</span>
                                <input
                                    required
                                    name="position"
                                    type="text"
                                    className="block w-full mt-1 border-gray-600 rounded-sm shadow-sm bg-transparent placeholder-gray-400 text-gray-300 border-b outline-none"
                                    placeholder="Position"
                                />
                            </label>
                            <label className="block mb-6">
                                <span className="text-gray-300">Years of experience</span>
                                <select
                                    required
                                    name="experience"
                                    className="block w-full mt-1 border-gray-600 rounded-sm shadow-sm bg-transparent placeholder-gray-400 text-gray-400 border-b outline-none"
                                >
                                    <option className="bg-[#384a63]">Less than a year</option>
                                    <option className="bg-[#384a63]" >1 - 2 years</option>
                                    <option className="bg-[#384a63]" >2 - 4 years</option>
                                    <option className="bg-[#384a63]" >4 - 7 years</option>
                                    <option className="bg-[#384a63]" >7 - 10 years</option>
                                    <option className="bg-[#384a63]" >10+ years</option>
                                </select>
                            </label>
                            <label className="block mb-6">
                                <span className="text-gray-300">Tell us more about yourself</span>
                                <textarea
                                    name="message"
                                    className="block w-full mt-1 border-gray-600 rounded-sm shadow-sm bg-transparent placeholder-gray-400 text-gray-300 border-b outline-none"
                                    rows={3}
                                    placeholder="What motivates you?"
                                ></textarea>
                            </label>
                            <label className="block mb-6">
                                <span className="text-gray-300">Your CV</span>
                                <input
                                    required
                                    name="cv"
                                    type="file"
                                    className="block w-full mt-1 border-gray-600 rounded-sm shadow-sm bg-transparent placeholder-gray-400 text-gray-300 border-b outline-none"
                                />
                            </label>
                            <div className="mb-6">
                                <div className="mt-2">
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input
                                                name="remote"
                                                value="yes"
                                                type="radio"
                                                className="text-white border-black rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-white"
                                                checked
                                            />
                                            <span className="ml-2 text-gray-300">
                                                You'd like to work remotely
                                            </span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input
                                                name="remote"
                                                value="no"
                                                type="radio"
                                                className="text-indigo-600 border-gray-600 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-gray-400"
                                            />
                                            <span className="ml-2 text-gray-300">
                                                You'd prefer to work onsite
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <button
                                    type="submit"
                                    className="h-10 px-5 text-indigo-100 bg-blue-500 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-blue-600"
                                >
                                    Apply
                                </button>
                            </div>
                            <div>
                                <div className="mt-2 text-gray-300 text-right text-xs">
                                    <a
                                        href="mailto:hr@greatertechhub.com"
                                        className="hover:underline"
                                    >
                                        hr@greatertechhub.com
                                    </a>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Apply;
