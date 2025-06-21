"use client"
import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import clsx from "clsx"
import { motion, type Variants } from "framer-motion"
import { Transition } from "@headlessui/react"
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2"
import { FaFingerprint } from "react-icons/fa"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { BiMinus, BiPlus } from "react-icons/bi"
import { BsFillCheckCircleFill } from "react-icons/bs"

import { benefitsConfig, pricingConfig, testimonialsConfig, faqConfig, statsConfig, footerConfig } from "@/config/data"
import { getPlatformIconByName } from "@/utils"
import type { IPricing } from "@/types"

import { siteConfig, menuItems, heroConfig, ctaConfig } from "@/config/data"
import type { IBenefit, IBenefitBullet } from "@/types"

// Container Component
export const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return <div className={`px-5 w-full max-w-7xl mx-auto ${className ? className : ""}`}>{children}</div>
}

// Section Title Component
export const SectionTitle: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return React.cloneElement(children, {
    className: children.props.className + " text-3xl lg:text-5xl lg:leading-tight font-bold",
  })
}

// Section Component
export const Section: React.FC<
  React.PropsWithChildren<{
    id: string
    title: string
    description: string
  }>
> = ({ id, title, description, children }) => {
  return (
    <section id={id} className="py-10 lg:py-20">
      <SectionTitle>
        <h2 className="text-center mb-4">{title}</h2>
      </SectionTitle>
      <p className="mb-12 text-center">{description}</p>
      {children}
    </section>
  )
}

// App Store Button Component
export const AppStoreButton = ({ dark }: { dark?: boolean }) => {
  return (
    <a href={ctaConfig.appStoreUrl}>
      <button
        type="button"
        className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", {
          "text-white bg-foreground": dark,
          "text-foreground bg-white": !dark,
        })}
      >
        <div className="mr-3">
          <svg viewBox="0 0 384 512" width="30">
            <path
              fill="currentColor"
              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            ></path>
          </svg>
        </div>
        <div>
          <div className="text-xs">Download on the</div>
          <div className="-mt-1 font-sans text-xl font-semibold">App Store</div>
        </div>
      </button>
    </a>
  )
}

// Play Store Button Component
export const PlayStoreButton = ({ dark }: { dark?: boolean }) => {
  return (
    <a href={ctaConfig.googlePlayUrl}>
      <button
        type="button"
        className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", {
          "text-white bg-foreground": dark,
          "text-foreground bg-white": !dark,
        })}
      >
        <div className="mr-3">
          <svg viewBox="30 336.7 120.9 129.2" width="30">
            <path
              fill="#FFD400"
              d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
            ></path>
            <path
              fill="#FF3333"
              d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
            ></path>
            <path
              fill="#48FF48"
              d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
            ></path>
            <path
              fill="#3BCCFF"
              d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
            ></path>
          </svg>
        </div>
        <div>
          <div className="text-xs">GET IT ON</div>
          <div className="-mt-1 font-sans text-xl font-semibold">Google Play</div>
        </div>
      </button>
    </a>
  )
}

// Header Component
export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
      <Container className="!px-0">
        <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <FaFingerprint className="text-foreground min-w-fit w-7 h-7" />
            <span className="manrope text-xl font-semibold text-foreground cursor-pointer">{siteConfig.siteName}</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link href={item.url} className="text-foreground hover:text-foreground-accent transition-colors">
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#cta"
                className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors"
              >
                Download
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link href={item.url} className="text-foreground hover:text-primary block" onClick={toggleMenu}>
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#cta"
                className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  )
}

// Hero Component
export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5">
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]"></div>

      <div className="text-center">
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
          {heroConfig.heading}
        </h1>
        <p className="mt-4 text-foreground max-w-lg mx-auto">{heroConfig.subheading}</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
          <AppStoreButton dark />
          <PlayStoreButton dark />
        </div>
        <Image
          src={heroConfig.centerImageSrc || "/placeholder.svg"}
          width={384}
          height={340}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="app mockup"
          className="relative mt-12 md:mt-16 mx-auto z-10"
        />
      </div>
    </section>
  )
}

