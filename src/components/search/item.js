import React from "react";

function Item({ entity: { previewURL } }) {
    return (
        <li>
            <img src={previewURL} width="100" />
        </li>
    );
};

export default Item;