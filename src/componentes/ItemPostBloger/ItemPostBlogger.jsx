import React, {useEffect, useProps} from 'react';
import './ItemPostBlogger.css';
import parse from 'html-react-parser';

export default function ItemPostBlogger({post}){
    
    const [bloggerHtml, setBloggerHtml] = useProps();

    useEffect(()=>{

    });

    return(
        <div className="content-Post">
            {parse(post.content)}
        </div>
    )
}