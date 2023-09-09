import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOuutput";

function App() {
  // useCallback은 컴포넌트 실행 전반에 걸쳐 함수를 저장할 수 있게 하는 훅으로
  // 매번 실행때마다 이 함수를 재생성할 필요가 없다는 것을 알릴 수 있다.
  // 동일한 함수 객체가 메모리의 동일한 위치에 저장되므로 올바른 비교작업을 할 수 있다.
  // 리액트 내부 공간에 저장했다가 객체가 생성이 될때마다 이를 재사용할 수 있게 된다.
  // 저장하려는 함수를 래핑하면된다! usecallback도 useEffect처럼 의존성 배열이 존재한다.
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING");
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  //이 의존성 배열안에는 상태를 업데이트하는 함수를 적어주면된다.즉,상태나 props ,context같은 것을 지정할 수 있다.
  //이 콜백함수는 절대 바뀌지 않을 것이라고 리액트에게 알려주는 것이다.
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
