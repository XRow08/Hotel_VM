"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGetUser } from "@/hooks/getUser";
import { UserNav } from "../Profile/user-nav";

export function Header() {
  const pathname = usePathname();
  const user = useGetUser();

  const getAbbreviatedWalletAddress = (address: string) => {
    return `${address?.slice(0, 4)}...${address?.slice(-4)}`;
  };

  return (
    <header className="h-[100px] px-60 w-full bg-white bg-opacity-10 flex items-center justify-between absolute top-0">
      <Link href="/home">
        <Image
          alt="userImage"
          width={155.5}
          height={155.5}
          src={"/images/logo.png"}
          loading="lazy"
          draggable={false}
        />
      </Link>
      <div className="flex items-center gap-10 font-semibold text-lg">
        <Link
          href="/home"
          children={"Home"}
          className={pathname === "/home" ? "text-green-primary" : "text-white"}
        />
        <Link
          href="/tokenize"
          children={"Tokenize sua Safra"}
          className={
            pathname === "/tokenize" ? "text-green-primary" : "text-white"
          }
        />
        <Link
          href="/invista"
          children={"Invista no Agro"}
          className={
            pathname === "/invista" ? "text-green-primary" : "text-white"
          }
        />
      </div>
      {user && (
        <div className="flex h-10 items-center space-x-4 text-sm">
          <div className=" text-white flex flex-col items-end">
            <h4 className="text-sm font-medium">Olá, {user.name}</h4>
            {pathname !== "/home" && (
              <h4 className="text-sm font-medium flex gap-1">
                Conta
                <span className="text-green-primary">
                  {pathname === "/invista"
                    ? "investidor"
                    : pathname === "/tokenize"
                    ? "tokenizador"
                    : null}
                </span>
              </h4>
            )}
            <p className="text-xs text-gray-300">
              {getAbbreviatedWalletAddress(user.walletAddress)}
            </p>
          </div>
          <div className="h-full w-[1px] bg-white bg-opacity-50"></div>
          <UserNav {...user} />
        </div>
      )}
    </header>
  );
}
