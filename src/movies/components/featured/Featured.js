import React from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './ResponsiveFeatured.scss'
import './featured.scss'
const FeaturedComponent = (type) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            {/* background featured */}
            <img src="https://img.idesign.vn/2021/03/idesign_firstlookemvatrinh_07-1.jpg" alt="" />
            <div className="info">
                {/* images inside background () */}
                {/* <img width='100%' src="https://i1-giaitri.vnecdn.net/2021/12/31/em-va-trinh-3-1352-1640919247.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=K5udo5xGtBPIKtuAMerV6Q" alt="" /> */}
                {/* <iframe src="//coub.com/embed/32iu8x?muted=false&autostart=false&originalSize=true&startWithHD=true" allowfullscreen frameborder="0" width="420" height="260" allow="autoplay"></iframe> */}
                {/* Iframe Em va Trinh */}
                {/* <iframe width="420" height="260" src="https://www.youtube.com/embed/IosqnBOkk2I" allow='autoplay' ></iframe> */}
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ab officiis similique at quaerat quas veritatis dolorum fugit mollitia magni doloribus in sint sed veniam minus, nihil minima dolores et?
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlinedIcon />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>

    )
}
export default React.memo(FeaturedComponent)
