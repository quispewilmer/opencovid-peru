import React from 'react';

const TemplateSection = ({title, mainColor, content, mainClass}) => {
    return (
        <section className="national-situation">
            <h1 className="national-situation__title">{title}</h1>
            <hr className="title-rule"/>
            <div className="national-situation__articles">
                    
            </div>
        </section>
    )
}

export default TemplateSection;