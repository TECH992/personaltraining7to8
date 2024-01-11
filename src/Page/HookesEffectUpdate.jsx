import React from 'react';
import Paragraph from '../Component/Paragraph/Paragraph';
import Button from '../Component/Button/Button';
const HookesEffectUpdate = () => {
  const [inc, setInc] = React.useState(0);
  const [incs, setIncs] = React.useState(0);
  const [multi, setMulti] = React.useState();
;
  React.useEffect(() => {
    setMulti(inc * 2);
  }, [inc])

  const increment = () => {
    setInc(inc + 1);
  };
  const decrement = () => {
    setInc(inc - 1);
           };
           
           const data = () => {
                      setIncs(incs+1)      
           }
  return (
    <div>
      <div>
        <div className="border-[2px] border-[#18181B] h-[600px] w-[600px] bg-gradient-to-r  from-[#FFDB3D] to-[#FFF9B8]">
          <Paragraph
            ParagraphClassName="text-[44px] text-[#000] text-center font-bold underline"
            paragraphTexts="Counter-app"
          />
          <Paragraph
            ParagraphClassName="text-[44px] text-[#000] text-center font-bold underline"
            paragraphTexts={`StateIncTest:${incs}`}
          />
          <Paragraph
            ParagraphClassName="text-[44px] text-[#000] text-center font-bold underline"
            paragraphTexts={`StateInc:${inc}`}
          />
          <Paragraph
            ParagraphClassName="text-[44px] text-[#000] text-center font-bold underline"
            paragraphTexts={`MultiplyfromUseeffect:${multi}`}
          />
          <Button
            buttonClassName="h-[50px] w-[500px] bg-gradient-to-r mt-12 text-[24px] rounded-[24px] text-[#FFF] from-[#875C00] to-[#FFA19C]"
            buttonText="Increment"
            buttonClick={increment}
          />
          <Button
            buttonClassName="h-[50px] w-[500px] bg-gradient-to-r mt-12 text-[24px] rounded-[24px] text-[#FFF] from-[#875C00] to-[#FFA19C]"
            buttonText="decrement"
            buttonClick={decrement}
                                              />
                                              <Button
            buttonClassName="h-[50px] w-[500px] bg-gradient-to-r mt-12 text-[24px] rounded-[24px] text-[#FFF] from-[#875C00] to-[#FFA19C]"
            buttonText="data"
            buttonClick={data}
          />
        </div>
      </div>
    </div>
  );
};

export default HookesEffectUpdate;
