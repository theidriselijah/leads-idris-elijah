import HeaderNav from '@/components/HeaderNav'
import Image from 'next/image'
import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  return (
    <main>
      <Head>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </Head>
      <HeaderNav />
      <section className="bg-[url('/assets/hero-image.jpg')] bg-[#1E2D44] bg-opacity-60 bg-blend-overlay bg-[center_top_-13.5rem] bg-no-repeat w-full h-[422px] flex flex-col justify-center items-center text-center text-[#FFFFFF]">
        <h1 className="text-[36px]">Hot Local Leads</h1>
        <p className="text-[24px]">Guaranteed</p>
      </section>

      {/* Lead Magnet section */}
      <section className="bg-[#1E2D44] text-[#FFFFFF] text-center px-[20px] py-[40px]">
        <div className="mb-[40px]">
          <h2 className="text-[30px] mb-[20px] font-medium">
            Free Google Setup
          </h2>
          <p className="mb-[20px] text-[20px]">
            I&apos;ll optimize your{' '}
            <span className="text-[#FF9801] font-bold">
              Google Business Profile
            </span>{' '}
            for maximum visibility. Totally free - no strings attached.
          </p>
          <form className="mb-[20px]">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="bg-[#FCFCFC] text-center rounded w-full h-[39px] mb-[20px] text-[15px]"
            />
            <button className="secondary-button w-[258px] h-[42px] text-[17px]">
              Claim Your Free Setup
            </button>
          </form>
          <p className="">
            I&apos;ll contact you within one business day to complete your
            setup.
          </p>
        </div>

        <div>
          <h2 className="text-[30px] mb-[20px] font-bold">
            What&apos;s The Catch?
          </h2>
          <p className="para-text mb-[10px]">
            I do this all the time and know exactly where most people make
            mistakes.
          </p>
          <p className="para-text mb-[10px]">
            Honestly, it doesnt&apos;t take me that long and can make a huge
            difference in people finding your business.
          </p>
          <p className="para-text mb-[10px]">
            Sometimes people also want me to continue helping them get more
            reviews, traffic, and leads, but that&apos;s entirely up to you.
          </p>
          <p className="para-text">
            It&apos;s just something I do because it helps people.
          </p>
        </div>
      </section>

      {/* Local Search Section */}
      <section className="flex flex-col justify-center items-center text-center px-[20px] py-[40px]">
        <div className="mb-[40px] flex flex-col justify-center items-center">
          <h2 className="text-[30px] mb-[20px] font-bold">
            Local Searches Are Booming
          </h2>
          <p className="para-text mb-[20px]">
            <span className="font-bold">
              &quot;Near me&quot; searches have increased 900%
            </span>{' '}
            in the last two years. Here are some other stats you should know.
          </p>
          <p className="para-text mb-[10px]">
            46% of all searches on Google are now local
          </p>
          <p className="para-text mb-[10px]">
            97% of Google&apos;s users have searched for local businesses
          </p>
          <p className="para-text mb-[10px]">
            88% of people who do a local search call the business within one day
          </p>
          <p className="para-text mb-[10px]">
            86% of Google Maps customers are looking for local businesses
          </p>
          <p className="para-text mb-[20px]">
            Mobile devices influence more than $1.4 trillion in local sales
          </p>
          <p className="para-text mb-[20px] font-bold">
            I&apos;ll get you a bigger piece of this pie.
          </p>
          <button className="primary-button w-[280px] h-[45px]">
            <Image
              src="/assets/right-arrow.png"
              alt="right arrow"
              width={19}
              height={16}
            />
            Get Your Marketing Blueprint
          </button>
        </div>

        <div>
          <Image
            src="/assets/local-search-map.webp"
            alt="local search map"
            width={250}
            height={191}
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="text-center bg-[#F1F4F9] px-[20px] py-[40px]">
        <div className="leading-none mb-[40px]">
          <h2 className="text-[48px] font-bold">Idris Elijah</h2>
          <p className="text-[24px] text-[#FF9801] font-light">
            Hot Local Leads
          </p>
        </div>

        <div>
          <h2 className="text-[30px] mb-[20px] font-bold">How It Works</h2>
          <p className="para-text mb-[10px]">
            <span className="font-bold">Attract more leads</span> with my
            proprietary blend of organic visibility, local ads, and online
            authority.
          </p>
          <p className="para-text mb-[10px]">
            <span className="font-bold">Bottom line:</span> Your business
            dominates the &quot;near me&quot; searches in your area. You get a
            steady flow of hot leads.
            <span className="text-[#FF9801]"> Guaranteed.</span>
          </p>
        </div>
      </section>

      {/* Strategy section */}
      <section className="text-center px-[20px] py-[40px]">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-[40px]">
            <h2 className="text-[30px] font-bold mb-[40px]">
              Organic Visibility
            </h2>
            <p className="para-text mb-[10px]">
              I put your business in front of people who are actively searching
              for businesses like yours right now.
            </p>
            <p className="para-text mb-[10px]">
              I optimize and manage your
              <span className="font-bold"> Google Business Profile</span> so
              your business shows up and ranks well on Google.
            </p>
            <p className="para-text">
              I also list and actively manage your business profile in several
              other popular business directories tailored to your industry.
            </p>
          </div>

          <div>
            <Image
              src="/assets/personal-trainer-search.webp"
              alt="personal trainer search"
              width={250}
              height={163}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="mb-[40px]">
            <h2 className="text-[30px] font-bold my-[40px]">Click To Call</h2>
            <p className="para-text">
              In addition to boosting your organic rankings, I also upgrade your
              business listing so customers can click to call you directly from
              the top of the search results.
            </p>
          </div>

          <div>
            <Image
              src="/assets/pd-customer-calls.webp"
              alt="pd customer calls"
              width={250}
              height={163}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="mb-[40px]">
            <h2 className="text-[30px] font-bold my-[40px]">
              Online Authority
            </h2>
            <p className="para-text">
              <span className="font-bold">
                Consistency is the key to online authority.
              </span>{' '}
              We make sure you have a Google-approved, mobile-friendly website
              that accurately reflects your location information, hours of
              operation, and service descriptions. We actively monitor your
              information to ensure that it is always consistent and
              authoritative everywhere your business is listed online.
            </p>
          </div>

          <div>
            <Image
              src="/assets/responsive-web-design.webp"
              alt="responsive web design"
              width={250}
              height={156}
            />
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="flex flex-col justify-center items-center bg-[#F1F4F9] text-center px-[20px] py-[40px]">
        <div className="flex flex-col justify-center items-center mb-[40px]">
          <Image
            src="/assets/results-guaranteed.webp"
            alt="results guaranteed"
            width={250}
            height={250}
          />
        </div>

        <div>
          <h2 className="text-[30px] font-bold mb-[20px]">
            Our Performance Guarantee
          </h2>
          <p className="para-text font-bold mb-[10px]">
            I guarantee you will get at least 15 qualified leads per month
            within 6 months of working with me. Or I&apos;ll work with you for
            free until we do.
          </p>
          <p className="para-text mb-[20px]">
            Since we guarantee a significant boost in your business, we
            prescreen our partners before getting started. We need to verify how
            many leads per month your business can handle, and that your team
            will be available to respond promptly to the leads we send you.
          </p>
        </div>
        <button className="primary-button w-[280px] h-[45px]">
          <Image
            src="/assets/right-arrow.png"
            alt="right arrow"
            width={19}
            height={16}
          />
          Get Your Marketing Blueprint
        </button>
      </section>

      {/* About Me Section */}
      <section className="flex flex-col justify-center items-center text-center px-[20px] py-[40px]">
        <div>
          <Image
            src="/assets/about-me.jpeg"
            alt="idris elijah"
            width={250}
            height={250}
            className="rounded-full mb-[40px]"
          />
        </div>

        <div>
          <h2 className="text-[30px] font-bold mb-[20px]">About Me</h2>
          <p className="para-text mb-[20px]">
            My name is Idris Elijah, and I specifically help business
            professionals <span className="font-bold">land local clients</span>{' '}
            without feeling like they&apos;re gambling their money with
            garden-variety web agencies.
          </p>
          <p className="para-text mb-[20px]">
            If you want to increase your visibility, build trust, and
            differentiate your business from the competition, even if
            they&apos;ve been around longer than you have, this is for you.
          </p>
          <p className="para-text">
            As a business owner myself, I know that it is important to get fast
            results. I also know that you don&apos;t have the time to stay on
            the bleeding edge of everything that&apos;s constantly changing in
            the world of digital marketing. So,{' '}
            <span className="font-bold">
              I take care of everything for you.
            </span>
          </p>
        </div>
      </section>

      {/* Review Section */}
      <section className="flex flex-col justify-center items-center text-center px-[20px] py-[40px] bg-[#F1F4F9]">
        <div>
          <h2 className="text-[30px] font-bold mb-[40px]">
            What People Are Saying...
          </h2>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center mb-[40px]">
            <Image
              src="/assets/wiley.jpg"
              alt="wiley"
              width={250}
              height={250}
              className="rounded-full mb-[20px]"
            />
            <p className="para-text mb-[10px]">
              I knew within 5 minutes that you were the one for the job, but
              this exceeds even my wildest dreams! I&apos;m blown away!
            </p>
            <p className="para-text font-bold">Dr. Jimmy Wiley M.D.</p>
          </div>

          <div className="flex flex-col justify-center items-center mb-[40px]">
            <Image
              src="/assets/randy.jpg"
              alt="randy"
              width={250}
              height={250}
              className="rounded-full mb-[20px]"
            />
            <p className="para-text mb-[10px]">
              I knew within 5 minutes that you were the one for the job, but
              this exceeds even my wildest dreams! I&apos;m blown away!
            </p>
            <p className="para-text font-bold">Dr. Jimmy Wiley M.D.</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/grace.jpg"
              alt="grace"
              width={250}
              height={250}
              className="rounded-full mb-[20px]"
            />
            <p className="para-text mb-[10px]">
              I knew within 5 minutes that you were the one for the job, but
              this exceeds even my wildest dreams! I&apos;m blown away!
            </p>
            <p className="para-text font-bold">Dr. Jimmy Wiley M.D.</p>
          </div>
        </div>

        <div className="mt-[40px]">
          <button className="primary-button w-[280px] h-[45px]">
            <Image
              src="/assets/right-arrow.png"
              alt="right arrow"
              width={19}
              height={16}
            />
            Get Your Marketing Blueprint
          </button>
        </div>
      </section>

      {/* Ideal Client Section */}
      <section className="text-center px-[20px] py-[40px]">
        <div className="mb-[40px]">
          <h2 className="text-[30px] font-bold mb-[40px]">Who This Is For</h2>
          <p className="para-text mb-[10px]">
            If you need customers from within driving distance of your location,
            this is for you.
          </p>
          <p className="para-text mb-[10px]">
            This is not for online-only businesses.
          </p>
          <p className="para-text font-bold mb-[20px]">
            Our clients have the following traits:
          </p>
          <p className="para-text font-bold mb-[10px]">Quality:</p>
          <p className="para-text mb-[10px]">
            You have to provide high-quality service.
          </p>
          <p className="para-text font-bold mb-[10px]">Responsiveness:</p>
          <p className="para-text mb-[10px]">
            You must respond promptly to the leads we send you.
          </p>
          <p className="para-text font-bold mb-[10px]">Integrity:</p>
          <p className="para-text">
            We hold ourselves to the highest standards of honesty and integrity
            and expect the same from our clients.
          </p>
        </div>

        <div>
          <h2 className="text-[30px] font-bold mb-[20px]">
            We work with clients in:
          </h2>
          <p className="para-text mb-[10px]">Health and Wellness</p>
          <p className="para-text mb-[10px]">Home Services</p>
          <p className="para-text mb-[10px]">Tax Preparation Services</p>
          <p className="para-text mb-[10px]">Accounting & Bookkeeping</p>
          <p className="para-text mb-[10px]">Yoga Studios</p>
          <p className="para-text mb-[10px]">Spas, Salons, and Stylists</p>
          <p className="para-text">...and more</p>
        </div>
      </section>

      {/* Marketing Blueprint Section */}
      <section className="flex flex-col justify-center items-center text-center px-[20px] py-[40px] bg-[#F1F4F9]">
        <div className="mb-[40px]">
          <div className="mb-[40px]">
            <h2 className="text-[30px] font-bold mb-[40px]">
              Get Your Marketing Blueprint
            </h2>
            <p className="para-text mb-[10px]">
              Get your local marketing blueprint using today&apos;s top lead
              generation tactics.
            </p>
            <p className="para-text mb-[10px]">
              <span className="font-bold">On this call</span>, you will
              discover:
            </p>
            <p className="para-text mb-[10px]">
              Multiple new ways to get more visibility for your business
            </p>
            <p className="para-text mb-[10px]">
              How to build trust and authority in your community even if
              you&apos;re just getting started.
            </p>
            <p className="para-text mb-[10px]">
              How to get clients to choose to work with you even before you talk
              to them.
            </p>
            <p className="para-text">
              If you have the capacity to serve more customers, this is going to
              be the best 30-minute call you&apos;ve ever had talking about your
              business.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/google-calendar-icon.png"
              alt="google calendar incon"
              width={250}
              height={250}
              className="mb-[40px]"
            />
            <Image
              src="/assets/down-arrow.png"
              alt="down arrow"
              width={33}
              height={41}
            />
          </div>
        </div>
        <div>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/idriselijah/marketing-blueprint"
            style={{ height: 1050 }}
          ></div>
        </div>
      </section>
    </main>
  )
}
