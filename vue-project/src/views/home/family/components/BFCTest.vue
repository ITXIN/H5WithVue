<template>
    <div>
        <h1>防止margin重叠</h1>
        <!-- margin重叠 -->
        <!-- <p>margin重叠1</p>
         <p>margin重叠2</p> -->
        <!-- 解决：包裹一层 -->
        <p>margin重叠1</p>
        <div class="warp">
            <p>margin重叠2</p>
        </div>
        <h1>清除浮动</h1>
        <div class="par">
            <div class="child"></div>
            <div class="child"></div>
        </div>
        <h1>分栏</h1>
        <div class="content">
            <div class="aside"></div>
            <div class="main"></div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.warp {
    overflow: hidden;
}
p {
    color: #f55;
    background: #fcc;
    width: 200px;
    line-height: 100px;
    text-align: center;
    margin: 10px;
}
.par {
    width: 300px;
    border: 5px solid #fcc;
    overflow: hidden;
}
.child {
    float: left;
    width: 100px;
    height: 100px;
    border: 5px solid #f66;
}
.content {
    width: 300px;
    position: relative;
}
.aside {
    width: 100px;
    height: 100px;
    background: #fcc;
    float: left;
}
.main {
    /* //BFC */
    overflow: hidden;
    height: 200px;
    background: #f66;
}
</style>
