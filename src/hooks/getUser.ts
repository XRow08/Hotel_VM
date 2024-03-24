import { LoggedInUser } from "@lumx-protocol/embedded-wallet";
import { useState, useEffect } from "react";

export function useGetUser() {
  const [user, setUser] = useState<LoggedInUser>({
    name: "",
    walletId: "",
    walletAddress: "0x",
    email: "",
    cpf: "",
    phone: "",
    birthDate: "",
  });

  useEffect(() => {
    document.cookie = `walletId=${user.walletId}`;
    if (JSON.parse(window.localStorage.getItem("wallet.user") || "{}"))
      setUser(JSON.parse(window.localStorage.getItem("wallet.user") || "{}"));
  }, [user.walletId]);

  return user;
}
