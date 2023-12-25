const Paragraph = (props) => {
           return (
                      <div>
                                 <p className={props.ParagraphClassName}>{props.paragraphTexts}</p>
                      </div>
           );
};

export default Paragraph;
