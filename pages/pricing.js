import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';


import { useSession, signIn, signOut } from "next-auth/react";

const styles = {
  content: {
    padding: 32,
  },
  infoTextContainer: {
    marginBottom: 32,
  },
}

const IndexHomePage = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    if (session) {
      setUser(session.user);
    }
  }, [session]);

  const handleLogin = async () => {
    await useSession().signIn();
  };

  const handleLogout = async () => {
    await useSession().signOut();
  };
  return (
    <div>
      <div className="">
  <div className="sticky top-0 z-[1000] block bg-[#020d24] py-3 [border-bottom:1px_solid_rgb(91,_103,_130)]">
    <div className="px-5 md:px-10">
      <div className="mx-auto flex w-full max-w-7xl auto-cols-auto grid-cols-[auto_max-content] flex-row items-center justify-between gap-[0px] lg:grid-cols-[176px_auto]">
        <a
          href="#"
          className="relative text-[#333333] max-[991px]:mr-auto max-[767px]:pl-0"
        >
          <img
            src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f03f3e434e2326e8af190_%5BA%5D--Navbar%20Brand%20(1).png"
            alt=""
            className="inline-block max-h-6 max-w-full"
          />
        </a>
        <nav className="relative flex items-center max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:hidden max-[991px]:bg-[#020d24] max-[991px]:py-3 max-[991px]:text-left">
          <a
            href="https://flowspark-quantumcal.webflow.io/"
            className="px-5 py-2 font-semibold text-[#5b6782] transition hover:text-white max-[991px]:block md:px-10 lg:px-4"
          >
            Home
          </a>
          <a
            href="https://flowspark-quantumcal.webflow.io/pricing"
            className="px-5 py-2 font-semibold text-[#5b6782] transition hover:text-white max-[991px]:block md:px-10 lg:px-4"
          >
            Pricing
          </a>
          <a
            href="https://flowspark-quantumcal.webflow.io/blog"
            className="px-5 py-2 font-semibold text-[#5b6782] transition hover:text-white max-[991px]:block md:px-10 lg:px-4"
          >
            Blog
          </a>
          <a
            href="https://build.flowspark.co/template"
            target="_blank"
            className="px-5 py-2 font-semibold text-[#5b6782] transition hover:text-white max-[991px]:block md:px-10 lg:px-4"
          >
            Templates
          </a>
          <a
            href="#"
            className="ml-5 inline-block cursor-pointer rounded-full bg-[#081631] px-6 py-4 text-center font-semibold text-white transition hover:bg-[#2d6ae0] max-[991px]:mt-2 md:ml-10 lg:ml-4"
          >
            Unlimited Webflow Dev
          </a>
        </nav>
        <div
          className="relative float-right hidden cursor-pointer select-none p-3 text-2xl max-[991px]:-mr-3 max-[991px]:block max-[991px]:text-white lg:p-[18px]"
          tabIndex={0}
        >
          <div className="">
            <svg
              width="1.25rem"
              height="1rem"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7Z"
                fill="currentColor"
              />
              <path
                d="M19 0H7C6.44772 0 6 0.447715 6 1C6 1.55228 6.44772 2 7 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0Z"
                fill="currentColor"
              />
              <path
                d="M19 14H11C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="fixed block" />
  <main className="block">
    <header
      className="block overflow-hidden bg-[#020d24] bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://assets.website-files.com/647e296b89c00bcfafccf696/647f048fbb4628bf7e380458_Group%2047929.svg")'
      }}
    >
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-12 md:py-16 lg:py-20">
            <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center text-center md:mb-12 lg:mb-16">
              <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
                  Simplify Meeting Scheduling
                </h1>
                <div className="mx-auto mb-5 max-w-[528px] md:mb-6 lg:mb-8">
                  <p className="text-[#7c8aaa]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus
                  </p>
                </div>
                <div className="flex items-stretch justify-center">
                  <a
                    href="#"
                    className="mr-4 inline-block cursor-pointer rounded-[60px] bg-[#2d6ae0] px-8 py-5 text-center font-bold text-white transition hover:bg-[#081631]"
                  >
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="flex max-w-full flex-row items-center rounded-[60px] bg-[#081631] px-6 py-4 font-bold text-white"
                  >
                    <div className="mr-2 flex w-5 flex-col items-center">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389956 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9972 6.6139 17.0481 4.32631 15.3609 2.63908C13.6737 0.951855 11.3861 0.00275781 9 0ZM12.1532 9.57602L7.9994 12.3452C7.89516 12.4149 7.77397 12.4549 7.64877 12.461C7.52357 12.4671 7.39906 12.4391 7.28854 12.3799C7.17802 12.3208 7.08565 12.2327 7.02128 12.1252C6.95691 12.0176 6.92297 11.8946 6.92308 11.7692V6.23077C6.92297 6.10542 6.95691 5.98239 7.02128 5.87483C7.08565 5.76727 7.17802 5.67921 7.28854 5.62006C7.39906 5.56092 7.52357 5.5329 7.64877 5.53901C7.77397 5.54512 7.89516 5.58512 7.9994 5.65475L12.1532 8.42398C12.2481 8.48719 12.3258 8.57285 12.3796 8.67333C12.4334 8.77382 12.4615 8.88603 12.4615 9C12.4615 9.11397 12.4334 9.22618 12.3796 9.32667C12.3258 9.42715 12.2481 9.5128 12.1532 9.57602Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="">Watch Demo</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            className="inline-block max-h-[416px] w-full max-w-full rounded-tl-[50px] rounded-tr-[50px] border-[12px] border-[#ffffff1f] object-fill"
            src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f0755ed7ed2b1be74354e_image_processing20220429-712-h76k3c%202.png"
            alt="Hero image showing dashboard"
          />
        </div>
      </div>
    </header>
    <div className="">
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-5xl">
          <div className="py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-4">
              <div className="flex items-center justify-center">
                <img
                  src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f0805c69acb78897493e9_Google%20Logo.svg"
                  alt=""
                  className="inline-block max-w-full"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f080572fa62a3b4c5d070_PayPal%20Logo.svg"
                  alt="Logo image"
                  className="inline-block max-w-full"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f0805d97ffc4bb7dfea4f_Walmart%20Logo.svg"
                  alt="Logo image"
                  className="inline-block max-w-full"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f0805ef808d1534d401bb_Microsoft%20Logo.svg"
                  alt="Logo image"
                  className="inline-block max-w-full"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f0805caaebba6e23995d7_Chase%20Logo.svg"
                  alt="Logo image"
                  className="inline-block max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="">
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
              <div className="max-w-lg max-[991px]:max-w-[720px]">
                <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                  Unlock Your Time's Full Potential.
                </h2>
                <div className="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
                  <p className="text-[#636262]">
                    Say goodbye to payment headaches with SecurePay! Our
                    easy-to-use payment platform makes it simple for businesses
                    and individuals to send and receive payments quickly and
                    securely.
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-block cursor-pointer rounded-[60px] bg-[#2d6ae0] px-6 py-4 text-center font-bold text-white transition hover:bg-[#081631]"
                >
                  Learn More
                </a>
              </div>
              <div className="">
                <img
                  src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f085a96056651e5e1de02_Column.png"
                  alt="features image showing calls and notifications"
                  className="mx-auto inline-block h-full w-full max-w-[640px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="">
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
              <div className="max-[991px]:[grid-area:2/1/3/2]">
                <img
                  src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f09cbc69acb788975ec37_Column.png"
                  alt="Feature image showing a group call"
                  className="mx-auto inline-block h-full w-full max-w-[640px] object-cover"
                />
              </div>
              <div className="max-w-lg max-[991px]:max-w-[720px] max-[991px]:[grid-area:1/1/2/2]">
                <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                  Harness Your Time. Take Charge.
                </h2>
                <div className="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
                  <p className="text-[#636262]">
                    Say goodbye to payment headaches with SecurePay! Our
                    easy-to-use payment platform makes it simple for businesses
                    and individuals to send and receive payments quickly and
                    securely.
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-block cursor-pointer rounded-[60px] bg-[#2d6ae0] px-6 py-4 text-center font-bold text-white transition hover:bg-[#081631]"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      className="block bg-[#020d24] bg-cover bg-center text-white"
      style={{
        backgroundImage:
          'url("https://assets.website-files.com/647e296b89c00bcfafccf696/647f0a6adfba776327c6c9d5_Seamless%20Organize%20BG.svg")'
      }}
    >
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-16 md:py-24 lg:py-32">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 className="text-3xl font-bold md:text-5xl">
                Seamlessly Organize and{" "}
                <span className="text-[#2d6ae0]">Prioritize Tasks</span>
              </h2>
              <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                <p className="text-[#7c8aaa]">
                  Lorem ipsum dolor sit amet consectetur adipiscing
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch md:gap-4 lg:gap-6">
              <div className="grid grid-cols-1 gap-[0px] rounded-xl bg-[#07132d] p-8 md:p-10">
                <div className="flex flex-row items-center justify-between">
                  <div className="mr-4 rounded-md bg-[#0a1836] px-4 py-2 font-semibold uppercase">
                    Strategy
                  </div>
                  <div className="flex flex-col items-center justify-center text-[#2d6ae0]">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.2972 10.8739L20.4472 5.0869C20.1603 4.97103 19.8397 4.97103 19.5528 5.0869L5.70277 10.8739C5.4697 10.9755 5.276 11.1505 5.15104 11.3724C5.02607 11.5943 4.97665 11.8511 5.01027 12.1037L7.3186 29.4647C7.34387 29.6509 7.41342 29.8283 7.52139 29.9819C7.62935 30.1355 7.77257 30.2608 7.93897 30.3472L19.4806 36.1343C19.6432 36.2105 19.8205 36.25 20 36.25C20.1795 36.25 20.3568 36.2105 20.5194 36.1343L32.061 30.3472C32.2274 30.2608 32.3706 30.1355 32.4786 29.9819C32.5866 29.8283 32.6561 29.6509 32.6814 29.4647L34.9897 12.1037C35.0233 11.8511 34.9739 11.5943 34.849 11.3724C34.724 11.1505 34.5303 10.9755 34.2972 10.8739V10.8739ZM25.7131 25.7176C25.5493 25.7902 25.3728 25.8296 25.1937 25.8334C24.979 25.8332 24.7684 25.7737 24.5852 25.6614C24.4019 25.5491 24.2531 25.3884 24.155 25.1968L22.9431 22.7518H17.0569L15.845 25.1968C15.7073 25.4731 15.4657 25.6831 15.1735 25.7808C14.8813 25.8785 14.5624 25.8558 14.2869 25.7176C14.0114 25.5795 13.8019 25.3373 13.7045 25.0442C13.6071 24.7512 13.6298 24.4314 13.7675 24.1551L18.9613 13.7385C19.0596 13.5472 19.2085 13.3868 19.3917 13.2748C19.575 13.1627 19.7854 13.1035 20 13.1035C20.2146 13.1035 20.425 13.1627 20.6083 13.2748C20.7915 13.3868 20.9404 13.5472 21.0387 13.7385L26.2325 24.1551C26.3645 24.4323 26.3841 24.7501 26.2873 25.0415C26.1904 25.3329 25.9846 25.5753 25.7131 25.7176V25.7176ZM20 16.849L21.789 20.437H18.211L20 16.849Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mb-20 mt-4 h-0.5 w-full bg-[#1b2e56]" />
                <div className="flex max-w-lg flex-col items-start gap-3">
                  <div className="text-xl font-semibold">
                    Intuitive Calendar Interface
                  </div>
                  <div className="text-[#7c8aaa]">
                    The XYZ Payment App is a user-friendly mobile application
                    that revolutionizes the way you handle your payments and
                    transactions. With its intuitive interface and robust
                    functionality.
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-[0px] rounded-xl bg-[#07132d] p-8 md:p-10">
                <div className="flex flex-row items-center justify-between">
                  <div className="mr-4 rounded-md bg-[#0a1836] px-4 py-2 font-semibold uppercase">
                    Strategy
                  </div>
                  <div className="flex flex-col items-center justify-center text-[#2d6ae0]">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.2972 10.8739L20.4472 5.0869C20.1603 4.97103 19.8397 4.97103 19.5528 5.0869L5.70277 10.8739C5.4697 10.9755 5.276 11.1505 5.15104 11.3724C5.02607 11.5943 4.97665 11.8511 5.01027 12.1037L7.3186 29.4647C7.34387 29.6509 7.41342 29.8283 7.52139 29.9819C7.62935 30.1355 7.77257 30.2608 7.93897 30.3472L19.4806 36.1343C19.6432 36.2105 19.8205 36.25 20 36.25C20.1795 36.25 20.3568 36.2105 20.5194 36.1343L32.061 30.3472C32.2274 30.2608 32.3706 30.1355 32.4786 29.9819C32.5866 29.8283 32.6561 29.6509 32.6814 29.4647L34.9897 12.1037C35.0233 11.8511 34.9739 11.5943 34.849 11.3724C34.724 11.1505 34.5303 10.9755 34.2972 10.8739V10.8739ZM25.7131 25.7176C25.5493 25.7902 25.3728 25.8296 25.1937 25.8334C24.979 25.8332 24.7684 25.7737 24.5852 25.6614C24.4019 25.5491 24.2531 25.3884 24.155 25.1968L22.9431 22.7518H17.0569L15.845 25.1968C15.7073 25.4731 15.4657 25.6831 15.1735 25.7808C14.8813 25.8785 14.5624 25.8558 14.2869 25.7176C14.0114 25.5795 13.8019 25.3373 13.7045 25.0442C13.6071 24.7512 13.6298 24.4314 13.7675 24.1551L18.9613 13.7385C19.0596 13.5472 19.2085 13.3868 19.3917 13.2748C19.575 13.1627 19.7854 13.1035 20 13.1035C20.2146 13.1035 20.425 13.1627 20.6083 13.2748C20.7915 13.3868 20.9404 13.5472 21.0387 13.7385L26.2325 24.1551C26.3645 24.4323 26.3841 24.7501 26.2873 25.0415C26.1904 25.3329 25.9846 25.5753 25.7131 25.7176V25.7176ZM20 16.849L21.789 20.437H18.211L20 16.849Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mb-20 mt-4 h-0.5 w-full bg-[#1b2e56]" />
                <div className="flex max-w-lg flex-col items-start gap-3">
                  <div className="text-xl font-semibold">
                    Intuitive Calendar Interface
                  </div>
                  <div className="text-[#7c8aaa]">
                    The XYZ Payment App is a user-friendly mobile application
                    that revolutionizes the way you handle your payments and
                    transactions. With its intuitive interface and robust
                    functionality.
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-[0px] rounded-xl bg-[#07132d] p-8 md:p-10">
                <div className="flex flex-row items-center justify-between">
                  <div className="mr-4 rounded-md bg-[#0a1836] px-4 py-2 font-semibold uppercase">
                    Strategy
                  </div>
                  <div className="flex flex-col items-center justify-center text-[#2d6ae0]">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.2972 10.8739L20.4472 5.0869C20.1603 4.97103 19.8397 4.97103 19.5528 5.0869L5.70277 10.8739C5.4697 10.9755 5.276 11.1505 5.15104 11.3724C5.02607 11.5943 4.97665 11.8511 5.01027 12.1037L7.3186 29.4647C7.34387 29.6509 7.41342 29.8283 7.52139 29.9819C7.62935 30.1355 7.77257 30.2608 7.93897 30.3472L19.4806 36.1343C19.6432 36.2105 19.8205 36.25 20 36.25C20.1795 36.25 20.3568 36.2105 20.5194 36.1343L32.061 30.3472C32.2274 30.2608 32.3706 30.1355 32.4786 29.9819C32.5866 29.8283 32.6561 29.6509 32.6814 29.4647L34.9897 12.1037C35.0233 11.8511 34.9739 11.5943 34.849 11.3724C34.724 11.1505 34.5303 10.9755 34.2972 10.8739V10.8739ZM25.7131 25.7176C25.5493 25.7902 25.3728 25.8296 25.1937 25.8334C24.979 25.8332 24.7684 25.7737 24.5852 25.6614C24.4019 25.5491 24.2531 25.3884 24.155 25.1968L22.9431 22.7518H17.0569L15.845 25.1968C15.7073 25.4731 15.4657 25.6831 15.1735 25.7808C14.8813 25.8785 14.5624 25.8558 14.2869 25.7176C14.0114 25.5795 13.8019 25.3373 13.7045 25.0442C13.6071 24.7512 13.6298 24.4314 13.7675 24.1551L18.9613 13.7385C19.0596 13.5472 19.2085 13.3868 19.3917 13.2748C19.575 13.1627 19.7854 13.1035 20 13.1035C20.2146 13.1035 20.425 13.1627 20.6083 13.2748C20.7915 13.3868 20.9404 13.5472 21.0387 13.7385L26.2325 24.1551C26.3645 24.4323 26.3841 24.7501 26.2873 25.0415C26.1904 25.3329 25.9846 25.5753 25.7131 25.7176V25.7176ZM20 16.849L21.789 20.437H18.211L20 16.849Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mb-20 mt-4 h-0.5 w-full bg-[#1b2e56]" />
                <div className="flex max-w-lg flex-col items-start gap-3">
                  <div className="text-xl font-semibold">
                    Intuitive Calendar Interface
                  </div>
                  <div className="text-[#7c8aaa]">
                    The XYZ Payment App is a user-friendly mobile application
                    that revolutionizes the way you handle your payments and
                    transactions. With its intuitive interface and robust
                    functionality.
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-[0px] rounded-xl bg-[#07132d] p-8 md:p-10">
                <div className="flex flex-row items-center justify-between">
                  <div className="mr-4 rounded-md bg-[#0a1836] px-4 py-2 font-semibold uppercase">
                    Strategy
                  </div>
                  <div className="flex flex-col items-center justify-center text-[#2d6ae0]">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.2972 10.8739L20.4472 5.0869C20.1603 4.97103 19.8397 4.97103 19.5528 5.0869L5.70277 10.8739C5.4697 10.9755 5.276 11.1505 5.15104 11.3724C5.02607 11.5943 4.97665 11.8511 5.01027 12.1037L7.3186 29.4647C7.34387 29.6509 7.41342 29.8283 7.52139 29.9819C7.62935 30.1355 7.77257 30.2608 7.93897 30.3472L19.4806 36.1343C19.6432 36.2105 19.8205 36.25 20 36.25C20.1795 36.25 20.3568 36.2105 20.5194 36.1343L32.061 30.3472C32.2274 30.2608 32.3706 30.1355 32.4786 29.9819C32.5866 29.8283 32.6561 29.6509 32.6814 29.4647L34.9897 12.1037C35.0233 11.8511 34.9739 11.5943 34.849 11.3724C34.724 11.1505 34.5303 10.9755 34.2972 10.8739V10.8739ZM25.7131 25.7176C25.5493 25.7902 25.3728 25.8296 25.1937 25.8334C24.979 25.8332 24.7684 25.7737 24.5852 25.6614C24.4019 25.5491 24.2531 25.3884 24.155 25.1968L22.9431 22.7518H17.0569L15.845 25.1968C15.7073 25.4731 15.4657 25.6831 15.1735 25.7808C14.8813 25.8785 14.5624 25.8558 14.2869 25.7176C14.0114 25.5795 13.8019 25.3373 13.7045 25.0442C13.6071 24.7512 13.6298 24.4314 13.7675 24.1551L18.9613 13.7385C19.0596 13.5472 19.2085 13.3868 19.3917 13.2748C19.575 13.1627 19.7854 13.1035 20 13.1035C20.2146 13.1035 20.425 13.1627 20.6083 13.2748C20.7915 13.3868 20.9404 13.5472 21.0387 13.7385L26.2325 24.1551C26.3645 24.4323 26.3841 24.7501 26.2873 25.0415C26.1904 25.3329 25.9846 25.5753 25.7131 25.7176V25.7176ZM20 16.849L21.789 20.437H18.211L20 16.849Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mb-20 mt-4 h-0.5 w-full bg-[#1b2e56]" />
                <div className="flex max-w-lg flex-col items-start gap-3">
                  <div className="text-xl font-semibold">
                    Intuitive Calendar Interface
                  </div>
                  <div className="text-[#7c8aaa]">
                    The XYZ Payment App is a user-friendly mobile application
                    that revolutionizes the way you handle your payments and
                    transactions. With its intuitive interface and robust
                    functionality.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="">
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-12 md:py-16 lg:py-20">
            <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center text-center md:mb-12 lg:mb-16">
              <p className="text-sm font-semibold uppercase text-[#2d6ae0]">
                3 easy steps
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">How it works</h2>
              <div className="mx-auto mb-5 mt-4 max-w-[528px] md:mb-6 lg:mb-8">
                <p className="text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing
                </p>
              </div>
            </div>
            <div className="relative grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start lg:grid-cols-2 lg:gap-12">
              <div className="relative flex h-full flex-col items-start [grid-area:1/2/2/3] max-[991px]:[grid-area:2/1/3/2]">
                <a
                  className="relative mb-8 flex w-auto max-w-[496px] cursor-pointer items-start justify-center gap-4 border border-solid bg-white px-6 py-5 text-left align-top text-[#222222] max-[479px]:block"
                  tabIndex={-1}
                  href="#w-tabs-0-data-w-pane-0"
                >
                  <div className="flex h-10 w-10 flex-none flex-col items-center justify-center rounded-full bg-[#dae2f3]">
                    <p className="font-bold text-[#7c8aaa]">1</p>
                  </div>
                  <div className="ml-4 flex w-auto flex-initial flex-col items-start gap-2">
                    <h5 className="text-base font-bold md:text-xl">
                      Setup your Link
                    </h5>
                    <p className="text-[#636262]">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                      aliquam, purus sit.
                    </p>
                  </div>
                </a>
                <a
                  className="relative mb-8 flex w-auto max-w-[496px] cursor-pointer items-start justify-center gap-4 border border-solid bg-white px-6 py-5 text-left align-top text-[#222222] max-[479px]:block"
                  tabIndex={-1}
                  href="#w-tabs-0-data-w-pane-1"
                >
                  <div className="flex h-10 w-10 flex-none flex-col items-center justify-center rounded-full bg-[#dae2f3]">
                    <p className="font-bold text-[#7c8aaa]">2</p>
                  </div>
                  <div className="ml-4 flex w-auto flex-initial flex-col items-start gap-2">
                    <h5 className="text-base font-bold md:text-xl">
                      Send Invites
                    </h5>
                    <p className="text-[#636262]">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                      aliquam, purus sit.
                    </p>
                  </div>
                </a>
                <a
                  className="relative mb-8 flex w-auto max-w-[496px] cursor-pointer flex-row items-start justify-center gap-4 border border-solid bg-white px-6 py-5 text-left align-top text-[#222222] [border-bottom-style:none] max-[479px]:block"
                  href="#w-tabs-0-data-w-pane-2"
                >
                  <div className="flex h-10 w-10 flex-none flex-col items-center justify-center rounded-full bg-[#dae2f3]">
                    <p className="font-bold text-[#7c8aaa]">3</p>
                  </div>
                  <div className="ml-4 flex w-auto flex-initial flex-col items-start gap-2">
                    <h5 className="text-base font-bold md:text-xl">
                      Get More Sales!
                    </h5>
                    <p className="text-[#636262]">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                      aliquam, purus sit.
                    </p>
                  </div>
                </a>
              </div>
              <div className="relative block overflow-hidden [grid-area:1/1/2/2] max-[991px]:[grid-area:1/1/2/2]">
                <div className="relative block">
                  <img
                    src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f0b14162c5306c7cfdcc9_Rectangle%20106.jpg"
                    alt="Image showing dashboard of the app"
                    className="inline-block h-full w-full max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      className="block overflow-hidden bg-[#020d24] bg-cover bg-center text-white"
      style={{
        backgroundImage:
          'url("https://assets.website-files.com/647e296b89c00bcfafccf696/647f0eb83d065963eeb4cff7_CTA%20Background.png")'
      }}
    >
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-16 pt-16 max-[991px]:pb-0 md:grid-cols-[1.25fr_1.25fr] md:gap-[16px] md:pt-24 lg:grid-cols-[1.25fr_340px_1.25fr] lg:pt-32">
            <div className="flex grid-cols-1 flex-col items-start gap-16 max-[767px]:[grid-area:1/1/2/3] md:gap-24">
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-[#091632] p-2.5">
                    <div className="flex">
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.5625 12.5938H18.9922C19.8544 11.4151 20.317 9.99158 20.3125 8.53125C20.3098 6.70042 19.5813 4.94535 18.2867 3.65076C16.9921 2.35617 15.2371 1.62769 13.4062 1.625C13.1908 1.625 12.9841 1.7106 12.8317 1.86298C12.6794 2.01535 12.5938 2.22201 12.5938 2.4375V7.00781C11.4151 6.14564 9.99158 5.683 8.53125 5.6875C6.70042 5.69019 4.94535 6.41867 3.65076 7.71326C2.35617 9.00785 1.62769 10.7629 1.625 12.5938C1.625 12.8092 1.7106 13.0159 1.86298 13.1683C2.01535 13.3206 2.22201 13.4062 2.4375 13.4062H7.00781C6.14564 14.5849 5.683 16.0084 5.6875 17.4688C5.69019 19.2996 6.41867 21.0546 7.71326 22.3492C9.00785 23.6438 10.7629 24.3723 12.5938 24.375C12.8092 24.375 13.0159 24.2894 13.1683 24.137C13.3206 23.9847 13.4062 23.778 13.4062 23.5625V18.9922C14.5849 19.8544 16.0084 20.317 17.4688 20.3125C19.2996 20.3098 21.0546 19.5813 22.3492 18.2867C23.6438 16.9921 24.3723 15.2371 24.375 13.4062C24.375 13.1908 24.2894 12.9841 24.137 12.8317C23.9847 12.6794 23.778 12.5938 23.5625 12.5938ZM8.53125 7.3125C9.30767 7.30929 10.0751 7.47897 10.7777 7.80923C11.4804 8.13949 12.1008 8.62204 12.5938 9.22188V11.7812H3.31094C3.50677 10.5369 4.14007 9.4033 5.09698 8.58416C6.05389 7.76502 7.27162 7.31411 8.53125 7.3125ZM17.4688 18.6875C16.6923 18.6907 15.9249 18.521 15.2223 18.1908C14.5196 17.8605 13.8992 17.378 13.4062 16.7781V14.2188H22.6891C22.4932 15.4631 21.8599 16.5967 20.903 17.4158C19.9461 18.235 18.7284 18.6859 17.4688 18.6875Z"
                          fill="#2D6AE0"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="max-w-[256px] max-[767px]:max-w-xs">
                    <p className="text-[#7c8aaa]">
                      Say goodbye to payment headaches with SecurePay!
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold md:text-3xl">
                  Maximize Productivity. Organize Your Time.
                </h3>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-[#26bfb61f] p-2.5">
                    <div className="flex">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.5625 11.5938H17.9922C18.8544 10.4151 19.317 8.99158 19.3125 7.53125C19.3098 5.70042 18.5813 3.94535 17.2867 2.65076C15.9921 1.35617 14.2371 0.627686 12.4062 0.625C12.1908 0.625 11.9841 0.710602 11.8317 0.862976C11.6794 1.01535 11.5938 1.22201 11.5938 1.4375V6.00781C10.4151 5.14564 8.99158 4.683 7.53125 4.6875C5.70042 4.69019 3.94535 5.41867 2.65076 6.71326C1.35617 8.00785 0.627686 9.76292 0.625 11.5938C0.625 11.8092 0.710602 12.0159 0.862976 12.1683C1.01535 12.3206 1.22201 12.4062 1.4375 12.4062H6.00781C5.14564 13.5849 4.683 15.0084 4.6875 16.4688C4.69019 18.2996 5.41867 20.0546 6.71326 21.3492C8.00785 22.6438 9.76292 23.3723 11.5938 23.375C11.8092 23.375 12.0159 23.2894 12.1683 23.137C12.3206 22.9847 12.4062 22.778 12.4062 22.5625V17.9922C13.5849 18.8544 15.0084 19.317 16.4688 19.3125C18.2996 19.3098 20.0546 18.5813 21.3492 17.2867C22.6438 15.9921 23.3723 14.2371 23.375 12.4062C23.375 12.1908 23.2894 11.9841 23.137 11.8317C22.9847 11.6794 22.778 11.5938 22.5625 11.5938ZM7.53125 6.3125C8.30767 6.30929 9.07506 6.47897 9.77774 6.80923C10.4804 7.13949 11.1008 7.62204 11.5938 8.22188V10.7812H2.31094C2.50677 9.53694 3.14007 8.4033 4.09698 7.58416C5.05389 6.76502 6.27162 6.31411 7.53125 6.3125ZM16.4688 17.6875C15.6923 17.6907 14.9249 17.521 14.2223 17.1908C13.5196 16.8605 12.8992 16.378 12.4062 15.7781V13.2188H21.6891C21.4932 14.4631 20.8599 15.5967 19.903 16.4158C18.9461 17.235 17.7284 17.6859 16.4688 17.6875Z"
                          fill="#26BFB6"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="max-w-[256px] max-[767px]:max-w-xs">
                    <p className="text-[#7c8aaa]">
                      Say goodbye to payment headaches with SecurePay!
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold md:text-3xl">
                  Maximize Productivity. Organize Your Time.
                </h3>
              </div>
            </div>
            <div
              className="h-[560px] w-96 bg-cover bg-[50%_100%] bg-no-repeat object-contain max-[991px]:mt-12 max-[991px]:bg-contain max-[991px]:[grid-area:2/1/3/3] max-[767px]:mt-4 max-[767px]:[grid-area:3/1/4/3] sm:w-full"
              style={{
                backgroundImage:
                  'url("https://assets.website-files.com/647e296b89c00bcfafccf696/647f0d7d8d8a9aeef1309dd5_image%2010.png")'
              }}
            />
            <div className="flex grid-cols-1 flex-col items-start gap-16 max-[767px]:[grid-area:2/1/3/3] md:gap-24">
              <div className="flex flex-col items-start gap-4 text-left md:items-end md:text-right">
                <div className="flex flex-row-reverse items-center gap-4 pr-0 max-[767px]:flex-row max-[767px]:text-left">
                  <div className="rounded-full bg-[#ff5c461f] p-2.5">
                    <div className="flex">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.5625 11.5938H17.9922C18.8544 10.4151 19.317 8.99158 19.3125 7.53125C19.3098 5.70042 18.5813 3.94535 17.2867 2.65076C15.9921 1.35617 14.2371 0.627686 12.4062 0.625C12.1908 0.625 11.9841 0.710602 11.8317 0.862976C11.6794 1.01535 11.5938 1.22201 11.5938 1.4375V6.00781C10.4151 5.14564 8.99158 4.683 7.53125 4.6875C5.70042 4.69019 3.94535 5.41867 2.65076 6.71326C1.35617 8.00785 0.627686 9.76292 0.625 11.5938C0.625 11.8092 0.710602 12.0159 0.862976 12.1683C1.01535 12.3206 1.22201 12.4062 1.4375 12.4062H6.00781C5.14564 13.5849 4.683 15.0084 4.6875 16.4688C4.69019 18.2996 5.41867 20.0546 6.71326 21.3492C8.00785 22.6438 9.76292 23.3723 11.5938 23.375C11.8092 23.375 12.0159 23.2894 12.1683 23.137C12.3206 22.9847 12.4062 22.778 12.4062 22.5625V17.9922C13.5849 18.8544 15.0084 19.317 16.4688 19.3125C18.2996 19.3098 20.0546 18.5813 21.3492 17.2867C22.6438 15.9921 23.3723 14.2371 23.375 12.4062C23.375 12.1908 23.2894 11.9841 23.137 11.8317C22.9847 11.6794 22.778 11.5938 22.5625 11.5938ZM7.53125 6.3125C8.30767 6.30929 9.07506 6.47897 9.77774 6.80923C10.4804 7.13949 11.1008 7.62204 11.5938 8.22188V10.7812H2.31094C2.50677 9.53694 3.14007 8.4033 4.09698 7.58416C5.05389 6.76502 6.27162 6.31411 7.53125 6.3125ZM16.4688 17.6875C15.6923 17.6907 14.9249 17.521 14.2223 17.1908C13.5196 16.8605 12.8992 16.378 12.4062 15.7781V13.2188H21.6891C21.4932 14.4631 20.8599 15.5967 19.903 16.4158C18.9461 17.235 17.7284 17.6859 16.4688 17.6875Z"
                          fill="#FF5C46"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="max-w-[256px] max-[767px]:max-w-xs">
                    <p className="text-[#7c8aaa]">
                      Say goodbye to payment headaches with SecurePay!
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold md:text-3xl">
                  Maximize Productivity. Organize Your Time.
                </h3>
              </div>
              <div className="flex flex-col items-start gap-4 text-left md:items-end md:text-right">
                <div className="flex flex-row-reverse items-center gap-4 pr-0 max-[767px]:flex-row max-[767px]:text-left">
                  <div className="rounded-full bg-[#e8157a1f] p-2.5">
                    <div className="flex">
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.5625 12.5938H18.9922C19.8544 11.4151 20.317 9.99158 20.3125 8.53125C20.3098 6.70042 19.5813 4.94535 18.2867 3.65076C16.9921 2.35617 15.2371 1.62769 13.4062 1.625C13.1908 1.625 12.9841 1.7106 12.8317 1.86298C12.6794 2.01535 12.5938 2.22201 12.5938 2.4375V7.00781C11.4151 6.14564 9.99158 5.683 8.53125 5.6875C6.70042 5.69019 4.94535 6.41867 3.65076 7.71326C2.35617 9.00785 1.62769 10.7629 1.625 12.5938C1.625 12.8092 1.7106 13.0159 1.86298 13.1683C2.01535 13.3206 2.22201 13.4062 2.4375 13.4062H7.00781C6.14564 14.5849 5.683 16.0084 5.6875 17.4688C5.69019 19.2996 6.41867 21.0546 7.71326 22.3492C9.00785 23.6438 10.7629 24.3723 12.5938 24.375C12.8092 24.375 13.0159 24.2894 13.1683 24.137C13.3206 23.9847 13.4062 23.778 13.4062 23.5625V18.9922C14.5849 19.8544 16.0084 20.317 17.4688 20.3125C19.2996 20.3098 21.0546 19.5813 22.3492 18.2867C23.6438 16.9921 24.3723 15.2371 24.375 13.4062C24.375 13.1908 24.2894 12.9841 24.137 12.8317C23.9847 12.6794 23.778 12.5938 23.5625 12.5938ZM8.53125 7.3125C9.30767 7.30929 10.0751 7.47897 10.7777 7.80923C11.4804 8.13949 12.1008 8.62204 12.5938 9.22188V11.7812H3.31094C3.50677 10.5369 4.14007 9.4033 5.09698 8.58416C6.05389 7.76502 7.27162 7.31411 8.53125 7.3125ZM17.4688 18.6875C16.6923 18.6907 15.9249 18.521 15.2223 18.1908C14.5196 17.8605 13.8992 17.378 13.4062 16.7781V14.2188H22.6891C22.4932 15.4631 21.8599 16.5967 20.903 17.4158C19.9461 18.235 18.7284 18.6859 17.4688 18.6875Z"
                          fill="#E8157A"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="max-w-[256px] max-[767px]:max-w-xs">
                    <p className="text-[#7c8aaa]">
                      Say goodbye to payment headaches with SecurePay!
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold md:text-3xl">
                  Maximize Productivity. Organize Your Time.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-[#2d6ae0] text-white">
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-16 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
              <div className="max-w-lg max-[991px]:max-w-[720px]">
                <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                  Organise and Simplify Meetings
                </h2>
                <div className="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
                  <p className="text-[#c0d6ff]">
                    Say goodbye to payment headaches with SecurePay! Our
                    easy-to-use payment platform makes it simple for businesses
                    and individuals to send and receive payments quickly and
                    securely.
                  </p>
                </div>
                <a
                  href="https://build.flowspark.co/template"
                  target="_blank"
                  className="inline-block cursor-pointer rounded-[60px] bg-white px-6 py-4 text-center font-bold text-[#2d6ae0] transition hover:bg-[#081631]"
                >
                  More Free Templates
                </a>
              </div>
              <div className="">
                <img
                  src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f0fa7c69acb78897b1e20_Standard%20Image.png"
                  alt="Call to action image"
                  className="mx-auto inline-block h-full w-full max-w-[640px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="bg-[#020d24] text-white">
  <div className="px-5 md:px-10">
    <div className="mx-auto w-full max-w-7xl">
      <div className="py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center">
          <div className="mb-8 md:mb-12 lg:mb-16">
            <div className="w-full max-w-3xl">
              <div className="max-w-[800px] text-center">
                <div className="mb-5">
                  <h2 className="text-3xl font-bold md:text-5xl">
                    What our clients are saying
                  </h2>
                </div>
                <div className="mx-auto w-full max-w-lg">
                  <p className="tracking-[0.2px] text-[#7c8aaa]">
                    Lorem ipsum dolor sit amet elit ut aliquam
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-3 md:gap-4 lg:gap-6">
              <div className="grid grid-cols-1 gap-[26px] bg-[#07132d] px-10 max-[767px]:p-8 py-8 rounded-lg">
                <div className="flex items-center justify-between text-[#2d6ae0]">
                  <div className="flex text-[#2d6ae0]">
                    <div className="mr-1 flex-none w-3.5">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="mr-1 flex-none w-3.5">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="mr-1 flex-none w-3.5">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="mr-1 flex-none w-3.5">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="mr-1 flex-none w-3.5">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm tracking-[0.2px] text-[#7c8aaa] no-underline hover:outline-0"
                  >
                    View Post
                  </a>
                </div>
                <div className="text-sm font-bold tracking-[0.2px]">
                  I've been using the Schedule Master app for the past few
                  months, and it has truly revolutionized the way I manage my
                  time.
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="https://assets.website-files.com/6502af467b2a8c4ee8159a5b/65030a8aa3d8f080490b1368_testimonial%201.png"
                    alt=""
                    className="inline-block min-w-[60px] max-w-full h-14 w-14"
                  />
                  <div className="flex flex-col items-start">
                    <h6 className="text-sm font-bold md:text-base">
                      Jessica Smith
                    </h6>
                    <p className="text-sm tracking-[0.2px] text-[#7c8aaa]">
                      Designer
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-[26px] bg-[#07132d] px-10 max-[767px]:p-8 py-8 rounded-lg">
                <div className="flex items-center justify-between text-[#2d6ae0]">
                  <div className="flex text-[#2d6ae0]">
                    <div className="mr-1 flex-none w-3.5">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="mr-1 flex-none w-3.5">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="mr-1 flex-none w-3.5">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="mr-1 flex-none w-3.5">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="mr-1 flex-none w-3.5">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm tracking-[0.2px] text-[#7c8aaa] no-underline hover:outline-0"
                  >
                    View Post
                  </a>
                </div>
                <div className="text-sm font-bold tracking-[0.2px]">
                  I've been using the Schedule Master app for the past few
                  months, and it has truly revolutionized the way I manage my
                  time.
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="https://assets.website-files.com/6502af467b2a8c4ee8159a5b/65030a8ab91776de6f9880a5_Testimonial%202.png"
                    alt=""
                    className="inline-block min-w-[60px] max-w-full h-14 w-14"
                  />
                  <div className="flex flex-col items-start">
                    <h6 className="text-sm font-bold md:text-base">
                      Jessica Smith
                    </h6>
                    <p className="text-sm tracking-[0.2px] text-[#7c8aaa]">
                      Designer
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-[26px] bg-[#07132d] px-10 max-[767px]:p-8 py-8 rounded-lg">
                <div className="flex items-center justify-between text-[#2d6ae0]">
                  <div className="flex text-[#2d6ae0]">
                    <div className="mr-1 flex-none w-3.5">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="mr-1 flex-none w-3.5">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="mr-1 flex-none w-3.5">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="mr-1 flex-none w-3.5">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="mr-1 flex-none w-3.5">
                      <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.68021 0.92574C6.31574 -0.00157559 7.68426 -0.00157684 8.31979 0.925739L9.49972 2.6474C9.70777 2.95097 10.0141 3.17354 10.3671 3.27759L12.3691 3.86775C13.4474 4.18562 13.8703 5.48717 13.1848 6.37815L11.912 8.03235C11.6876 8.32402 11.5706 8.68415 11.5807 9.05203L11.6381 11.1384C11.669 12.2622 10.5618 13.0666 9.50263 12.6899L7.53608 11.9906C7.18933 11.8673 6.81067 11.8673 6.46392 11.9906L4.49738 12.6899C3.43816 13.0666 2.331 12.2622 2.3619 11.1384L2.41929 9.05203C2.4294 8.68415 2.31239 8.32402 2.08797 8.03235L0.815197 6.37815C0.129656 5.48717 0.552554 4.18562 1.63087 3.86775L3.63289 3.27759C3.98589 3.17354 4.29223 2.95097 4.50028 2.6474L5.68021 0.92574Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm tracking-[0.2px] text-[#7c8aaa] no-underline hover:outline-0"
                  >
                    View Post
                  </a>
                </div>
                <div className="text-sm font-bold tracking-[0.2px]">
                  I've been using the Schedule Master app for the past few
                  months, and it has truly revolutionized the way I manage my
                  time.
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="https://assets.website-files.com/6502af467b2a8c4ee8159a5b/65030a8a9d8b648f124d9126_Testimonial%203.png"
                    alt=""
                    className="inline-block min-w-[60px] max-w-full h-14 w-14"
                  />
                  <div className="flex flex-col items-start">
                    <h6 className="text-sm font-bold md:text-base">
                      Laila Bahar
                    </h6>
                    <p className="text-sm tracking-[0.2px] text-[#7c8aaa]">
                      Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="inline-block cursor-pointer bg-[#081631] px-6 py-4 text-center font-bold text-[#7786a7] no-underline transition hover:bg-[#2d6ae0] hover:text-white hover:outline-0 rounded-full"
          >
            Check All&nbsp;Reviews
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    <footer className="block bg-[#1b51b9] text-white [border-top:1px_solid_rgb(52,_115,_237)]">
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-[auto_auto] justify-between gap-8 sm:grid-cols-[auto_auto_auto] lg:grid-cols-[auto_auto_auto_auto_auto]">
              <div className="flex flex-col items-start font-semibold">
                <div className="m-4 ml-0 mr-0 max-[991px]:mt-0 lg:ml-0 lg:mr-0">
                  <div>Solution</div>
                </div>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Marketing
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Analytics
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Commerce
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Insights
                </a>
              </div>
              <div className="flex flex-col items-start font-semibold">
                <div className="m-4 ml-0 mr-0 max-[991px]:mt-0 lg:ml-0 lg:mr-0">
                  <div>Support</div>
                </div>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Guides
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  API&nbsp;Status
                </a>
              </div>
              <div className="flex flex-col items-start font-semibold">
                <div className="m-4 ml-0 mr-0 max-[991px]:mt-0 lg:ml-0 lg:mr-0">
                  <div>Company</div>
                </div>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  About
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Jobs
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Press
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Partners
                </a>
              </div>
              <div className="flex flex-col items-start font-semibold">
                <div className="m-4 ml-0 mr-0 max-[991px]:mt-0 lg:ml-0 lg:mr-0">
                  <div>Blog</div>
                </div>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  About
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Jobs
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Press
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Partners
                </a>
              </div>
              <div className="flex flex-col items-start font-semibold">
                <div className="m-4 ml-0 mr-0 max-[991px]:mt-0 lg:ml-0 lg:mr-0">
                  <div>Products</div>
                </div>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  About
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Jobs
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Press
                </a>
                <a
                  href="#"
                  className="py-2 text-sm text-[#c0d6ff] transition hover:font-bold hover:text-white"
                >
                  Partners
                </a>
              </div>
            </div>
            <div className="mb-14 mt-16 w-full [border-bottom:1.7px_solid_rgb(52,_115,_237)]" />
            <div className="flex flex-row items-start justify-between max-[767px]:flex-col max-[479px]:flex-col-reverse md:items-center">
              <div className="max-[991px]:flex-none">
                <p className="text-[#c0d6ff]">
                  © Copyright 2021. All rights reserved.
                </p>
              </div>
              <div className="text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1">
                <a
                  href="#"
                  className="inline-block py-2 pl-5 pr-0 font-normal text-[#c0d6ff] transition hover:text-white max-[479px]:px-2.5 lg:pl-12"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="inline-block py-2 pl-5 pr-0 font-normal text-[#c0d6ff] transition hover:text-white max-[479px]:px-2.5 lg:pl-12"
                >
                  License
                </a>
                <a
                  href="#"
                  className="inline-block py-2 pl-5 pr-0 font-normal text-[#c0d6ff] transition hover:text-white max-[479px]:px-2.5 lg:pl-12"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </main>
</div>

     <h1>My Next.js App</h1>
   

    <div>
      {!session ? (
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      ) : (
        <div>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </div>
    </div>
  )
}



export default IndexHomePage
