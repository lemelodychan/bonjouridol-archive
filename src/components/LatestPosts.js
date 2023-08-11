import { PrismicImage, PrismicRichText, PrismicText,useAllPrismicDocumentsByType } from '@prismicio/react'

import '../App.scss';
import './LatestPosts.scss';

import { IoArrowForwardOutline } from "react-icons/io5";

import HeroArticle from './HeroArticle';

function LatestPosts() {
    const results = useAllPrismicDocumentsByType("articles");
    const latestPosts = results[0]
    console.log("Post 2:", latestPosts)

    const Post3 = results[2]
    const Post4 = results[3]
    
    return (
        <div className="LatestPosts">
            <HeroArticle />
            <div className="OtherPosts">
                <h2><span>Other Posts</span></h2>

                <a href="#" className="OtherPost" id="post2">
                    <div className="FeaturedImage">
                        {latestPosts && (
                            <PrismicImage field={latestPosts[1].data.featured_image} />
                        )}
                    </div>
                    <div className="Content">
                        <div className="Tags">
                            {latestPosts && (
                                <span className="Tag">{latestPosts[1].tags[0]}</span>
                            )}
                            {latestPosts && (
                                <span className="Tag">{latestPosts[1].tags[1]}</span>
                            )}
                        </div>
                        {latestPosts && (
                            <h3>
                                <span><PrismicText field={latestPosts[1].data.title} /></span>
                                <span className="icon"><IoArrowForwardOutline /></span>
                            </h3>
                        )}
                    </div>
                </a>

            </div>
        </div>
    );
}
  
export default LatestPosts;