// Logos Component
export const Logos: React.FC = () => {
  return (
    <section id="logos" className="py-32 px-5 bg-background">
      <p className="text-lg font-medium text-center">
        Trusted by <span className="text-secondary">2000+</span> customers worldwide
      </p>
      <div className="mt-5 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10 opacity-45 logos-container">
        {/* Notion */}
        <svg
          width="129"
          height="48"
          viewBox="0 0 129 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/6"
        >
          <path
            d="M44.9356 34.7749V20.2199H45.1949L55.7896 34.7749H59.1236V13.4006H55.4192V27.919H55.1598L44.5652 13.4006H41.2312V34.7749H44.9356ZM69.6071 35.1049C74.497 35.1049 77.4976 31.9519 77.4976 26.6725C77.4976 21.4297 74.497 18.2401 69.6071 18.2401C64.7543 18.2401 61.7167 21.4297 61.7167 26.6725C61.7537 31.9519 64.7173 35.1049 69.6071 35.1049ZM69.6071 32.0252C67.014 32.0252 65.5322 30.0821 65.5322 26.6725C65.5322 23.2995 67.014 21.3198 69.6071 21.3198C72.2002 21.3198 73.682 23.2995 73.682 26.6725C73.682 30.0821 72.2002 32.0252 69.6071 32.0252ZM80.8686 14.6105V18.68H78.2755V21.6131H80.8686V30.4487C80.8686 33.6017 82.3504 34.8483 86.1289 34.8483C86.8327 34.8483 87.5366 34.7749 88.0922 34.6649V31.8053C87.6477 31.8419 87.3513 31.8786 86.8327 31.8786C85.2769 31.8786 84.573 31.182 84.573 29.5688V21.6131H88.0922V18.68H84.573V14.6105H80.8686ZM90.3149 34.7749H94.0193V18.5701H90.3149V34.7749ZM92.1671 15.8937C93.3896 15.8937 94.3898 14.9038 94.3898 13.6939C94.3898 12.4474 93.3896 11.4575 92.1671 11.4575C90.9446 11.4575 89.9444 12.4474 89.9444 13.6939C89.9444 14.9038 90.9446 15.8937 92.1671 15.8937ZM104.169 35.1049C109.059 35.1049 112.06 31.9519 112.06 26.6725C112.06 21.4297 109.059 18.2401 104.169 18.2401C99.3166 18.2401 96.279 21.4297 96.279 26.6725C96.279 31.9519 99.2426 35.1049 104.169 35.1049ZM104.169 32.0252C101.576 32.0252 100.095 30.0821 100.095 26.6725C100.095 23.2995 101.576 21.3198 104.169 21.3198C106.726 21.3198 108.244 23.2995 108.244 26.6725C108.207 30.0821 106.726 32.0252 104.169 32.0252ZM114.245 34.7749H117.95V25.3526C117.95 22.9696 119.358 21.4664 121.543 21.4664C123.803 21.4664 124.84 22.7129 124.84 25.1693V34.7749H128.545V24.2894C128.545 20.4032 126.544 18.2401 122.914 18.2401C120.469 18.2401 118.839 19.34 118.061 21.1731H117.802V18.5701H114.208C114.245 18.5701 114.245 34.7749 114.245 34.7749Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.71206 12.0326C6.79023 12.9024 7.18021 12.8337 9.19893 12.6964L28.2162 11.5519C28.6291 11.5519 28.285 11.1399 28.1474 11.0941L24.9816 8.82806C24.3852 8.37028 23.5594 7.82093 22.0224 7.95826L3.62452 9.30874C2.95926 9.37741 2.82162 9.72075 3.0969 9.97254L5.71206 12.0326ZM6.85905 16.4502V36.4098C6.85905 37.4857 7.38667 37.8748 8.60249 37.8061L29.5008 36.593C30.7166 36.5243 30.8543 35.7918 30.8543 34.922V15.0998C30.8543 14.23 30.5102 13.7493 29.7761 13.818L7.93723 15.0998C7.13433 15.1684 6.85905 15.5804 6.85905 16.4502ZM27.4821 17.5261C27.6197 18.1212 27.4821 18.7392 26.8857 18.8079L25.8763 19.0139V33.7547C25.0046 34.2125 24.2017 34.4871 23.5135 34.4871C22.4353 34.4871 22.16 34.1438 21.3571 33.1367L14.7733 22.8135V32.7933L16.8609 33.2511C16.8609 33.2511 16.8609 34.4642 15.1863 34.4642L10.5524 34.7389C10.4148 34.4642 10.5524 33.8005 11.0112 33.6631L12.227 33.3198V20.1355L10.5524 19.9981C10.4148 19.403 10.7589 18.5332 11.6994 18.4645L16.6774 18.1212L23.5364 28.5588V19.3343L21.793 19.1283C21.6553 18.3959 22.2059 17.8465 22.8712 17.7778L27.4821 17.5261ZM2.08754 7.47759L21.2424 6.08133C23.5823 5.87532 24.2017 6.01266 25.6698 7.08847L31.7719 11.3688C32.7812 12.1013 33.1253 12.3073 33.1253 13.1084V36.6159C33.1253 38.0808 32.5977 38.9506 30.7166 39.0879L8.48779 40.4384C7.06552 40.5071 6.40026 40.3011 5.66618 39.3626L1.147 33.5258C0.3441 32.45 0 31.6488 0 30.7104V9.81231C0 8.59917 0.550559 7.61492 2.08754 7.47759Z"
            fill="black"
          />
        </svg>

        {/* Stripe */}
        <svg
          width="80"
          height="48"
          viewBox="0 0 80 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/6"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M79.3058 25.8169C79.3058 20.1774 76.5741 15.7274 71.3532 15.7274C66.1102 15.7274 62.938 20.1774 62.938 25.7728C62.938 32.4037 66.6829 35.7521 72.0581 35.7521C74.6796 35.7521 76.6622 35.1573 78.1602 34.3202V29.9143C76.6622 30.6633 74.9439 31.126 72.763 31.126C70.6262 31.126 68.7317 30.377 68.4893 27.7775H79.2617C79.2617 27.4911 79.3058 26.3456 79.3058 25.8169ZM68.4233 23.7241C68.4233 21.2348 69.9433 20.1994 71.3311 20.1994C72.6749 20.1994 74.1068 21.2348 74.1068 23.7241H68.4233Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M54.4345 15.7274C52.2756 15.7274 50.8877 16.7408 50.1167 17.4457L49.8303 16.0799H44.9839V41.7661L50.4912 40.5986L50.5132 34.3643C51.3063 34.937 52.4739 35.7521 54.4124 35.7521C58.3557 35.7521 61.9465 32.5799 61.9465 25.5966C61.9244 19.2081 58.2896 15.7274 54.4345 15.7274ZM53.1127 30.9056C51.813 30.9056 51.0419 30.443 50.5132 29.8703L50.4912 21.6974C51.064 21.0585 51.857 20.6179 53.1127 20.6179C55.1174 20.6179 56.5052 22.8649 56.5052 25.7508C56.5052 28.7027 55.1394 30.9056 53.1127 30.9056Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.4057 14.4277L42.935 13.2381V8.76611L37.4057 9.93367V14.4277Z"
            fill="black"
          />
          <path d="M42.935 16.1019H37.4057V35.3776H42.935V16.1019Z" fill="black" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.4795 17.7321L31.1271 16.1019H26.3687V35.3776H31.8761V22.3142C33.1758 20.6179 35.3787 20.9263 36.0616 21.1686V16.1019C35.3567 15.8375 32.7793 15.3529 31.4795 17.7321Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.465 11.3215L15.0899 12.467L15.0679 30.1125C15.0679 33.3729 17.5131 35.7741 20.7735 35.7741C22.5799 35.7741 23.9016 35.4436 24.6286 35.0471V30.5751C23.9237 30.8615 20.443 31.8749 20.443 28.6145V20.7941H24.6286V16.1019H20.443L20.465 11.3215Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.57342 21.6974C5.57342 20.8383 6.27836 20.5078 7.44592 20.5078C9.12015 20.5078 11.235 21.0145 12.9092 21.9177V16.7408C11.0808 16.0138 9.27435 15.7274 7.44592 15.7274C2.97396 15.7274 0 18.0626 0 21.9618C0 28.0418 8.37115 27.0726 8.37115 29.694C8.37115 30.7074 7.48998 31.0378 6.25633 31.0378C4.4279 31.0378 2.09279 30.2888 0.242322 29.2755V34.5185C2.29105 35.3996 4.36181 35.7742 6.25633 35.7742C10.8384 35.7742 13.9886 33.5051 13.9886 29.5619C13.9666 22.9971 5.57342 24.1647 5.57342 21.6974Z"
            fill="black"
          />
        </svg>

        {/* Dropbox */}
        <svg
          width="163"
          height="48"
          viewBox="0 0 163 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/6"
        >
          <path
            d="M45.0503 14.0131H52.6724C57.5318 14.0131 61.546 16.8247 61.546 23.2442V24.5931C61.546 31.0613 57.7918 33.9704 52.8187 33.9704H45.0503V14.0131ZM49.3083 17.6373V30.33H52.5749C55.3377 30.33 57.1905 28.526 57.1905 24.5118V23.4555C57.1905 19.4412 55.2402 17.6373 52.4287 17.6373H49.3083ZM63.805 17.8323H67.2179L67.7705 21.5865C68.4205 19.0349 70.0782 17.6698 73.0848 17.6698H74.1412V21.9765H72.386C68.9243 21.9765 68.0792 23.1792 68.0792 26.5921V34.0192H63.87V17.8323H63.805ZM74.9863 26.2508V25.7957C74.9863 20.3838 78.448 17.426 83.161 17.426C87.9716 17.426 91.3357 20.3838 91.3357 25.7957V26.2508C91.3357 31.5652 88.0691 34.4255 83.161 34.4255C77.9441 34.3767 74.9863 31.5814 74.9863 26.2508ZM87.029 26.202V25.7957C87.029 22.7891 85.5175 20.9852 83.1123 20.9852C80.7557 20.9852 79.1955 22.6429 79.1955 25.7957V26.202C79.1955 29.1111 80.707 30.7688 83.1123 30.7688C85.5175 30.7201 87.029 29.1111 87.029 26.202ZM93.546 17.8323H97.0564L97.4627 20.8877C98.3078 18.8399 100.112 17.426 102.777 17.426C106.889 17.426 109.603 20.3838 109.603 25.8607V26.3158C109.603 31.6302 106.596 34.4417 102.777 34.4417C100.226 34.4417 98.4703 33.2879 97.6089 31.4351V39.6098H93.4972L93.546 17.8323ZM105.329 26.202V25.8445C105.329 22.6266 103.671 21.0339 101.461 21.0339C99.1041 21.0339 97.5439 22.8379 97.5439 25.8445V26.1533C97.5439 29.0136 99.0554 30.8176 101.412 30.8176C103.833 30.7688 105.329 29.2249 105.329 26.202ZM115.827 31.0288L115.47 33.9867H111.862V12.4204H115.974V20.6926C116.884 18.5799 118.688 17.426 121.239 17.426C125.107 17.4748 127.968 20.1401 127.968 25.5032V26.007C127.968 31.3701 125.253 34.4417 121.142 34.4417C118.428 34.3767 116.672 33.1253 115.827 31.0288ZM123.645 26.007V25.6007C123.645 22.6429 122.036 20.9852 119.777 20.9852C117.469 20.9852 115.86 22.8379 115.86 25.6495V26.007C115.86 29.0136 117.42 30.7688 119.728 30.7688C122.198 30.7688 123.645 29.2249 123.645 26.007ZM129.771 26.2508V25.7957C129.771 20.3838 133.233 17.426 137.946 17.426C142.757 17.426 146.121 20.3838 146.121 25.7957V26.2508C146.121 31.5652 142.806 34.4255 137.946 34.4255C132.729 34.3767 129.771 31.5814 129.771 26.2508ZM141.847 26.202V25.7957C141.847 22.7891 140.335 20.9852 137.93 20.9852C135.573 20.9852 134.013 22.6429 134.013 25.7957V26.202C134.013 29.1111 135.525 30.7688 137.93 30.7688C140.351 30.7201 141.847 29.1111 141.847 26.202ZM151.63 25.6007L145.958 17.8323H150.818L154.084 22.6916L157.4 17.8323H162.21L156.457 25.5519L162.519 33.9867H157.757L154.052 28.6236L150.444 33.9867H145.471L151.63 25.6007Z"
            fill="black"
          />
          <path
            d="M18.8522 14.0132L9.42611 20.0264L18.8522 26.0396L9.42611 32.0528L0 26.0071L9.42611 19.9939L0 14.0132L9.42611 8L18.8522 14.0132ZM9.37735 33.9868L18.8035 27.9736L28.2296 33.9868L18.8035 40L9.37735 33.9868ZM18.8522 26.0071L28.2783 19.9939L18.8522 14.0132L28.2296 8L37.6557 14.0132L28.2296 20.0264L37.6557 26.0396L28.2296 32.0528L18.8522 26.0071Z"
            fill="black"
          />
        </svg>

        {/* Shopify */}
        <svg
          width="127"
          height="48"
          viewBox="0 0 127 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/6"
        >
          <path
            d="M26.8473 11.6059C26.7209 11.6059 24.2182 11.5553 24.2182 11.5553C24.2182 11.5553 22.12 9.53293 21.9177 9.30541C21.8419 9.22957 21.7408 9.17901 21.6397 9.17901V40.248L31.0185 37.9222C31.0185 37.9222 27.2012 12.0609 27.176 11.884C27.1254 11.707 26.9737 11.6059 26.8473 11.6059Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.8472 11.6057C26.9736 11.6057 27.1253 11.7068 27.1506 11.8838C27.1759 12.0607 30.9931 37.922 31.0184 37.922L21.6396 40.2478L0 36.5064C0 36.5064 2.57855 16.5605 2.62911 15.8527C2.75551 14.9173 2.78079 14.8921 3.7667 14.5887C3.80772 14.5887 4.71415 14.3058 6.09439 13.875C6.41526 13.7748 6.76175 13.6667 7.12892 13.5522C7.35644 12.0607 8.08956 10.1394 9.05019 8.59737C10.4406 6.4233 12.1343 5.18459 13.8281 5.13403C14.7129 5.10875 15.446 5.41211 16.0274 6.01882C16.0601 6.03515 16.0822 6.06201 16.1074 6.09261C16.1212 6.1094 16.1359 6.12731 16.1538 6.14522C16.255 6.11994 16.3308 6.11994 16.4319 6.11994C17.7465 6.11994 18.8588 6.87834 19.5919 8.29401C19.8194 8.74905 19.9964 9.17881 20.0975 9.53273C20.7548 9.33049 21.1593 9.20409 21.1593 9.20409C21.3109 9.15353 21.7154 9.10297 21.9177 9.30521C22.1199 9.53273 24.2181 11.5551 24.2181 11.5551C24.2181 11.5551 26.7208 11.6057 26.8472 11.6057ZM17.342 10.4175C17.9487 10.2153 18.5049 10.0383 19.0105 9.88665C18.7577 9.00185 18.1257 7.53562 16.8364 7.33338C17.2156 8.34457 17.342 9.55801 17.342 10.4175ZM12.5895 11.8584C13.8282 11.4793 15.0668 11.1001 16.2044 10.7462C16.2297 9.81081 16.1286 8.42041 15.623 7.4345C15.1426 7.63674 14.7129 7.99065 14.4095 8.31929C13.6006 9.20409 12.9433 10.5186 12.5894 11.8585L12.5895 11.8584ZM14.8898 6.5497C14.6118 6.34746 14.2831 6.27162 13.8787 6.27162C11.2748 6.34746 8.97435 10.4428 8.36764 13.1983C8.58363 13.1323 8.80532 13.0649 9.03169 12.996C9.75912 12.7748 10.5349 12.5389 11.3254 12.2882C11.654 10.5439 12.4883 8.74905 13.5753 7.58618C13.9798 7.13114 14.4348 6.77722 14.8898 6.5497ZM15.3453 20.504L16.4323 16.4339C16.4323 16.4339 15.497 15.9536 13.6515 16.08C8.89893 16.3834 6.75014 19.6951 6.95238 22.9814C7.09448 25.1841 8.38689 26.1006 9.51839 26.9031C10.3998 27.5281 11.1835 28.0839 11.25 29.1244C11.3005 29.6806 10.9213 30.5148 9.9354 30.5654C8.41861 30.6665 6.49734 29.2256 6.49734 29.2256L5.76422 32.335C5.76422 32.335 7.66021 34.3574 11.0983 34.1804C13.9802 34.0035 15.952 31.703 15.7498 28.3408C15.5814 25.7543 13.7638 24.5854 12.3275 23.6618C11.3914 23.0598 10.6173 22.562 10.5674 21.8438C10.5674 21.5152 10.5674 20.1754 12.6909 20.049C14.1319 19.9479 15.3453 20.504 15.3453 20.504Z"
            fill="black"
          />
          <path
            d="M43.7091 25.1053C42.6221 24.5239 42.0659 24.0183 42.0659 23.3357C42.0659 22.4762 42.8496 21.92 44.0631 21.92C45.4787 21.92 46.7427 22.5015 46.7427 22.5015L47.7286 19.4679C47.7286 19.4679 46.8186 18.7601 44.1389 18.7601C40.3975 18.7601 37.7936 20.9089 37.7936 23.9172C37.7936 25.6362 39.0071 26.9255 40.625 27.8608C41.9395 28.5939 42.3946 29.1248 42.3946 29.9085C42.3946 30.7174 41.7373 31.3747 40.5239 31.3747C38.729 31.3747 37.01 30.4394 37.01 30.4394L35.9482 33.4729C35.9482 33.4729 37.5156 34.5347 40.17 34.5347C44.0125 34.5347 46.7933 32.6387 46.7933 29.2259C46.768 27.3805 45.3776 26.0659 43.7091 25.1053Z"
            fill="black"
          />
          <path
            d="M59.0288 18.7097C57.1328 18.7097 55.6413 19.6198 54.5037 20.9849L54.4532 20.9596L56.0963 12.3645H51.8241L47.6529 34.2568H51.9252L53.3408 26.774C53.897 23.9427 55.3632 22.1983 56.7283 22.1983C57.689 22.1983 58.0682 22.8556 58.0682 23.791C58.0682 24.3724 58.0176 25.1055 57.8912 25.687L56.2733 34.2568H60.5456L62.2141 25.4089C62.391 24.4735 62.5174 23.3612 62.5174 22.6028C62.5427 20.176 61.2787 18.7097 59.0288 18.7097Z"
            fill="black"
          />
          <path
            d="M72.2245 18.7093C67.0675 18.7093 63.6547 23.3608 63.6547 28.5432C63.6547 31.8549 65.7023 34.5345 69.5449 34.5345C74.6009 34.5345 78.0136 30.0095 78.0136 24.7007C78.0389 21.6418 76.244 18.7093 72.2245 18.7093ZM70.1263 31.2734C68.6601 31.2734 68.0534 30.0347 68.0534 28.4674C68.0534 26.0152 69.3174 22.021 71.6431 22.021C73.1599 22.021 73.6655 23.3356 73.6655 24.5996C73.6655 27.2287 72.3762 31.2734 70.1263 31.2734Z"
            fill="black"
          />
          <path
            d="M88.9857 18.7093C86.1038 18.7093 84.4606 21.2626 84.4606 21.2626H84.41L84.6628 18.9621H80.8708C80.6939 20.5042 80.34 22.8805 80.0113 24.6501L77.0283 40.3236H81.3006L82.4888 33.9784H82.5899C82.5899 33.9784 83.4747 34.5345 85.0926 34.5345C90.1233 34.5345 93.4097 29.3775 93.4097 24.1698C93.4097 21.2879 92.1204 18.7093 88.9857 18.7093ZM84.8903 31.324C83.778 31.324 83.1207 30.692 83.1207 30.692L83.8286 26.6978C84.3342 24.0181 85.7246 22.2485 87.2161 22.2485C88.5306 22.2485 88.9351 23.462 88.9351 24.5996C88.9351 27.3803 87.2919 31.324 84.8903 31.324Z"
            fill="black"
          />
          <path
            d="M99.5266 12.5666C98.1615 12.5666 97.0745 13.6537 97.0745 15.0441C97.0745 16.308 97.8835 17.1928 99.0969 17.1928H99.1474C100.487 17.1928 101.625 16.2828 101.65 14.7154C101.65 13.4767 100.816 12.5666 99.5266 12.5666Z"
            fill="black"
          />
          <path d="M93.5356 34.2313H97.8079L100.715 19.0634H96.4175L93.5356 34.2313Z" fill="black" />
          <path
            d="M111.61 19.0384H108.627L108.779 18.3305C109.032 16.8643 109.891 15.575 111.332 15.575C112.091 15.575 112.697 15.8026 112.697 15.8026L113.532 12.4403C113.532 12.4403 112.799 12.0611 111.206 12.0611C109.689 12.0611 108.172 12.4909 107.009 13.4768C105.543 14.7155 104.861 16.5104 104.532 18.3305L104.406 19.0384H102.409L101.777 22.2742H103.774L101.498 34.2569H105.771L108.046 22.2742H111.004L111.61 19.0384Z"
            fill="black"
          />
          <path
            d="M121.924 19.0634C121.924 19.0634 119.245 25.8131 118.057 29.504H118.006C117.93 28.3158 116.944 19.0634 116.944 19.0634H112.444L115.023 32.9926C115.074 33.296 115.048 33.4982 114.922 33.7005C114.416 34.6611 113.582 35.5964 112.596 36.279C111.787 36.8604 110.877 37.2396 110.169 37.4924L111.357 41.1327C112.217 40.9558 114.037 40.2227 115.554 38.807C117.5 36.9868 119.321 34.1555 121.166 30.313L126.399 19.0634H121.924Z"
            fill="black"
          />
        </svg>

        {/* Slack */}
        <svg
          width="122"
          height="48"
          viewBox="0 0 122 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/6"
        >
          <g clipPath="url(#clip0_3_498)">
            <path
              d="M38.3433 32.4263L39.8114 28.9949C41.4189 30.1853 43.5155 30.8154 45.6127 30.8154C47.1505 30.8154 48.1289 30.2204 48.1289 29.3101C48.0938 26.7889 38.8676 28.7498 38.7974 22.4112C38.7623 19.1897 41.6284 16.7036 45.6829 16.7036C48.0938 16.7036 50.5057 17.2991 52.218 18.6649L50.8461 22.1696C49.2707 21.1566 47.3249 20.4503 45.4728 20.4503C44.2147 20.4503 43.3757 21.0453 43.3757 21.8162C43.4108 24.3023 52.7077 22.9364 52.8124 28.9949C52.8124 32.2865 50.016 34.5977 46.0317 34.5977C43.0965 34.5977 40.4054 33.8975 38.3428 32.4263H38.3433ZM96.8013 27.7523C96.4307 28.4108 95.8917 28.9588 95.2394 29.3402C94.5872 29.7216 93.8452 29.9226 93.0897 29.9227C90.7349 29.9227 88.8262 28.0099 88.8262 25.6506C88.8262 23.2913 90.7349 21.3786 93.0897 21.3786C93.8452 21.3787 94.5872 21.5797 95.2394 21.9611C95.8917 22.3425 96.4307 22.8905 96.8013 23.549L100.883 21.2834C99.3541 18.5511 96.4379 16.7036 93.0897 16.7036C88.158 16.7036 84.1602 20.709 84.1602 25.6506C84.1602 30.5918 88.158 34.5977 93.0897 34.5977C96.4379 34.5977 99.3541 32.7501 100.883 30.0179L96.8013 27.7523ZM55.461 34.2473H60.5635V9.25574H55.4615L55.461 34.2473ZM103.46 9.25574V34.2473H108.562V26.7599L114.609 34.2473H121.131L113.442 25.3524L120.571 17.0524H114.329L108.562 23.953V9.25574H103.46ZM76.2838 17.0535V19.085C75.4452 17.684 73.3831 16.7036 71.2163 16.7036C66.7427 16.7036 63.2131 20.6608 63.2131 25.6331C63.2131 30.6053 66.7427 34.5977 71.2163 34.5977C73.3831 34.5977 75.4452 33.6173 76.2838 32.2163V34.2473H81.3863V17.0535H76.2838ZM76.2838 27.7869C75.5499 29.0124 74.0122 29.9222 72.2999 29.9222C69.9446 29.9222 68.0359 28.0099 68.0359 25.6506C68.0359 23.2913 69.9446 21.3786 72.2999 21.3786C74.0122 21.3786 75.5499 22.3239 76.2838 23.584V27.7869Z"
              fill="black"
            />
            <path
              d="M11.3965 8.70361C9.74293 8.70361 8.40263 10.0469 8.40263 11.7035C8.40223 12.0971 8.47936 12.4868 8.6296 12.8506C8.77985 13.2143 9.00026 13.5449 9.27827 13.8235C9.55628 14.1021 9.88643 14.3231 10.2499 14.4741C10.6133 14.6251 11.0029 14.703 11.3965 14.7034H14.3909V11.7035C14.3915 10.9086 14.0765 10.1461 13.5149 9.58348C12.9534 9.0209 12.1914 8.70441 11.3965 8.70361ZM11.3965 16.7033H3.41233C1.75876 16.7033 0.418457 18.0466 0.418457 19.7037C0.418457 21.3603 1.75876 22.7036 3.41233 22.7036H11.397C13.0501 22.7036 14.3909 21.3603 14.3909 19.7037C14.3909 18.0466 13.0501 16.7033 11.3965 16.7033Z"
              fill="black"
            />
            <path
              d="M30.3593 19.7037C30.3593 18.0466 29.0185 16.7033 27.365 16.7033C25.7114 16.7033 24.3711 18.0466 24.3711 19.7037V22.7036H27.365C28.1598 22.7028 28.9218 22.3863 29.4834 21.8237C30.0449 21.2612 30.36 20.4986 30.3593 19.7037ZM22.3752 19.7037V11.7035C22.3758 10.9086 22.0607 10.1461 21.4992 9.58348C20.9377 9.0209 20.1756 8.70441 19.3808 8.70361C17.7272 8.70361 16.3869 10.0469 16.3869 11.7035V19.7032C16.3869 21.3608 17.7272 22.7041 19.3808 22.7041C20.1756 22.7033 20.9377 22.3868 21.4992 21.8242C22.0607 21.2617 22.3758 20.4991 22.3752 19.7042"
              fill="black"
            />
            <path
              d="M19.3808 38.7036C20.1757 38.7028 20.9377 38.3863 21.4993 37.8237C22.0608 37.2612 22.3759 36.4986 22.3752 35.7037C22.3759 34.9088 22.0608 34.1463 21.4993 33.5837C20.9377 33.0211 20.1757 32.7046 19.3808 32.7038H16.387V35.7037C16.387 37.3603 17.7273 38.7036 19.3808 38.7036ZM19.3808 30.7039H27.3655C29.0186 30.7039 30.3594 29.3606 30.3594 27.7035C30.3601 26.9086 30.045 26.1461 29.4834 25.5835C28.9219 25.0209 28.1599 24.7044 27.365 24.7036H19.3808C17.7273 24.7036 16.387 26.0469 16.387 27.7035C16.3866 28.0971 16.4637 28.4868 16.6139 28.8506C16.7642 29.2143 16.9846 29.5449 17.2626 29.8235C17.5406 30.1021 17.8708 30.3231 18.2342 30.4741C18.5977 30.6251 18.9873 30.703 19.3808 30.7034"
              fill="black"
            />
            <path
              d="M0.418214 27.7035C0.417819 28.0971 0.494945 28.4868 0.645187 28.8506C0.79543 29.2143 1.01585 29.5449 1.29385 29.8235C1.57186 30.1021 1.90201 30.3231 2.26546 30.4741C2.62891 30.6251 3.01853 30.703 3.41209 30.7034C4.20696 30.7026 4.96896 30.3861 5.5305 29.8235C6.09205 29.261 6.40713 28.4984 6.40647 27.7035V24.7036H3.41209C1.75852 24.7036 0.418214 26.0469 0.418214 27.7035ZM8.40239 27.7035V35.7032C8.40239 37.3603 9.74269 38.7036 11.3963 38.7036C12.1911 38.7028 12.9531 38.3863 13.5147 37.8237C14.0762 37.2612 14.3913 36.4986 14.3906 35.7037V27.7035C14.391 27.3099 14.3139 26.9201 14.1636 26.5563C14.0133 26.1925 13.7929 25.8619 13.5148 25.5833C13.2368 25.3048 12.9066 25.0837 12.543 24.9327C12.1795 24.7818 11.7899 24.7039 11.3963 24.7036C9.74269 24.7036 8.40239 26.0469 8.40239 27.7035Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_498">
              <rect width="121" height="48" fill="white" transform="translate(0.418213)" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  )
}

