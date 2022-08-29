import styles from "../styles/Drawer.module.css";
import Link from "next/link";
import UserIcon from "../icons/user.icon";
import { useRouter } from "next/router";
import LectureIcon from "../icons/lecture.icon";
import PaymentIcon from "../icons/payment.icon";
import CouponIcon from "../icons/coupon.icon";

export default function DrawerComponent() {
  const { asPath } = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ul>
          <li>
            <p className="text-xs text-black text-center my-4">
              yongsoocho@naver.com
            </p>
          </li>
          <li className={styles.block}>
            <Link href={"/admin-board/user"}>
              <a
                className={styles.link}
                style={{
                  backgroundColor:
                    asPath === "/admin-board/user" ? "black" : "white",
                  color: asPath === "/admin-board/user" ? "white" : "black",
                }}
              >
                <UserIcon />
                <span>유저 관리</span>
              </a>
            </Link>
          </li>
          <li className={styles.block}>
            <Link href={"/admin-board/lecture"}>
              <a
                className={styles.link}
                style={{
                  backgroundColor: asPath.startsWith("/admin-board/lecture")
                    ? "black"
                    : "white",
                  color: asPath.startsWith("/admin-board/lecture")
                    ? "white"
                    : "black",
                }}
              >
                <LectureIcon />
                <span>강의 관리</span>
              </a>
            </Link>
          </li>
          <li className={styles.block}>
            <Link href={"/admin-board/payment"}>
              <a
                className={styles.link}
                style={{
                  backgroundColor: asPath.startsWith("/admin-board/payment")
                    ? "black"
                    : "white",
                  color: asPath.startsWith("/admin-board/payment")
                    ? "white"
                    : "black",
                }}
              >
                <PaymentIcon />
                <span>결제 관리</span>
              </a>
            </Link>
          </li>
          <li className={styles.block}>
            <Link href={"/admin-board/coupon"}>
              <a
                className={styles.link}
                style={{
                  backgroundColor: asPath.startsWith("/admin-board/coupon")
                    ? "black"
                    : "white",
                  color: asPath.startsWith("/admin-board/coupon")
                    ? "white"
                    : "black",
                }}
              >
                <CouponIcon />
                <span>쿠폰 관리</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
