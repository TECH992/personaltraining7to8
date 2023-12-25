import Heading from '../Component/Heading/Heading';
import Paragraph from '../Component/Paragraph/Paragraph';
import Button from '../Component/Button/Button';
const HomePage = () => {
        
        const click1 = () => {
                alert('hi');
        };

        const click2 = () => {
                alert('Hellow');
        };
        return (
                <div>
                        <Paragraph
                                paragraphTexts="Hi"
                                ParagraphClassName="text-[16px] text-[#AE1438]"
                        />
                        <Paragraph
                                paragraphTexts="Hellow"
                                ParagraphClassName="text-[16px] text-[#019031]"
                        />
                        <Heading headingText="hii..." headingClassName="text-[#EA7773]" />
                        <Heading headingText="Hellow..." headingClassName="text-[#3C40C6]" />
                        <Button
                                buttonText="cancel"
                                buttonClassName="w-[100px] bg-[#002266] text-[#FFF] rounded-[10px] py-[4px] text-[12px]"
                                buttonClick={click1}
                        />
                        <Button
                                buttonText="Submit"
                                buttonClassName="w-[100px] bg-[#019031] text-[#FFF] rounded-[10px] py-[4px] text-[12px]"
                                buttonClick={click2}
                        />
                </div>
        );
};

export default HomePage;
