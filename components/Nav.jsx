"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Nav() {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }
    setProviders();
  }, [])

  return (
    <nav className="flex-between w-full pt-3 mb-16">
      <Link className="flex gap-2 flex-center" href="/">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Gönderi Oluştur
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Çıkış Yap
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                alt="Profile"
                width={37}
                height={37}
                className="rounded-full"
              ></Image>
            </Link>
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <button type="button" 
              key={provider.name} 
              onClick={() => signIn(provider.id)} 
              className="black_btn">
                Giriş Yap
              </button>
            ))}
          </>
        )}
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              onClick={() => setToggleDropDown((prev) => !prev)}
              alt="Profile"
              width={37}
              height={37}
              className="rounded-full"
            />
            {toggleDropDown && (
              <div className="dropdown">
                <Link href="/profile" 
                className="dropdown_link" 
                onClick={() => setToggleDropDown(false)}>
                  Profilim
                </Link>
                <Link href="/create-prompt" 
                className="dropdown_link" 
                onClick={() => setToggleDropDown(false)}>
                  İstek Oluştur
                </Link>
                <button className="mt-5 w-full black_btn" type="button"
                onClick={() => {setToggleDropDown(false); signOut()}}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <button type="button" 
                key={provider.name} 
                onClick={() => signIn(provider.id)} 
                className="black_btn">
                Giriş Yap
              </button>
            ))}
          </>
        )}
        </div>
    </nav>
  );
}
