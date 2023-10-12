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

  <div className="px-5 md:px-10">
  <div className="mx-auto w-full max-w-7xl">
    <div className="py-16 md:py-24 lg:py-32">
      <div className="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
        <div className="max-[991px]:max-w-[720px]">
          <h1 className="mb-6 font-bold text-4xl md:text-6xl pb-4">
            Fast,Reliable and Secure
          </h1>
          <div className="max-w-[528px] mb-6 md:mb-10 lg:mb-12">
            <p className="text-[#636262]">
              Say goodbye to payment headaches with SecurePay! Our easy-to-use
              payment platform makes it simple for businesses and individuals to
              send and receive payments
            </p>
          </div>
          <div className="flex items-center mb-5 md:mb-6 lg:mb-8">
            <a
              href="#"
              className="inline-block cursor-pointer border border-solid border-[#c9fd02] bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white rounded-full mr-5 md:mr-6 lg:mr-8"
            >
              Open Account
            </a>
          </div>
          <div className="w-full max-w-xs">
            <div className="[border-left:2px_solid_rgb(201,_253,_2)] mb-4 py-1.5 pl-4">
              <p className="text-sm text-[#636262]">
                A secure and convenient payment app that makes transactions a
                breeze, offering a seamless way to manage finances on the go.
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c349_Ellipse%2020%20(1).png"
                alt=""
                className="inline-block h-7 w-7 max-w-full mr-2"
              />
              <p className="text-sm font-bold">Jessica Smith</p>
              <div className="ml-4 mr-4 h-full px-0 [border-right-style:solid] py-3"></div>
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c347_Vector.svg"
                alt=""
                className="inline-block max-w-full flex-none mr-1 w-3.5"
              />
              <p className="text-sm text-[#636262]">5 stars</p>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c34b_Rectangle%2094.svg"
            alt=""
            className="mx-auto inline-block h-full w-full max-w-[640px] object-cover rounded-2xl"
          />
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
<div className="bg-[#020d24] bg-cover bg-center bg-no-repeat text-white">
  <div className="px-5 md:px-10">
    <div className="mx-auto w-full max-w-7xl">
      <div className="py-16 md:py-24 lg:py-32">
        <div className="flex-col flex items-center justify-start max-[767px]:text-center">
          <div className="mx-auto flex-col flex max-w-3xl items-center text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-bold text-3xl md:text-5xl">
              Simple &amp; Fixed Pricing
            </h2>
          </div>
          <div className="grid w-full max-[767px]:text-left gap-16 md:gap-4 lg:gap-8 grid-cols-1 md:grid-cols-3">
            <div className="flex-col flex w-full max-w-[416px] items-start justify-self-start max-[767px]:mx-auto max-[767px]:text-left">
              <div className="flex-col flex items-start bg-[#07132d] p-10 max-[991px]:w-full max-[991px]:flex-none rounded-xl">
                <div className="bg-[#0a1836] px-4 py-1.5 rounded-lg mb-4">
                  <p className="text-sm font-bold text-white">Free Plan</p>
                </div>
                <h2 className="text-left font-bold text-3xl md:text-5xl mb-5 md:mb-6 lg:mb-8">
                  $99<span className="text-sm font-light">/year</span>
                </h2>
                <p className="text-[#7c8aaa] mb-5 md:mb-6 lg:mb-8">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit
                </p>
                <a
                  href="#"
                  className="inline-block w-full cursor-pointer bg-[#2d6ae0] px-6 py-4 text-center font-semibold text-white rounded-full"
                >
                  Get started
                </a>
              </div>
              <div className="mt-10 flex-col flex items-start gap-5">
                <div className="flex-row flex items-start text-left text-white">
                  <div className="flex text-[#2d6ae0] mr-2">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#7c8aaa]">
                    <span className="font-bold text-white">
                      Premium Component{" "}
                    </span>{" "}
                    Lorem ipsum dolor sit amet consecteur adipiscing.
                  </p>
                </div>
                <div className="flex-row flex items-start text-left text-white">
                  <div className="flex text-[#2d6ae0] mr-2">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#7c8aaa]">
                    <span className="font-bold text-white">
                      Exclusive Freebies{" "}
                    </span>{" "}
                    Lorem ipsum dolor sit amet consecteur adipiscing.
                  </p>
                </div>
                <div className="flex-row flex items-start text-left text-white">
                  <div className="flex text-[#2d6ae0] mr-2">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#7c8aaa]">
                    <span className="font-bold text-white">
                      Monthly Free Exclusive{" "}
                    </span>{" "}
                    Lorem ipsum dolor sit amet consecteur adipiscing.
                  </p>
                </div>
                <div className="flex-row flex items-start text-left text-white">
                  <div className="flex text-[#2d6ae0] mr-2">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#7c8aaa]">
                    <span className="font-bold text-white">
                      Customer Support{" "}
                    </span>{" "}
                    Lorem ipsum dolor sit amet consecteur adipiscing.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-col flex w-full max-w-[416px] items-start justify-self-start max-[767px]:mx-auto max-[767px]:text-left">
              <div className="flex-col flex items-start bg-[#2d6ae0] bg-cover bg-center bg-no-repeat p-10 text-white max-[991px]:w-full max-[991px]:flex-initial rounded-xl">
                <div className="flex-row flex gap-4 max-[991px]:flex-wrap mb-4">
                  <div className="bg-[#4782f3] px-4 py-1.5 rounded-lg">
                    <p className="text-sm font-bold text-white">Growth</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#aca18a] px-4 text-white py-1.5 rounded-lg">
                    <div className="flex">
                      <svg
                        width={17}
                        height={16}
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2528 4.59353C15.1098 4.47414 14.9361 4.39736 14.7515 4.37194C14.567 4.34652 14.379 4.37349 14.2091 4.44977L11.0466 5.85602L9.20905 2.54353C9.12123 2.38887 8.99398 2.26026 8.84028 2.17079C8.68657 2.08132 8.5119 2.03418 8.33405 2.03418C8.1562 2.03418 7.98153 2.08132 7.82783 2.17079C7.67412 2.26026 7.54688 2.38887 7.45905 2.54353L5.62155 5.85602L2.45905 4.44977C2.28874 4.37361 2.10052 4.3466 1.91567 4.37181C1.73081 4.39701 1.5567 4.47343 1.413 4.59242C1.2693 4.71141 1.16176 4.86822 1.10252 5.04513C1.04329 5.22205 1.03473 5.412 1.0778 5.59353L2.6653 12.3623C2.69566 12.4933 2.7523 12.6168 2.8318 12.7253C2.9113 12.8338 3.012 12.9251 3.1278 12.9935C3.28458 13.0874 3.46383 13.137 3.64655 13.1373C3.73537 13.1371 3.82373 13.1245 3.90905 13.0998C6.80269 12.2998 9.85916 12.2998 12.7528 13.0998C13.017 13.1692 13.298 13.131 13.5341 12.9935C13.6506 12.926 13.7518 12.835 13.8314 12.7263C13.911 12.6177 13.9672 12.4937 13.9966 12.3623L15.5903 5.59353C15.6329 5.41195 15.6239 5.22208 15.5642 5.04537C15.5046 4.86866 15.3967 4.71215 15.2528 4.59353V4.59353Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-white">Popular</p>
                  </div>
                </div>
                <h2 className="text-left font-bold text-3xl md:text-5xl mb-5 md:mb-6 lg:mb-8">
                  $149<span className="text-sm font-light">/year</span>
                </h2>
                <p className="text-[#c0d6ff] mb-5 md:mb-6 lg:mb-8">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit
                </p>
                <a
                  href="#"
                  className="inline-block w-full cursor-pointer bg-white px-6 py-4 text-center font-semibold text-[#2d6ae0] rounded-full"
                >
                  Get started
                </a>
              </div>
              <div className="mt-10 flex-col flex items-start gap-5">
                <div className="flex-row flex items-start text-left text-white">
                  <div className="flex text-[#2d6ae0] mr-2">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#7c8aaa]">
                    <span className="font-bold text-white">
                      Premium Component{" "}
                    </span>{" "}
                    Lorem ipsum dolor sit amet consecteur adipiscing.
                  </p>
                </div>
                <div className="flex-row flex items-start text-left text-white">
                  <div className="flex text-[#2d6ae0] mr-2">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#7c8aaa]">
                    <span className="font-bold text-white">
                      Exclusive Freebies{" "}
                    </span>{" "}
                    Lorem ipsum dolor sit amet consecteur adipiscing.
                  </p>
                </div>
                <div className="flex-row flex items-start text-left text-white">
                  <div className="flex text-[#2d6ae0] mr-2">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#7c8aaa]">
                    <span className="font-bold text-white">
                      Monthly Free Exclusive{" "}
                    </span>{" "}
                    Lorem ipsum dolor sit amet consecteur adipiscing.
                  </p>
                </div>
                <div className="flex-row flex items-start text-left text-white">
                  <div className="flex text-[#2d6ae0] mr-2">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#7c8aaa]">
                    <span className="font-bold text-white">
                      Customer Support{" "}
                    </span>{" "}
                    Lorem ipsum dolor sit amet consecteur adipiscing.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-col flex w-full max-w-[416px] items-start justify-self-start max-[767px]:mx-auto max-[767px]:text-left">
              <div className="flex-col flex items-start bg-[#07132d] p-10 max-[991px]:w-full max-[991px]:flex-none rounded-xl">
                <div className="bg-[#0a1836] px-4 py-1.5 rounded-lg mb-4">
                  <p className="text-sm font-bold text-white">Accelerate</p>
                </div>
                <h2 className="text-left font-bold text-3xl md:text-5xl mb-5 md:mb-6 lg:mb-8">
                  $249<span className="text-sm font-light">/year</span>
                </h2>
                <p className="text-[#7c8aaa] mb-5 md:mb-6 lg:mb-8">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit
                </p>
                <a
                  href="#"
                  className="inline-block w-full cursor-pointer bg-[#2d6ae0] px-6 py-4 text-center font-semibold text-white rounded-full"
                >
                  Get started
                </a>
              </div>
              <div className="mt-10 flex-col flex items-start gap-5">
                <div className="flex-row flex items-start text-left text-white">
                  <div className="flex text-[#2d6ae0] mr-2">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#7c8aaa]">
                    <span className="font-bold text-white">
                      Premium Component{" "}
                    </span>{" "}
                    Lorem ipsum dolor sit amet consecteur adipiscing.
                  </p>
                </div>
                <div className="flex-row flex items-start text-left text-white">
                  <div className="flex text-[#2d6ae0] mr-2">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#7c8aaa]">
                    <span className="font-bold text-white">
                      Exclusive Freebies{" "}
                    </span>{" "}
                    Lorem ipsum dolor sit amet consecteur adipiscing.
                  </p>
                </div>
                <div className="flex-row flex items-start text-left text-white">
                  <div className="flex text-[#2d6ae0] mr-2">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#7c8aaa]">
                    <span className="font-bold text-white">
                      Monthly Free Exclusive{" "}
                    </span>{" "}
                    Lorem ipsum dolor sit amet consecteur adipiscing.
                  </p>
                </div>
                <div className="flex-row flex items-start text-left text-white">
                  <div className="flex text-[#2d6ae0] mr-2">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.82291 15.198C8.47774 15.199 8.1399 15.3027 7.84846 15.4969C7.55703 15.6911 7.32392 15.968 7.1761 16.2955C7.02829 16.623 6.9718 16.9878 7.01319 17.3476C7.05457 17.7074 7.19213 18.0476 7.40995 18.3287L12.0534 24.3014C12.219 24.5172 12.4312 24.6885 12.6725 24.8009C12.9137 24.9134 13.177 24.9638 13.4406 24.9479C14.0042 24.9161 14.513 24.5995 14.8375 24.079L24.4831 7.76799C24.4847 7.76528 24.4863 7.76257 24.488 7.75991C24.5785 7.614 24.5492 7.32485 24.3624 7.1432C24.3111 7.09331 24.2506 7.05499 24.1846 7.03058C24.1186 7.00618 24.0486 6.99621 23.9789 7.00129C23.9091 7.00637 23.8411 7.02639 23.7789 7.06013C23.7168 7.09386 23.662 7.14059 23.6177 7.19743C23.6142 7.2019 23.6107 7.2063 23.607 7.21064L13.8792 18.7511C13.8422 18.795 13.7973 18.8308 13.747 18.8563C13.6967 18.8818 13.6421 18.8966 13.5863 18.8998C13.5305 18.9029 13.4747 18.8944 13.4221 18.8747C13.3695 18.8551 13.3211 18.8246 13.2798 18.7852L10.0513 15.7003C9.71603 15.3776 9.27778 15.1984 8.82291 15.198Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#7c8aaa]">
                    <span className="font-bold text-white">
                      Customer Support{" "}
                    </span>{" "}
                    Lorem ipsum dolor sit amet consecteur adipiscing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="px-5 md:px-10">
  <div className="mx-auto w-full max-w-7xl">
    <div className="py-16 md:py-24 lg:py-32">
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 className="font-bold text-3xl md:text-5xl">
          Simple &amp; Affordable Pricing
        </h2>
        <div className="mx-auto mt-4 max-w-[528px]">
          <p className="text-[#636262]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
        </div>
      </div>
      <div className="mx-auto grid bg-[#f2f2f7] py-16 max-[479px]:p-8 rounded-md w-full lg:w-[90%] grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_0.25fr_1fr] gap-4 lg:gap-4 mb-8 md:mb-12 lg:mb-16 px-12 lg:px-20">
        <div className="grid-cols-1 grid max-[767px]:justify-items-stretch gap-8 sm:gap-6">
          <div className="flex-row flex max-[991px]:w-full max-[767px]:justify-start max-[479px]:flex-col max-[479px]:items-center max-[479px]:justify-center">
            <div className="flex-col flex-none flex items-center justify-center bg-white rounded-full h-16 w-16 mr-4">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a087c4bede0d9ba097dcc_Vector.svg"
                alt=""
                className="inline-block max-w-full"
              />
            </div>
            <div className="flex-col flex max-[991px]:flex max-[991px]:w-full max-[479px]:text-center justify-start lg:justify-center items-center sm:items-start">
              <p className="font-bold">Cloud Storage</p>
              <p className="">Up to 100GB for works</p>
            </div>
          </div>
          <div className="flex-row flex max-[991px]:w-full max-[767px]:justify-start max-[479px]:flex-col max-[479px]:items-center max-[479px]:justify-center">
            <div className="flex-col flex-none flex items-center justify-center bg-white rounded-full h-16 w-16 mr-4">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a087edd287250a11d6098_Vector-1.svg"
                alt=""
                className="inline-block max-w-full"
              />
            </div>
            <div className="flex-col flex max-[991px]:flex max-[991px]:w-full max-[479px]:text-center justify-start lg:justify-center items-center sm:items-start">
              <p className="font-bold">API&nbsp;Access</p>
              <p className="">Create anything you want</p>
            </div>
          </div>
          <div className="flex-row flex max-[991px]:w-full max-[767px]:justify-start max-[479px]:flex-col max-[479px]:items-center max-[479px]:justify-center">
            <div className="flex-col flex-none flex items-center justify-center bg-white rounded-full h-16 w-16 mr-4">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a087de14b8df5878f0dc0_Vector-2.svg"
                alt=""
                className="inline-block max-w-full"
              />
            </div>
            <div className="flex-col flex max-[991px]:flex max-[991px]:w-full max-[479px]:text-center justify-start lg:justify-center items-center sm:items-start">
              <p className="font-bold">Live Chat</p>
              <p className="">Connect with your customers</p>
            </div>
          </div>
        </div>
        <div className="mx-auto h-full w-px border-l border-l-[#cacaca] border [border-left-style:solid] max-[991px]:hidden"></div>
        <div className="grid-cols-1 grid max-[767px]:justify-items-stretch gap-8 sm:gap-6">
          <div className="flex-row flex max-[991px]:w-full max-[767px]:justify-start max-[479px]:flex-col max-[479px]:items-center max-[479px]:justify-center">
            <div className="flex-col flex-none flex items-center justify-center bg-white rounded-full h-16 w-16 mr-4">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a0881c3f026042fd0f9d6_Group.svg"
                alt=""
                className="inline-block max-w-full"
              />
            </div>
            <div className="flex-col flex max-[991px]:flex max-[991px]:w-full max-[479px]:text-center justify-start lg:justify-center items-center sm:items-start">
              <p className="font-bold">Unlimited user Accounts</p>
              <p className="">We don’t limit you create account</p>
            </div>
          </div>
          <div className="flex-row flex max-[991px]:w-full max-[767px]:justify-start max-[479px]:flex-col max-[479px]:items-center max-[479px]:justify-center">
            <div className="flex-col flex-none flex items-center justify-center bg-white rounded-full h-16 w-16 mr-4">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a0885befa0cf7096b80bf_Group-1.svg"
                alt=""
                className="inline-block max-w-full"
              />
            </div>
            <div className="flex-col flex max-[991px]:flex max-[991px]:w-full max-[479px]:text-center justify-start lg:justify-center items-center sm:items-start">
              <p className="font-bold">Custom Domain</p>
              <p className="">Add your own domain</p>
            </div>
          </div>
          <div className="flex-row flex max-[991px]:w-full max-[991px]:justify-self-auto max-[767px]:justify-start max-[479px]:flex-col max-[479px]:items-center max-[479px]:justify-center">
            <div className="flex-col flex-none flex items-center justify-center bg-white rounded-full h-16 w-16 mr-4">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a0882f3c8a43ed446a42a_Vector.svg"
                alt=""
                className="inline-block max-w-full"
              />
            </div>
            <div className="flex-col flex max-[991px]:flex max-[991px]:w-full max-[479px]:text-center justify-start lg:justify-center items-center sm:items-start">
              <p className="font-bold">Share Information</p>
              <p className="">Connect with your customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="flex-col flex items-center">
          <h3 className="font-bold text-2xl md:text-3xl mb-5 md:mb-6 lg:mb-8">
            $99/year
          </h3>
          <a
            href="#"
            className="flex-row flex max-w-full grid-cols-2 items-center justify-center bg-[#276ef1] py-4 text-center font-semibold text-white [box-shadow:rgb(171,_196,_245)_-8px_8px] transition hover:[box-shadow:rgb(171,_196,_245)_0px_0px] mb-4 px-8"
          >
            <div className="mr-6 font-bold">Join Now</div>
            <div className="h-4 w-4 flex-none">
              <svg
                fill="currentColor"
                viewBox="0 0 20 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Arrow Right</title>
                <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
              </svg>
            </div>
          </a>
          <p className="">30 days money-back guarantee</p>
        </div>
      </div>
    </div>
  </div>
