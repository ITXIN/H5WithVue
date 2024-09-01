import React, { lazy, Suspense } from "react";
// import logo from "./logo.svg";
import "./App.css";
import {
  createMemoryRouter,
  // createBrowserRouter,
  Link,
  // MemoryRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
// import { Details1 } from "./components/Details1/index";
// import { Details2 } from "./components/Details2/index";

// import { Home } from "./components/Home/index";

//使用懒加载
const HomeLazy = lazy(() => import("./components/Home/index"));
const Details1Lazy = lazy(() => import("./components/Details2/index"));
const Details2Lazy = lazy(() => import("./components/Details2/index"));

function Suspensed(LazyComponent: any) {
  return (props: any) => {
    return (
      <Suspense fallback={<div></div>}>
        <LazyComponent {...props}></LazyComponent>
      </Suspense>
    );
  };
}
export const HomeScreen = Suspensed(HomeLazy);
export const Details1Screen = Suspensed(Details1Lazy);
export const Details2Screen = Suspensed(Details2Lazy);

const routers = [
  { path: "/", element: <div>Home!</div> },
  {
    path: "/home",
    element: <HomeScreen></HomeScreen>,
    children: [
      { path: "detail1", element: <Details1Screen /> },
      { path: "detail2", element: <Details2Screen /> },
    ],
  },
  { path: "/about", element: <div>About!</div> },
  { path: "*", element: <div>Home!</div> },
];

const router = createMemoryRouter(routers, {
  initialEntries: ["/", "/home/detail2"],
  initialIndex: 1,
});
// 浏览器路由
// const router = createBrowserRouter([
//   { path: "/", element: <div>Home!</div> },
//   {
//     path: "/home",
//     element: (
//       <div>
//         Home!
//         <Link to="detail1" style={{ marginRight: 16 }}>
//           Detail 1
//         </Link>
//         <Link to="detail2">Detail 2</Link>
//         {/* 可以让home和home下的children页面都可以工具路径单独显示
//         如：/home 显示home页面
//           /home/detail 则显示home及下面的detail页面 */}
//         <Outlet />
//       </div>
//     ),
//     children: [
//       { path: "detail1", element: <div>Home Detail1</div> },
//       { path: "detail2", element: <div>Home Detail2</div> },
//     ],
//   },
//   { path: "/about", element: <div>About!</div> },
//   { path: "*", element: <div>Home!</div> },
// ]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
