import Eyes from '@/components/Eyes'
import React from 'react'

function About2() {
  return (
    <div>

      <div className='py-32  mx-auto min-h-[50vh] z-0'><Eyes /></div>


      <section className="overflow-hidden bg-white py-8 sm:py-16 mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-0">
              <div className="lg:max-w-lg">
                {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Produce faster</h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pl-10 pt-0">Our expertise</p>
                {/* <p className="mt-6 text-lg leading-8 text-gray-600">We've built an API that allows you to scale your podcast
            production workflow.
          </p> */}

                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none px-1">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      Cutting-Edge Technology:
                    </dt>

                    <dd className="inline"> We use the latest technologies to provide innovative and efficient IT solutions.
                    </dd>
                  </div>

                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">

                      Proven Track Record:
                    </dt>
                    <dd className="inline"> Our successful projects and satisfied clients showcase our reliability.</dd>
                  </div>

                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      Comprehensive Support: </dt>

                    <dd className="inline">We tailor solutions to your needs and offer exceptional support..


                    </dd>
                  </div>

                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      Customized Solutions: </dt>

                    <dd className="inline">Personalized IT strategies with customized solutions for your business success.
                    </dd>
                  </div>

                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      Expert Team:</dt>

                    <dd className="inline"> Our team comprises seasoned professionals with extensive experience in various IT fields, ensuring high-quality service and expert guidance.


                    </dd>
                  </div>
                </dl>

              </div>

            </div><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product screenshot" className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="1280" height="720px" />
          </div>
        </div>
      </section>
    </div>

  )
}

export default About2
