import React from "react";
import Hm from "../component/img/H&M.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="f-box">
        <p className="f-site">
          이 사이트의 콘텐츠는 저작권 보호를 받고 있는 H & M Hennes & Mauritz
          AB의 자산입니다.
        </p>
        <p className="f-info">
          법인명 에이치앤엠헤네스 앤 모리츠 주식회사 | 통신판매업신고번호 :{" "}
          <span>2022-서울강남-01184</span> / 사업자등록| 번호 :{" "}
          <span>220-87-83339</span> | 대표자 : 아담 칼슨, 선 보라미, 아네타
          포쿠친스카 | 서울특별시 강남구 영동대로 421, 9층 삼탄빌딩 (대치동)
          06182 | 대표번호 : 080-822-0220 | <span class="bold"></span>
          info.kr@hm.com 사업자 정보 확인 지급보증안내
        </p>
        <h1 className="f-img">
            <img src={Hm}/>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
