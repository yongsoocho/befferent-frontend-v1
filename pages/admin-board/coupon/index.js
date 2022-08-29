import { useState } from "react";
import CouponComponent from "../../../components/Coupon.component";

export default function AdminCoupon() {
  const [couponName, setCouponName] = useState("");
  const [lectureId, setLectureId] = useState("");
  const [percent, setPercent] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [check, setCheck] = useState(false);

  const test = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

  const createCoupon = () => {
    console.log(check);
  };

  return (
    <div className="flex">
      <div className="flex flex-col">
        <div className="p-4 admin_before before:content-['쿠폰등록']">
          <input
            placeholder={"쿠폰 이름 (한글)"}
            className="admin_input mt-8"
            value={couponName}
            onChange={(e) => setCouponName(e.target.value)}
          />
          <input
            placeholder={"적용 강의 (고유 숫자로 된 id)"}
            className="admin_input"
            value={lectureId}
            onChange={(e) => setLectureId(e.target.value)}
          />
          <input
            placeholder={"쿠폰 코드"}
            className="admin_input"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <input
            placeholder={"적용 퍼센트 (% 없이  0~100 숫자로만)"}
            className="admin_input"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
          />
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) => setCheck(e.target.checked)}
            />
            <span className="text-xs text-black">
              확인하였음 (체크해야 생성)
            </span>
          </div>
          <button className="admin_btn" onClick={createCoupon}>
            쿠폰 생성
          </button>
        </div>
        <div className="box-border border w-80 p-4 rounded mt-4 before:content-['쿠폰미리보기'] admin_before">
          <div>
            <p className="m-0 mt-12 text-xs text-gray-500">쿠폰 이름</p>
            <span className="text-sm">
              {couponName.length === 0 ? "쿠폰 이름 예시" : couponName}
            </span>
            <p className="m-0 mt-4 text-xs text-gray-500">
              적용 강의 {percent.length === 0 ? "0" : percent}%
            </p>
            <span className="mb-4 text-sm">
              {lectureId.length === 0 ? "적용 강의 ID 예시" : lectureId}
            </span>
            <p className="m-0 mt-4 text-xs text-gray-500">쿠폰 번호</p>
            <span className="mb-4 text-sm">
              {couponCode.length === 0 ? "쿠폰 번호 예시" : couponCode}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-screen ml-8 box-border px-4 overflow-y-scroll grid coupon_grid pb-32 gap-3">
        {test.map((e, i) => (
          <CouponComponent key={i} data={e} />
        ))}
      </div>
    </div>
  );
}
