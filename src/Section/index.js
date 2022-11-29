import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <div className="section__header">
            <h2 className="section__head">{title}</h2>
            {extraHeaderContent}
        </div>
        {body}
    </section>
);

export default Section;