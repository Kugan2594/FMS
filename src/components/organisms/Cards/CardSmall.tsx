import Card from "antd/lib/card/Card";
import React from "react";

function CardSmall(props: any) {
    return (
        <Card className="small-card">
            <div className="image-container">
                <img src={props.imagesource} />
            </div>

            <div className="content-container"></div>
        </Card>
    );
}

export default CardSmall;
