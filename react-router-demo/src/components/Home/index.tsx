import { useMemo, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export default function Home(params: any) {
  const styles = useMemo<React.CSSProperties>(
    () => ({
      fontWeight: "bold",
    }),
    []
  );
  const arr = useRef([
    1,
    2,
    3,
    {
      key: "key",
    },
  ]);

  console.log("🚀 ~ Home ~ styles:", styles);

  const click = () => {
    console.log("click", arr.current[3]);
  };
  return (
    <div>
      Home!
      <Link to="detail1" style={{ marginRight: 16, ...styles }}>
        Detail 1
      </Link>
      <Link to="detail2">Detail 2</Link>
      {/* 可以让home和home下的children页面都可以工具路径单独显示
        如：/home 显示home页面
          /home/detail 则显示home及下面的detail页面 */}
      <Outlet />
      <ErrorBoundary>
        <div>错误边界：{params.see.kk}</div>
        <button onClick={click}>按钮点击</button>
      </ErrorBoundary>
    </div>
  );
}
