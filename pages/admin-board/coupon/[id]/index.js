import { useRouter } from "next/router";

export default function AdminCouponDetail() {
  const {
    query: { id },
  } = useRouter();

  return (
    <div className="h-screen flex justify-center items-center">
      <h2>준비중</h2>
    </div>
  );
}
