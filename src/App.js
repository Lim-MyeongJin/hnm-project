import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './route/PrivateRoute';

/*
1.전체상품페이지, 로그인, 상품상세페이지 -> react router 설치(npm install react-router-dom@6)
  * 상세페이지와 같은 페이지의 경우 id를 알아야 하기 때문에 restful route 경로로 정의
1-1. 네비게이션바 만들기
2.전체 상품페이지에서는 전체 상품을 볼 수 있다
3.로그인 버튼을 누르면 로그인 페이지가 나온다
3.상품디테일을 눌렀으나, 로그인이 안되있을경우에는 로그인페이지가 먼저 나온다
4.로그인이 되었을 경우에는 상품 디테일 페이지를 볼 수 있다.
5.로그아웃 버튼을 클릭하면 로그아웃이 된다
5.로그아웃이 되면 상품 디테일페이지를 볼 수 없다. -> 다시 로그인 페이지가 보인다.
6.로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
7.상품을 검색할 수 있다.
*/

// 프로젝트를 진행할 때 작은 단위로 개발하고 테스트하고를 반복!
function App() {

  const [authenticate, setAuthenticate] = useState(false) //true면 로그인 / false면 로그아웃

  useEffect(() => {
    console.log('authenticate:', authenticate)
  }, [authenticate])

  return (
    <div>
      {/* 공통적으로 사용된 컴포넌트는 App.js에 생성하기 */}
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />

        {/* 로그인이 안되었을 경우 보여지면 안되는 보호해줘야 할 페이지! */}
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
