import * as React from "react"

const Footer = () => {
    return (
        <footer
            className={
                "w-full font-thin text-gray-50 py-10 min-h-[100px] bg-gray-800 flex justify-center"
            }
        >
            <div className={"layout w-full max-auto block"}>
                <p>
                    상호: 월배요양병원 | 대표: 이은덕 | 주소: 대구광역시 달서구
                    월배로 119 KS빌딩 3,5,6,7,8층 월배요양병원
                </p>
                <p className={"mb-4"}>
                    업태/종목: 보건업/병원 | 사업자등록번호: 514-91-67056 | TEL:
                    053-632-0808 | FAX: 053-634-0011
                </p>
                <p>&copy;Copyright 2022. 월배요양병원 All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
