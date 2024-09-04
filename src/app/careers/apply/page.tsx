import React from 'react'

function Apply() {
    return (
        <>
            <div className='max-w-screen-lg mx-auto mt-52'>

                <div className="w-full md:w-96 md:max-w-full mx-auto">
                    <div className="p-6 border border-gray-600 sm:rounded-md bg-gray-800">
                        <form

                        >
                            <label className="block mb-6">
                                <span className="text-gray-300">Your name</span>
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    className="
                                      block
  w-full
  mt-1
  border-gray-600
  rounded-md
  shadow-sm
  focus:border-indigo-300
  focus:ring
  focus:ring-indigo-200
  focus:ring-opacity-50
  bg-transparent
  placeholder-gray-400
  text-gray-300
  "
                                    placeholder="Full-Name"
                                />
                            </label>
                            <label className="block mb-6">
                                <span className="text-gray-300">Email address</span>
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    className="
  block
  w-full
  mt-1
  border-gray-600
  rounded-md
  shadow-sm
  focus:border-indigo-300
  focus:ring
  focus:ring-indigo-200
  focus:ring-opacity-50
  bg-transparent
  placeholder-gray-400
  text-gray-300
  "
                                    placeholder="example@gmail.com"
                                />
                            </label>

                            <label className="block mb-6">
                                <span className="text-gray-300">position Appying for</span>
                                <input
                                    required
                                    name="positon"
                                    type="text"
                                    className="
  block
  w-full
  mt-1
  border-gray-600
  rounded-md
  shadow-sm
  focus:border-indigo-300
  focus:ring
  focus:ring-indigo-200
  focus:ring-opacity-50
  bg-transparent
  placeholder-gray-400
  text-gray-300
  "
                                    placeholder="position"
                                />
                            </label>
                            
                            <label className="block mb-6">
                                <span className="text-gray-300">Years of experience</span>
                                <select
                                    required
                                    name="experience"
                                    className="
  block
  w-full
  mt-1
  border-gray-600
  rounded-md
  shadow-sm
  focus:border-indigo-300
  focus:ring
  focus:ring-indigo-200
  focus:ring-opacity-50
  bg-transparent
  placeholder-gray-400
  text-gray-500
  "
                                >
                                    <option>Less than a year</option>
                                    <option>1 - 2 years</option>
                                    <option>2 - 4 years</option>
                                    <option>4 - 7 years</option>
                                    <option>7 - 10 years</option>
                                    <option>10+ years</option>
                                </select>
                            </label>
                            <label className="block mb-6">
                                <span className="text-gray-300">Tell us more about yourself</span>
                                <textarea
                                    name="message"
                                    className="
  block
  w-full
  mt-1
  border-gray-600
  rounded-md
  shadow-sm
  focus:border-indigo-300
  focus:ring
  focus:ring-indigo-200
  focus:ring-opacity-50
  bg-transparent
  placeholder-gray-400
  text-gray-300"
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
                                    className="
  block
  w-full
  mt-1
  focus:border-indigo-300
  focus:ring
  focus:ring-indigo-200
  focus:ring-opacity-50
  bg-transparent
  placeholder-gray-400
  text-gray-300
  "
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
                                                className="
  text-white
  border-black
  rounded-full
  shadow-sm
  focus:border-indigo-300
  focus:ring
  focus:ring-offset-0
  focus:ring-indigo-200
  focus:ring-opacity-50
  bg-transparent
  placeholder-white
  text-white
  "
                                                checked
                                            />
                                            <span className="ml-2 text-gray-300"
                                            >You'd like to work remotely</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input
                                                name="remote"
                                                value="no"
                                                type="radio"
                                                className="
  text-indigo-600
  border-gray-600
  rounded-full
  shadow-sm
  focus:border-indigo-300
  focus:ring
  focus:ring-offset-0
  focus:ring-indigo-200
  focus:ring-opacity-50
  bg-transparent
  placeholder-gray-400
  text-gray-300
  "
                                            />
                                            <span className="ml-2 text-gray-300"
                                            >You'd prefer to work onsite</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <button
                                    type="submit"
                                    className="
  h-10
  px-5
  text-indigo-100
  bg-blue-500
  bg-grey
  rounded-lg
  transition-colors
  duration-150
  focus:shadow-outline
  hover:bg-blue-600
  duration-150
  "
                                >
                                    Apply
                                </button>
                            </div>
                            <div>
                                <div className="mt-2 text-gray-300 text-right text-xs">
                                    .....
                                    <a href="https://herotofu.com" className="hover:underline" target="_blank"
                                    >Hr@greatertechhub.com</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Apply
