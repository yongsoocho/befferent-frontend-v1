import CouponIcon from "../icons/coupon.icon";
import Link from "next/link";

export default function CouponComponent() {
  return (
    <Link href={`/admin-board/coupon/${7}`}>
      <a>
        <div className="w-80 h-36 flex flex-col justify-center shadow box-border rounded py-2 cursor-pointer overflow-hidden admin_border">
          <div className="flex items-center">
            <CouponIcon />
            <span className="text-sm mr-4">(쿠폰ID 10) 쿠폰</span>
            <span className="text-sm text-gray-500">10%</span>
          </div>
          <div className="mt-2 ml-5">
            <span className="text-sm">(강의ID 7) 강의 이름</span>
          </div>
          <div className="mt-2 ml-5">
            <span className="text-sm text-gray-500">쿠폰 코드</span>
          </div>
        </div>
      </a>
    </Link>
  );
}
