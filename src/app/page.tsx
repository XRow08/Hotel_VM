import { getItemType, getContract } from "@/api";
import { Content } from "./content";

export default async function Home() {
  const [item, contract] = await Promise.all([getItemType(), getContract()]);
  if (!item || !contract) {
    return <div>Item or contract not found</div>;
  }
  return <Content />;
}
