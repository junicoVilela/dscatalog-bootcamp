import React from 'react';
import ContentLoader from 'react-content-loader';
import { generateList } from 'core/utils/list';


const ProductCardLoader = () => {
    const loaderItems = generateList(4);

    return (
        <>
            {loaderItems.map(() => (
                <ContentLoader
                    speed={2}
                    width={250}
                    height={335}
                    viewBox="0 0 250 335"
                    backgroundColor="#ecebeb"
                    foregroundColor="#d6d2d2"
                >
                    <rect x="0" y="-1" rx="10" ry="10" width="250" height="335"/>
                </ContentLoader>
            ))}
        </>
    )
}

export default ProductCardLoader
