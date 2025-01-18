import Introduce from "../../modules/Introduce";
import Example from "../../modules/SecondModule";
import { WhatIsReact } from "../../modules/Whats";

const Chap00 = () => {
  return (
    <div>
      <WhatIsReact></WhatIsReact>
      <WhatIsReact></WhatIsReact>
      <Introduce></Introduce>
      <Example></Example>
    </div>
  );
};

export default Chap00;
// 너무 복잡하게 나누면 손대기 어려우니 적당히 나누기
