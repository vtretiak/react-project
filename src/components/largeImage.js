import React from "react";

function LargeImage ({ imgeUrl: { largeImageURL } }) {
   return (
       <img src={largeImageURL} />
    );
};

export default LargeImage;