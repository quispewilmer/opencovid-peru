import React from 'react';
import Helmet from 'react-helmet';

const MetaDataTemplate = (title, description, image, locale) => {
    return (
        <Helmet
            title={title}
            htmlAttributes={{ lang: {locale} }}
            meta={[
                {
                    name: `description`,
                    content: description,
                },
                {
                    property: "og:url",
                    content: "https://opencovid-peru.com/"
                },
                {
                    property: "og:type",
                    content: "website"
                },
                {
                    property: "og:title",
                    content: title
                },
                {
                    property: "og:description",
                    content: description
                },
                {
                    property: "og:image",
                    content: image
                },
                {
                    property: "twitter:card",
                    content: "summary_large_image"
                },
                {
                    property: "twitter:title",
                    content: title
                },
                {
                    property: "twitter:description",
                    content: description
                },
                {
                    property: "twitter:image",
                    content: image
                }]} />
    );
}

export default MetaDataTemplate;