<template>
    <div>
        <h1>水平和垂直方向居中</h1>
        <!-- 使用flex -->
        <span>方式1:使用flex</span>
        <div class="parent">
            <p>p</p>
        </div>
        <span>方式2:使用绝对定位和负边距</span>
        <div class="parent-relative">
            <p class="child1">p2</p>
        </div>
        <span>方式3:grid</span>
        <div class="parent-grid">
            <p>p3</p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}
.parent-relative {
    position: relative;
}
.child1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: blue;
}
.parent-grid {
    display: grid;
    justify-items: center;
    align-items: center;
}
</style>