// Benefit Bullet Component
const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }) => {
  const childVariants = {
    offscreen: {
      opacity: 0,
      x: -50,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  }

  return (
    <motion.div
      className="flex flex-col items-center mt-8 gap-3 lg:gap-5 lg:flex-row lg:items-start"
      variants={childVariants}
    >
      <div className="flex justify-center mx-auto lg:mx-0 flex-shrink-0 mt-3 w-fit">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-base text-foreground-accent">{description}</p>
      </div>
    </motion.div>
  )
}

// Benefit Section Component
const BenefitSection: React.FC<{
  benefit: IBenefit
  imageAtRight?: boolean
}> = ({ benefit, imageAtRight }) => {
  const { title, description, imageSrc, bullets } = benefit

  const containerVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: 100,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.9,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const childVariants = {
    offscreen: {
      opacity: 0,
      x: -50,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  }

  return (
    <section className="benefit-section">
      <motion.div
        className="flex flex-wrap flex-col items-center justify-center gap-2 lg:flex-row lg:gap-20 lg:flex-nowrap mb-24"
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <div
          className={clsx("flex flex-wrap items-center w-full max-w-lg", {
            "justify-start": imageAtRight,
            "lg:order-1 justify-end": !imageAtRight,
          })}
        >
          <div className="w-full text-center lg:text-left ">
            <motion.div className="flex flex-col w-full" variants={childVariants}>
              <SectionTitle>
                <h3 className="lg:max-w-2xl">{title}</h3>
              </SectionTitle>

              <p className="mt-1.5 mx-auto lg:ml-0 leading-normal text-foreground-accent">{description}</p>
            </motion.div>

            <div className="mx-auto lg:ml-0 w-full">
              {bullets.map((item, index) => (
                <BenefitBullet key={index} title={item.title} icon={item.icon} description={item.description} />
              ))}
            </div>
          </div>
        </div>

        <div className={clsx("mt-5 lg:mt-0", { "lg:order-2": imageAtRight })}>
          <div className={clsx("w-fit flex", { "justify-start": imageAtRight, "justify-end": !imageAtRight })}>
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt="title"
              width="384"
              height="762"
              quality={100}
              className="lg:ml-0"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// Benefits Component
export const Benefits: React.FC = () => {
  return (
    <div id="features">
      <h2 className="sr-only">Features</h2>
      {benefitsConfig.map((item, index) => {
        return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
      })}
    </div>
  )
}

// Pricing Column Component
const PricingColumn: React.FC<{
  tier: IPricing
  highlight?: boolean
}> = ({ tier, highlight }) => {
  const { name, price, features } = tier

  return (
    <div
      className={clsx("w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full", {
        "shadow-lg": highlight,
      })}
    >
      <div className="p-6 border-b border-gray-200 rounded-t-xl">
        <h3 className="text-2xl font-semibold mb-4">{name}</h3>
        <p className="text-3xl md:text-5xl font-bold mb-6">
          <span className={clsx({ "text-secondary": highlight })}>
            {typeof price === "number" ? `$${price}` : price}
          </span>
          {typeof price === "number" && <span className="text-lg font-normal text-gray-600">/mo</span>}
        </p>
        <button
          className={clsx("w-full py-3 px-4 rounded-full transition-colors", {
            "bg-primary hover:bg-primary-accent": highlight,
            "bg-hero-background hover:bg-gray-200": !highlight,
          })}
        >
          Get Started
        </button>
      </div>
      <div className="p-6 mt-1">
        <p className="font-bold mb-0">FEATURES</p>
        <p className="text-foreground-accent mb-5">Everything in basic, plus...</p>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <BsFillCheckCircleFill className="h-5 w-5 text-secondary mr-2" />
              <span className="text-foreground-accent">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// Pricing Component
export const Pricing: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {pricingConfig.map((tier, index) => (
        <PricingColumn key={tier.name} tier={tier} highlight={index === 1} />
      ))}
    </div>
  )
}

// Testimonials Component
export const Testimonials: React.FC = () => {
  return (
    <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
      {testimonialsConfig.map((testimonial, index) => (
        <div key={index} className="">
          <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
            <Image
              src={testimonial.avatar || "/placeholder.svg"}
              alt={`${testimonial.name} avatar`}
              width={50}
              height={50}
              className="rounded-full shadow-md"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-secondary">{testimonial.name}</h3>
              <p className="text-sm text-foreground-accent">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-foreground-accent text-center lg:text-left">&quot;{testimonial.message}&quot;</p>
        </div>
      ))}
    </div>
  )
}

// FAQ Component
export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="">
          <p className="hidden lg:block text-foreground-accent">FAQ&apos;S</p>
          <SectionTitle>
            <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left">Frequently Asked Questions</h2>
          </SectionTitle>
          <p className="lg:mt-10 text-foreground-accent text-center lg:text-left">Ask us anything!</p>
          <a
            href="mailto:"
            className="mt-3 block text-xl lg:text-4xl text-secondary font-semibold hover:underline text-center lg:text-left"
          >
            help@finwise.com
          </a>
        </div>

        <div className="w-full lg:max-w-2xl mx-auto border-b">
          {faqConfig.map((faq, index) => (
            <div key={index} className="mb-7">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t">
                      <span className="text-2xl font-semibold">{faq.question}</span>
                      {open ? (
                        <BiMinus className="w-5 h-5 text-secondary" />
                      ) : (
                        <BiPlus className="w-5 h-5 text-secondary" />
                      )}
                    </DisclosureButton>
                    <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent">{faq.answer}</DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats Component
export const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-10 lg:py-20">
      <div className="grid sm:grid-cols-3 gap-8">
        {statsConfig.map((stat) => (
          <div key={stat.title} className="text-center sm:text-left max-w-md sm:max-w-full mx-auto">
            <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start">
              {stat.icon}
              {stat.title}
            </h3>
            <p className="text-foreground-accent">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// CTA Component
export const CTA: React.FC = () => {
  return (
    <section id="cta" className="mt-10 mb-5 lg:my-20">
      <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
        <div className="h-full w-full">
          <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
          </div>

          <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">
              {ctaConfig.heading}
            </h2>

            <p className="mx-auto max-w-xl md:px-5">{ctaConfig.subheading}</p>

            <div className="mt-4 flex flex-col sm:flex-row items-center sm:gap-4">
              <AppStoreButton />
              <PlayStoreButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer Component
export const Footer: React.FC = () => {
  return (
    <footer className="bg-hero-background text-foreground py-10">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <FaFingerprint className="min-w-fit w-5 h-5 md:w-7 md:h-7" />
            <h3 className="manrope text-xl font-semibold cursor-pointer">{siteConfig.siteName}</h3>
          </Link>
          <p className="mt-3.5 text-foreground-accent">{footerConfig.subheading}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-foreground-accent">
            {footerConfig.quickLinks.map((link) => (
              <li key={link.text} className="mb-2">
                <Link href={link.url} className="hover:text-foreground">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

          {footerConfig.email && (
            <a href={`mailto:${footerConfig.email}`} className="block text-foreground-accent hover:text-foreground">
              Email: {footerConfig.email}
            </a>
          )}

          {footerConfig.telephone && (
            <a href={`tel:${footerConfig.telephone}`} className="block text-foreground-accent hover:text-foreground">
              Phone: {footerConfig.telephone}
            </a>
          )}

          {footerConfig.socials && (
            <div className="mt-5 flex items-center gap-5 flex-wrap">
              {Object.keys(footerConfig.socials).map((platformName) => {
                if (platformName && footerConfig.socials[platformName]) {
                  return (
                    <Link href={footerConfig.socials[platformName]} key={platformName} aria-label={platformName}>
                      {getPlatformIconByName(platformName)}
                    </Link>
                  )
                }
              })}
            </div>
          )}
        </div>
      </div>
      <div className="mt-8 md:text-center text-foreground-accent px-6">
        <p>
          Copyright &copy; {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.
        </p>
        <p className="text-sm mt-2 text-gray-500">
          Made with &hearts; by{" "}
          <a href="https://nexilaunch.com" target="_blank" rel="noreferrer">
            Nexi Launch
          </a>
        </p>
        <p className="text-sm mt-2 text-gray-500">
          UI kit by{" "}
          <a
            href="https://ui8.net/youthmind/products/fintech-finance-mobile-app-ui-kit"
            target="_blank"
            rel="noreferrer"
          >
            Youthmind
          </a>
        </p>
      </div>
    </footer>
  )
}
