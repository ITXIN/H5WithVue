import { useMemo } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home(params: Object) {
  const styles = useMemo<React.CSSProperties>(
    () => ({
      fontWeight: "bold",
    }),
    []
  );

  console.log("🚀 ~ Home ~ styles:", styles);
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
    </div>
  );
}
