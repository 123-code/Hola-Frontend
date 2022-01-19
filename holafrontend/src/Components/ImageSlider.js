import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";


const Images = [

{url:"https://scontent.fuio2-1.fna.fbcdn.net/v/t39.30808-6/253567942_5222860584410173_8461854963660120152_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=VhJbxC1MG6AAX-yqYOW&_nc_ht=scontent.fuio2-1.fna&oh=00_AT9BrClP26G1lU5QOOIJhDJvVdFWRigWOVWAEEYaOz010w&oe=61ECF0C9"},
{url:"https://scontent.fuio2-1.fna.fbcdn.net/v/t39.30808-6/243326987_5094527567243476_9031045624072989166_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=uQD9YQ-pNhEAX_9c3l2&_nc_ht=scontent.fuio2-1.fna&oh=00_AT8HqgBEwamLxTPpB0lw20AG01DjjyfHJAlxzimIPDAcsw&oe=61EB6803"},
]

export function ImageSlider(){
    return(
        <>
        <SimpleImageSlider
         width={900}
         height={900}
         images={Images}
         showBullets={true}
         showNavs={true}
       />
        </>

    )
}