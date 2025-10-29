import { useParams } from "react-router";

export default function ItemPage() {
  const { id } = useParams();
  return <div className="bg-white">Item Page for item {id}</div>;
}
