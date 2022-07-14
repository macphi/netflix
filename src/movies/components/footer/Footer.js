import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './footer.scss'

const FooterComponent = () => {
    return (
        <div className="footer">
            <hr />
            <div className="footer-text">
                <div className="copyright s-col-four">
                    <div className="icons s-col-four">
                        <FacebookIcon />
                        <YouTubeIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                    </div>

                    <span>
                        Copyright 2022 © NETFLIX.NET
                        Xem phim mới miễn phí nhanh chất lượng cao Việt Sub, Thuyết minh. Xem phim nhanh online chất lượng cao</span>
                    <img src="http://www.maycatgiay.vn/Pictures/LOGO%20XANH%20-da%20thong%20bao%20bo%20cong%20thuong.jpg" alt="" />
                </div>
                <div className="intro s-col-four">
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
                <div className="intro s-col-four">
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
                <div className="intro s-col-four">
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