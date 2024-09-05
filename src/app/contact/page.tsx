'use client'
import React from 'react';

const Contact = () => {
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
     
    }
  }

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.2),rgba(0,0,0,.3)), url('/images/sky.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '110vh',
        width: '100%',
      }}
      className="mt-20 overflow-x-hidden"
    >
      <div className="max-w-5xl max-lg:max-w-3xl mx-auto rounded-md bg-transparent backdrop-blur-sm border my-6 font-[sans-serif] py-8">
        <div className="text-center px-6">
          <h2 className="text-gray-100 text-3xl font-extrabold">Contact Us</h2>
          <p className="text-sm text-gray-500 mt-4">
            Have some big idea or brand to develop and need help?
          </p>
        </div>

        <div className="grid lg:grid-cols-3 items-start gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-12">
          <div className="bg-[#011c2b] rounded-lg p-6 h-full max-lg:order-1">
            <h2 className="text-xl text-white">Contact Information</h2>
            <p className="text-sm text-gray-300 mt-4">
              Have some big idea or brand to develop and need help?
            </p>

            <ul className="mt-16 space-y-8">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" viewBox="0 0 479.058 479.058">
                  <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"/>
                </svg>
                <a href="mailto:info@greatertechhub.com" className="text-sm text-gray-100 ml-4">
                  info@greatertechhub.com
                </a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" viewBox="0 0 482.6 482.6">
                  <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zM25.74 104.2c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 7.1 0 11.6-4.3 15.4-8l37-37c6.2-6.2 12.5-9.3 18.7-9.3s12.5 3.2 18.7 9.4l60.1 60.1c8.5 8.5 8.5 19.4-.1 28.1l-14.2 14.2c-4.2 4.2-8.5 8.3-12.8 12.5-7.2 6.9-14.4 14-21.3 22-12.4 14.1-25.9 20.5-43.8 21.7-34.2 2.2-64.1-14.3-86.9-25.7-63.4-30.1-117.4-72.7-162.2-128.9-37.7-45-62.4-86.8-78.5-130.9-9.7-26.3-13.3-48.9-11.6-68.8z"/>
                </svg>
                <a href="tel:+918917104810" className="text-sm text-gray-100 ml-4">
                  +91 9588160069
                </a>
              </li>
            </ul>
            <ul className="flex flex-wrap gap-4 mt-16">
              <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.facebook.com/profile.php?id=61554896472495" target='blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='#fff'
                    viewBox="0 0 24 24">
                    <path
                      d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                      data-original="#000000" />
                  </svg>
                </a>
              </li>
              <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.linkedin.com/company/greatertechhub/mycompany/verification/" target='blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='#fff'
                    viewBox="0 0 511 512">
                    <path
                      d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                      data-original="#000000" />
                  </svg>
                </a>
              </li>
              <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.instagram.com/greatertechhub/" target='blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='#fff'
                    viewBox="0 0 24 24">
                    <path
                      d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                    </path>
                  </svg>
                </a>
              </li>
            </ul> 
          </div>


          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6  backdrop-blur-sm p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative">
                  <label htmlFor="first-name" className="text-gray-200 block">
                    First name
                  </label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    className="mt-2 w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm text-black outline-none "
                  />
                </div>
                <div className="relative">
                  <label htmlFor="last-name" className="text-gray-200 block">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    className="mt-2 w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm text-black outline-none"
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="email" className="text-gray-200 block">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm text-black outline-none"
                />
              </div>
              <div className="relative">
                <label htmlFor="message" className="text-gray-200 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-2 w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm text-black outline-none h-28"
                ></textarea>
              </div>
              <div className="relative">
                <button
                  type="submit"
                  className="py-2 px-4 text-sm bg-[#1c9cf6] text-gray-100 rounded-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
