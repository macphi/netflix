import React from "react";
import './footer.scss'

const FooterComponent = () => {
    return (
        <div className="footer">
            <hr />
            <div className="footer-text">
                <div className="copyright">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png" alt="" />
                    Copyright 2022 © NETFLIX.NET
                    <span> Xem phim mới miễn phí nhanh chất lượng cao. Xem Phim online Việt Sub, Thuyết minh, lồng tiếng chất lượng HD. Xem phim nhanh online chất lượng cao</span>
                    <img src="http://www.maycatgiay.vn/Pictures/LOGO%20XANH%20-da%20thong%20bao%20bo%20cong%20thuong.jpg" alt="" />
                </div>
                <div className="intro">
                    <a href="/home">
                        <span>Audio and Subtitles</span>
                    </a>
                    <a href="/home">
                        <span>Medial Center</span>
                    </a>
                    <a href="/home">
                        <span>Privacy</span>
                    </a>
                    <a href="/home">
                        <span>Cooki Preferences</span>
                    </a>
                </div>
                <div className="contact">
                    <span>Gmail: hongnhanhoathuy@gmail.com</span>
                    <span>Tel: 0999888999</span>
                    <span>Add: 102 Trần Duy Hưng, TP Hà Nội</span>
                </div>
            </div>
            <div className="with-you">
                <span>
                    Made with by © lethobenthos
                </span>
            </div>

        </div>

    )
}
export default React.memo(FooterComponent)