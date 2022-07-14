import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './ResponsiveFooter.scss'
import './footer.scss'

const FooterComponent = () => {
    return (
        <div className="footer">
            <hr />
            <div className="footer-text">
                <div className="intro col-four">
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
                <div className="intro col-four s-col-full">
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
                        <span>Cooki  Preferences</span>
                    </a>
                </div>
                <div className="intro col-four">
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
                <div className="intro col-four">
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
                        <span>Cooki  Preferences</span>
                    </a>
                </div>
            </div>
            <div className="list-icon col-full">
                <a href="https://www.netflix.com/browse"><FacebookIcon className="icons" /></a>
                <a href="#"><YouTubeIcon className="icons" /></a>
                <a href="#"><InstagramIcon className="icons" /></a>
                <a href="#"><TwitterIcon className="icons" /></a>
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