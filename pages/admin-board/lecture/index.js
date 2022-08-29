import Link from "next/link";
import { useState } from "react";

export default function AdminLecture() {
  const [lectureName, setLectureName] = useState("");
  const [check, setCheck] = useState(false);
  const test = [{}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <div className="flex">
      <div className="mr-8">
        <div className="before:content-['강의미리보기'] admin_before">
          <input
            className="admin_input mt-8"
            placeholder="강의 이름"
            value={lectureName}
            onChange={(e) => setLectureName(e.target.value)}
          />
          <div className="w-full h-48 bg-black overflow-hidden rounded"></div>
          <input type="file" className="text-xs my-4" />
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
          <button className="admin_btn">강의 등록</button>
        </div>
      </div>
      <div className="overflow-y-scroll w-full h-screen grid lecture_grid pb-32 box-border gap-3">
        {test.map((e, i) => (
          <Link key={i} href={`/admin-board/lecture/${i}`}>
            <a>
              <div className="w-60 h-40 shadow overflow-hidden rounded cursor-pointer admin_border">
                <div className="w-60 h-28 bg-black">
                  <img src={"#"} alt="" />
                </div>
                <div className="box-border pt-2 pl-2">
                  <span className="text-sm">title</span>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
