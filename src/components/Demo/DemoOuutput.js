import React from "react";
const DemoOutput = (props) => {
  console.log("DemoOutput Running");
  return <>{props.show ? <p>This is new!</p> : ""}</>;
};
export default React.memo(DemoOutput);
// React.memo는 인자로 들어간 이 컴포넌트에 어떤 Props가 입력되는지 확인하고 입력되는 모든 props의 신규 값을 확인한 뒤
// 이를 기존의 props의 값과 비교하도록 리액트에게 전달한다.
// 그리고 props의 값이 바뀐 경우에만 컴포넌트를 재평가 하게 된다.
// 부모 컴포넌트에서 값이 바뀌었지만 자식 컴포넌트에서 값이 변경되지 않았다면 자식의 컴포넌트 재실행은 건너뛰게 된다.
