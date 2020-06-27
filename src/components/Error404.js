import React from 'react';
import ReactBodyMovin from 'react-bodymovin';
import Error404Animation from '../404.json';

const Error404 = (props) => {
    const bodyMovinOptions = {
        loop: true,
        autoplay: true,
        prerender: true,        
        animationData: Error404Animation
    }

    return(
        <div>
            <ReactBodyMovin options={bodyMovinOptions} />
        </div>
    );
}

export default Error404;