</div>

<header className="relative block">
  <img
    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fd_CTA%20Background%20BG.svg"
    alt=""
    className="absolute inset-[0%] -z-[1] inline-block h-full w-full max-w-full object-cover"
  />
  <div className="px-5 md:px-10">
    <div className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl rounded-[60px] bg-[#101010] px-4">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="mx-auto w-full max-w-3xl max-[479px]:px-2">
            <div className="text-center">
              <div className="mb-8 md:mb-12 lg:mb-16">
                <h2 className="mb-4 mt-6 text-3xl font-extrabold text-white md:text-5xl">
                  Fast, Reliable and Secure Payment Platform
                </h2>
              </div>
              <div className="mx-auto mb-6 flex max-w-[640px] grid-cols-[1.25fr_1fr_1fr] flex-nowrap items-center justify-center gap-0 max-[479px]:flex-col sm:items-center md:mb-10 lg:mb-12">
                <div className="ml-2 mr-2 flex flex-row items-center max-[479px]:mt-2 md:ml-4 md:mr-4">
                  <img
                    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fc_tick-circle.svg"
                    alt=""
                    className="mr-2 inline-block h-8 w-8 max-w-full"
                  />
                  <p className="text-white">300+ UI Blocks</p>
                </div>
                <div className="ml-2 mr-2 flex flex-row items-center max-[479px]:mt-2 md:ml-4 md:mr-4">
                  <img
                    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fc_tick-circle.svg"
                    alt=""
                    className="mr-2 inline-block h-8 w-8 max-w-full"
                  />
                  <p className="text-white">Fully responsive</p>
                </div>
                <div className="ml-2 mr-2 flex flex-row items-center max-[479px]:mt-2 md:ml-4 md:mr-4">
                  <img
                    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fc_tick-circle.svg"
                    alt=""
                    className="mr-2 inline-block h-8 w-8 max-w-full"
                  />
                  <p className="text-white">Just copy &amp; paste</p>
                </div>
              </div>
              <a
                href="#"
                className="mb-4 inline-block cursor-pointer rounded-full border border-solid border-[#c9fd02] bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white"
              >
                Get Started
              </a>
              <p className="text-[#636262]">No credit card required.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<div className="px-5 md:px-10">
  <div className="py-16 md:py-24 lg:py-32">
    <div className="mx-auto w-full max-w-3xl mb-8 md:mb-12 lg:mb-16">
      <div className="text-center">
        <h2 className="font-bold text-3xl md:text-5xl">
          Focus your efforts on building your best product
        </h2>
        <div className="mx-auto mt-4 max-w-[528px] mb-8 md:mb-12 lg:mb-16">
          <p className="text-[#647084]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
        </div>
        <div className="flex justify-center">
          <div className="mr-6 md:mr-10 lg:mr-12">
            <h3 className="font-bold text-[#276ef1] text-2xl md:text-3xl">
              45k+
            </h3>
            <p className="text-sm text-[#636262]">Happy Customers</p>
          </div>
          <div className="">
            <h3 className="font-bold text-[#276ef1] text-2xl md:text-3xl">
              200K+
            </h3>
            <p className="text-sm text-[#636262]">Emails Sent</p>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto w-full max-w-7xl">
      <img
        src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b53f37e968a0517a786f7_Mask%20group.png"
        alt=""
        className="inline-block h-full w-full max-w-full object-cover"
      />
    </div>
  </div>
</div>
<section className="block">
  <div className="px-5 md:px-10">
    <div className="mx-auto w-full max-w-7xl">
      <div className="py-16 md:py-24 lg:py-32">
        <div className="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
          <div className="max-[991px]:[grid-area:1/1/2/2]">
            <img
              src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a940836e6cf8d_Group%2047854%20(2).svg"
              alt=""
              className="mx-auto inline-block h-full w-full max-w-[640px] object-cover"
            />
          </div>
          <div className="grid-cols-2 grid h-full w-full max-[991px]:max-w-[720px] max-[991px]:[grid-area:2/1/3/2] gap-2 sm:gap-4 md:gap-8">
            <div className="flex-col flex grid-cols-1 bg-white p-8 md:p-0">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                alt=""
                className="inline-block h-10 w-10 max-w-full mb-4"
              />
              <div className="font-semibold mb-4">Support</div>
              <div className="text-[#636262] text-sm sm:text-sm">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </div>
            </div>
            <div className="flex-col flex grid-cols-1 bg-white p-8 md:p-0">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                alt=""
                className="inline-block h-10 w-10 max-w-full mb-4"
              />
              <div className="font-semibold mb-4">Organise</div>
              <div className="text-[#636262] text-sm sm:text-sm">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </div>
            </div>
            <div className="flex-col flex grid-cols-1 bg-white p-8 md:p-0">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                alt=""
                className="inline-block h-10 w-10 max-w-full mb-4"
              />
              <div className="font-semibold mb-4">Flexibility</div>
              <div className="text-[#636262] text-sm sm:text-sm">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </div>
            </div>
            <div className="flex-col flex grid-cols-1 bg-white p-8 md:p-0">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                alt=""
                className="inline-block h-10 w-10 max-w-full mb-4"
              />
              <div className="font-semibold mb-4">Speed</div>
              <div className="text-[#636262] text-sm sm:text-sm">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </div>
            </div>
            <div className="flex-col flex grid-cols-1 bg-white p-8 md:p-0">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                alt=""
                className="inline-block h-10 w-10 max-w-full mb-4"
              />
              <div className="font-semibold mb-4">Quality</div>
              <div className="text-[#636262] text-sm sm:text-sm">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </div>
            </div>
            <div className="flex-col flex grid-cols-1 bg-white p-8 md:p-0">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                alt=""
                className="inline-block h-10 w-10 max-w-full mb-4"
              />
              <div className="font-semibold mb-4">Resource</div>
              <div className="text-[#636262] text-sm sm:text-sm">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
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
    <div className="mx-auto w-full max-w-5xl">
      <div className="sm:pb-20 pt-0 pb-12">
        <div className="flex-col flex items-center gap-[60px] sm:gap-20">
          <div className="flex-col flex min-w-full items-center max-[991px]:gap-12 max-[767px]:max-w-full max-[479px]:gap-[60px] gap-y-10 md:gap-y-[24px]">
            <div className="flex min-w-full bg-[#f7d046] max-[991px]:flex-col max-[991px]:gap-y-[60px] max-[991px]:px-6 max-[767px]:gap-y-12 max-[479px]:gap-12 max-[479px]:px-5 items-start lg:items-center py-8 sm:py-8 md:py-12 lg:py-20 rounded-lg sm:rounded-2xl pl-20 pr-10">
              <div className="flex-col flex items-start gap-10 max-[991px]:max-w-[85%] max-[991px]:gap-y-8">
                <div className="flex-col flex items-start gap-2.5 max-[991px]:gap-y-[14px]">
                  <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
                    See if Flowspark is right for you
                  </h2>
                  <p className="text-base sm:text-base">
                    Give Flowspark for a spin, we're certain you'll love it! Get
                    lightning fast Webflow development at your finger tips.
                  </p>
                </div>
                <a
                  href="https://www.flowspark.co/#pricing"
                  className="inline-block flex-none cursor-pointer bg-black font-semibold capitalize text-[#f7d046] transition hover:[box-shadow:rgb(0,_0,_0)_0px_0px] py-5 rounded-lg md:rounded-2xl text-base md:text-base px-6 md:px-8"
                >
                  Get Started
                </a>
              </div>
              <div className="flex-row flex max-h-[342px] max-w-[378px] overflow-hidden max-[991px]:flex max-[991px]:max-w-none max-[991px]:items-center max-[991px]:border-solid max-[991px]:border-white max-[479px]:max-h-none max-[479px]:border-[3px] min-h-[auto] sm:min-w-[auto] lg:min-h-[342px] xl:min-w-[378px] rounded-lg sm:rounded-xl">
                <img
                  src="https://uploads-ssl.webflow.com/63431a04e3265ccced472f2f/64be8907ac0579510479c3b0_Group%2047881%20(2).png"
                  alt=""
                  className="inline-block h-full w-full max-w-full object-cover"
                />
              </div>
            </div>
            <a
              href="https://uk.trustpilot.com/review/flowspark.co"
              target="_blank"
              className="flex-row flex min-w-full max-w-full items-start justify-center gap-x-2 text-black [border-bottom-style:solid] transition max-[479px]:flex-wrap md:pt-0 pt-16 pb-8"
            ></a>
            <div className="flex-col flex min-w-full items-start max-[479px]:max-w-full max-[479px]:gap-6 gap-y-6 md:gap-y-10">
              <div className="flex-row flex items-center py-2 max-[767px]:flex-wrap max-[767px]:gap-y-[36px] max-[479px]:gap-[30px] justify-center md:justify-between min-h-[auto] sm:min-h-[56px] md:min-w-full px-0 sm:px-6">
                <div className="flex-row flex items-start gap-x-10 max-[991px]:gap-8 max-[479px]:flex-wrap max-[479px]:justify-center max-[479px]:gap-6">
                  <a
                    href="https://build.flowspark.co/"
                    target="_blank"
                    className="text-sm font-medium text-[#8a8880] transition hover:text-[#f7d046] max-[479px]:text-center"
                  >
                    Components
                  </a>
                  <a
                    href="#pricing"
                    className="text-sm font-medium text-[#8a8880] transition hover:text-[#f7d046] max-[479px]:text-center"
                  >
                    Plans
                  </a>
                  <a
                    href="#FAQ"
                    className="text-sm font-medium text-[#8a8880] transition hover:text-[#f7d046] max-[479px]:text-center"
                  >
                    FAQS
                  </a>
                  <a
                    href="#portfolio"
                    className="text-sm font-medium text-[#8a8880] transition hover:text-[#f7d046] max-[479px]:text-center"
                  >
                    Portfolio
                  </a>
                  <a
                    href="https://www.flowspark.co/affiliate"
                    className="text-sm font-medium text-[#8a8880] transition hover:text-[#f7d046] max-[479px]:text-center"
                  >
                    Refer &amp; Earn
                  </a>
                  <a
                    href="https://build.flowspark.co/"
                    target="_blank"
                    className="text-sm font-medium text-[#8a8880] transition hover:text-[#f7d046] max-[479px]:text-center"
                  >
                    Templates
                  </a>
                </div>
                <div className="flex-row flex items-start">
                  <a
                    href="#"
                    className="flex max-h-10 min-h-[40px] min-w-[40px] max-w-[40px] items-center justify-center p-[10px] text-[#d6a701] transition"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/63431a04e3265ccced472f2f/64b18b25720aa2e76abd1f11_twitter.svg"
                      alt=""
                      className="inline-block h-full w-full max-w-full object-cover"
                    />
                  </a>
                  <a
                    href="#"
                    className="flex max-h-10 min-h-[40px] min-w-[40px] max-w-[40px] items-center justify-center p-[10px] text-[#d6a701] transition"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/63431a04e3265ccced472f2f/64b18b2d7ebc71ab3919ea8c_facebook.svg"
                      alt=""
                      className="inline-block h-full w-full max-w-full object-cover"
                    />
                  </a>
                </div>
              </div>
              <div className="flex-row flex min-w-full items-start justify-center py-2">
                <div className="text-sm font-medium text-[#8a8880] hover:text-[#f7d046] max-[479px]:text-center">
                  © 2023 Pixel True Design Studios. All rights reserved.
                </div>
              </div>
            </div>
          </div>
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
