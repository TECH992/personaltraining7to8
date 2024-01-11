import { useEffect, useState } from 'react';
import axios from 'axios';
const EffectHooks = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get('http://localhost:8001/api/toursData/5')
      .then((res) => setData(res));
  }, []);
  console.log(data && data.data && data.data.data);
  return (
    <div>
      {data &&
        data.data &&
        data.data.data &&
        data.data.data.paramData &&
        data.data.data.paramData.summary}
    </div>
  );
};

export default EffectHooks;
