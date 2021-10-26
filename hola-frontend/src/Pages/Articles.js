import React from 'react';
import ArticleContent from './Article-Content.js';
 
const Articles = ({match}) => {
    const name = match.params.name;
    return(
        <>
        <h1>{Articles.title}</h1>

            {Articles.content.map(({paragraph},{key}) => (
            <p key = {key}>{paragraph}</p>
        
        ))};
</>
    )
}

export default Articles;