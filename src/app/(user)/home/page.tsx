import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default async function HomeUser() {
  return (
    <div className="min-h-screen bg-home bg-center bg-no-repeat flex flex-col items-center justify-start pt-40 text-white">
      <div className="w-[700px] flex flex-col items-center justify-center text-center gap-6">
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <Image
            alt="userImage"
            width={16}
            height={16}
            src={"/images/icon.png"}
            loading="lazy"
            draggable={false}
          />
          Sobre a Demether
        </h1>
        <h1 className="font-semibold text-white text-5xl leading-tight">
          A Revolução Verde da Agricultura Sustentável!
        </h1>
        <p className="opacity-50">
          Nós somos a ponte entre o agricultor visionário e o investidor
          consciente. O agricultor que busca inovar, tokenizar suas safras e
          maximizar seus retornos encontra em nós um parceiro confiável. Do
          outro lado, temos investidores que buscam não apenas benefícios
          financeiros, mas também a satisfação de contribuir para uma
          agricultura sustentável em solos tropicais.
        </p>

        <Link href="/tokenize" className="w-1/2">
          <Button className="w-full">Tokenize sua Safra</Button>
        </Link>
      </div>
    </div>
  );
}
