import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <div className="section">
        <div className="section__div section__div--homework">
            <h2 className="section__head">{title}</h2>
            {extraHeaderContent}
        </div>
        {body}
    </div>
);

export default Section;