import Link from "next/link";
import { useState } from "react";

export default function AdminLectureDetail() {
  const [check, setCheck] = useState(false);
  const test = new Array(7).fill({});

  return (
    <div className="h-screen overflow-y-scroll pb-32">
      <div className="flex">
        <div className="mr-8">
          <div className="before:content-['강의내용'] admin_before">
            <div className="text-sm mt-8 mb-2">
              <span>강의ID(80) 강의 이름이 들어갈 자리</span>
              <button
                className={`ml-2 text-white rounded p-1 text-sm shadow ${
                  check ? "bg-blue-300" : "bg-red-300"
                }`}
              >
                {check ? "공개" : "비공개"}
              </button>
            </div>
            <div className="w-full h-48 bg-black overflow-hidden rounded"></div>
            <div>
              <input
                className="admin_input mt-8"
                placeholder="커리큘럼 챕터(숫자)"
              />
              <input className="admin_input" placeholder="커리큘럼 제목" />
              <input className="admin_input" placeholder="커리큘럼 설명" />
              <input
                type="checkbox"
                className="mr-2"
                onChange={(e) => setCheck(e.target.checked)}
              />
              <span className="text-xs text-black">
                확인하였음 (체크해야 생성)
              </span>
              <button className="admin_btn">커리큘럼 생성</button>
            </div>
          </div>
        </div>
        <div className="w-full before:content-['커리큘럼'] admin_before">
          <div className="mt-8 grid curriculum_grid">
            {test.map((e, i) => (
              <Link href="#" key={i}>
                <a>
                  <div className="flex w-92 h-36 admin_border rounded box-border p-1">
                    <div className="w-40 mr-2">
                      <p className="text-xs">1. 커리큘럼 제목이 들어갑니다.</p>
                      <p className="text-xs text-gray-500 mt-2">123</p>
                    </div>
                    <div className="w-48 h-32 bg-black overflow-hidden rounded"></div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-screen rounded bg-neutral-100 mt-8">
        <h3>강의 상세미리보기</h3>
      </div>
    </div>
  );
}
