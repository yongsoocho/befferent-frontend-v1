import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function PaymentSuccess() {
  const router = useRouter();

  useEffect(() => {
    // axios
    //   .post("http://localhost:8000/payment/lecture", {
    //     paymentKey: router.query.paymentKey,
    //     orderId: router.query.orderId,
    //     amount: router.query.amount,
    //   })
    //   .then((res) => console.log(res.data))
    //   .catch((e) => console.log(e));
  }, [router]);

  return (
    <div>
      <div>{JSON.stringify(router.query)}</div>
    </div>
  );
}
