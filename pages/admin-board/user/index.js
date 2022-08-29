import Link from "next/link";
import LeftchevronIcon from "../../../icons/leftchevron.icon";
import RightchevronIcon from "../../../icons/rightchevron.icon";
import { useState } from "react";

export default function AdminUser() {
  const [currentPage, setCurrentPage] = useState(1);
  const test = [{}, {}, {}];
  const test2 = new Array(50).fill({});

  return (
    <div className="flex">
      <div className="mr-8">
        <div className="before:content-['유저이메일검색'] admin_before">
          <input className="admin_input mt-8" placeholder="유저 이메일 검색" />
          <div>
            <button className="admin_btn">유저 검색</button>
          </div>
        </div>
        <div className="before:content-['유저ID검색'] admin_before mt-4">
          <input
            className="admin_input mt-8"
            placeholder="유저 ID 검색 (숫자)"
          />
          <div>
            <button className="admin_btn">유저 검색</button>
          </div>
        </div>
        <div className="before:content-['결과'] admin_before mt-4">
          <div className="mt-8">
            {test.map((e, i) => (
              <Link href={`/admin-board/user/${i}`} key={i}>
                <a>
                  <div
                    key={i}
                    className="admin_border box-border rounded p-4 mb-2"
                  >
                    <div>
                      <span className="text-xs text-gray-500 mr-2">local</span>
                      <span className="text-sm">{`유저ID(${12})`}</span>
                    </div>
                    <div>
                      <span>yongsoocho@naver.com</span>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="box-border w-full h-screen overflow-y-scroll pb-32">
        <div className="flex flex-col items-center mb-4">
          <span className="mb-2">total-user-1000</span>
          <div className="flex items-center">
            <LeftchevronIcon />
            <input
              value={currentPage}
              className="text-black bg-neutral-100 w-10 ml-4 px-1 text-sm rounded"
              onChange={(e) => setCurrentPage(e.target.value)}
            />
            <span className="text-sm ml-2 mr-4">of {234}</span>
            <RightchevronIcon />
          </div>
        </div>
        <div className="grid user_grid w-full">
          {test2.map((e, i) => (
            <Link href={`/admin-board/user/${i}`} key={i}>
              <a>
                <div className="w-80 h-10 flex items-center admin_border box-border px-2 py-1 rounded">
                  <div>
                    <span className="text-xs text-gray-500 mr-4">local</span>
                  </div>
                  <div>
                    <span className="text-sm mr-4">{`유저ID(${12})`}</span>
                  </div>
                  <div>
                    <span className="text-sm">yongsoocho@naver.com</span>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
