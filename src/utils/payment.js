import { createItemOrder } from "../apis/order/create-item-order";

const IAMPORT_IDENTITY_CODE = process.env.REACT_APP_IAMPORT_IDENTITY_CODE;
export const onPaymentButtonClick = (pg, orderId, price, title, items) => {
  return new Promise((resolve) => {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    console.log(IAMPORT_IDENTITY_CODE);
    IMP.init(IAMPORT_IDENTITY_CODE); // 가맹점 식별코드

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: pg, // PG사 : https://portone.gitbook.io/docs/sdk/javascript-sdk/payrq#undefined-1 참고
      // pay_method: "tosspay", // 결제수단
      merchant_uid: orderId, // 주문번호
      amount: price, // 결제금액
      name: title, // 주문명
      buyer_name: "홍길동", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
      m_redirect_url: "http://localhost:3000/",
    };

    IMP.request_pay(data, (response) => {
      const { success, error_msg } = response;
      if (success) {
        createItemOrder(1, items)
          .then(() => {
            alert("결제 성공");
            resolve(true);
          })
          .catch((error) => {
            alert("주문 생성 실패");
            resolve(false);
          });
      } else {
        alert(`결제 실패: ${error_msg}`);
        resolve(false);
      }
    });
  });
};
