"use client"
import React, { useRef } from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function Partnership() {
  const formRef = useRef<HTMLFormElement>(null); 
  
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
    <div className=" mt-20 p-4 md:p-8 shadow-input bg-white dark:bg-black">
    <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
    Partnership Form
    </h2>
    <p className="text-neutral-600 text-2xs  dark:text-neutral-300">
    
    Greatertechhub is a leading IT services provider that caters to all cloud infrastructure and service needs of corporate companies. We leverage our robust IT infrastructure, alongside solutions from global cloud service providers, to deliver comprehensive and integrated cloud services. By collaborating with partners who specialize in technology and business services, we combine our extensive service offerings with the industry-specific knowledge and technical expertise of our partners to create unique value in the digital transformation journeys of businesses.</p>
   
    <h2 className="font-bold text-3xs text-neutral-800 dark:text-neutral-200">
    Join the<b> Greatertechhub Partner Network and together</b>, we can achieve excellence in IT solutions and drive the future of digital transformation.
    </h2>
  
    <form className="my-8" onSubmit={handleSubmit} ref={formRef}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="FullName">Full Name</Label>
            <Input id="FullName" placeholder="Full Name" type="text" name="FullName" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="CompanyName">Company Name</Label>
            <Input id="CompanyName" placeholder="Company Name" type="text" name="CompanyName" />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="PhoneNumber">Phone Number</Label>
            <Input id="PhoneNumber" placeholder="Phone Number" type="number" name="PhoneNumber" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="Reffral">Referral Work Title</Label>
            <Input id="Reffral" placeholder="Domain" type="text" name="Reffral" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="info@gmail.com" type="email" name="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="url">Company URL</Label>
          <Input id="url" placeholder="www.xyz.com" type="url" name="url" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="refDate">Referral Date</Label>
          <Input id="refDate" placeholder=" Date" type="date" name="refDate" />
        </LabelInputContainer>
        <LabelInputContainer>
            <Label htmlFor="document">Documonent Information</Label>
            <Input id="document" placeholder="" type="file" name="document" />
          </LabelInputContainer>
        <LabelInputContainer>
            <Label htmlFor="addInfo">Additional Information</Label>
            <Input id="addInfo" placeholder="Answer Query" type="addInfo" name='addInfo' />
          </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>

        {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */}

        <div className="flex flex-col space-y-4">
          {/* <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>*/}
          {/* <button 
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient /> 
          </button> */}
          {/* <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
             <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              OnlyFans
            </span>
            <BottomGradient /> 
          </button> */}
        </div>
      </form>
  </div>
);
}

const BottomGradient = () => {
return (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);
};

const LabelInputContainer = ({
children,
className,
}: {
children: React.ReactNode;
className?: string;
}) => {
return (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
    
    
  )
}

export default Partnership
