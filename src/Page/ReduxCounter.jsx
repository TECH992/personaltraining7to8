import { increment } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux"
import Paragraph from '../Component/Paragraph/Paragraph';
import Button from '../Component/Button/Button';
const ReduxCounter = () => {

           const counter = useSelector((state) => state)
           const dispatch = useDispatch()

           const incrementData = () => {
                      dispatch(increment())
           }

           const decrementData = () => {

           }

           return (
                      <div>
                                 <div className="border-[2px] border-[#18181B] h-[600px] w-[600px] bg-gradient-to-r  from-[#FFDB3D] to-[#FFF9B8]">
                                            <Paragraph
                                                       ParagraphClassName="text-[44px] text-[#000] text-center font-bold underline"
                                                       paragraphTexts="Counter-app"
                                            />
                                            <Paragraph
                                                       ParagraphClassName="text-[44px] text-[#000] text-center font-bold underline"
                                                       paragraphTexts={counter}
                                            />
                                            <Button
                                                       buttonClassName="h-[50px] w-[500px] bg-gradient-to-r mt-12 text-[24px] rounded-[24px] text-[#FFF] from-[#875C00] to-[#FFA19C]"
                                                       buttonText="Increment"
                                                       buttonClick={incrementData}
                                            />
                                            <Button
                                                       buttonClassName="h-[50px] w-[500px] bg-gradient-to-r mt-12 text-[24px] rounded-[24px] text-[#FFF] from-[#875C00] to-[#FFA19C]"
                                                       buttonText="decrement"
                                                       buttonClick={decrementData}
                                            />
                                 </div>
                      </div>
           );

};
export default ReduxCounter;