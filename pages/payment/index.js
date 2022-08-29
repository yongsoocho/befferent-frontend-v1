import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";

export default function Payment() {
  const [tossPayments, setTossPayments] = useState();
  const [orderName, setOrderName] = useState("");
  const [price, setPrice] = useState("");

  const onClickPayment = useCallback(
    (price, orderName) => {
      tossPayments.requestPayment("카드", {
        amount: Number(price),
        orderId: v4(),
        orderName,
        customerName: "비프런트",
        successUrl: "http://localhost:3000/payment/success",
        failUrl: "http://localhost:3000/payment/fail",
      });
    },
    [tossPayments]
  );

  useEffect(() => {
    const clientKey = "test_ck_Kma60RZblrqKXayzLpx3wzYWBn14";
    setTossPayments(TossPayments(clientKey));
  }, []);

  return (
    <div>
      <input placeholder="가격" onChange={(e) => setPrice(e.target.value)} />
      <input
        placeholder="이름"
        onChange={(e) => setOrderName(e.target.value)}
      />
      <div
        className="w-24 h-12 bg-slate-50 text-black"
        onClick={() => onClickPayment(price, orderName)}
      >
        toss test button
      </div>
    </div>
  );
}
