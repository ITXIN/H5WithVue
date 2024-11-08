<template>
    <div class="container" ref="scrollRef">
        <div v-for="(item, index) in items" :key="index" class="item">
            {{ item }}
        </div>
        <div v-if="loading" class="loading">
            <span> 数据加载中</span>
            <span> ...</span>
            <div :style="imgStyle" class="earth"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgStyle: {
                transform: 'rotate(0deg)',
            },
            rafIdAnimal: null,
            rafId: null,
            loading: false,
            items: Array.from({ length: 50 }, (_, i) => `Test ${i}`),
            scrollRef: null,
        };
    },
    methods: {
        animate(time) {
            const angle = (time % 10000) / 5;
            this.imgStyle.transform = `rotate(${angle}deg)`;
            this.rafIdAnimal = window.requestAnimationFrame(this.animate);
        },
        moreData() {
            return new Promise(resolve => {
                setTimeout(() => {
                    const newItems = Array.from({ length: 50 }, (_, i) => `Test ${this.items.length + i + 1}`);
                    this.items.push(...newItems);
                    resolve();
                }, 1000);
            });
        },
        checkSrollPosition() {
            if (this.loading || !this.$refs.scrollRef) {
                return;
            }
            const container = this.$refs.scrollRef;
            const scrollTop = container.scrollTop;
            const scrollHeight = container.scrollHeight;
            const clientHeight = container.clientHeight;

            if (scrollHeight - scrollTop - clientHeight <= 100) {
                this.startLoading();
            }
        },
        async startLoading() {
            this.loading = true;
            await this.moreData();
            this.loading = false;
        },
        handleScroll() {
            if (this.rafId !== null) {
                window.cancelAnimationFrame(this.rafId);
            }
            this.rafId = window.requestAnimationFrame(() => {
                this.checkSrollPosition();
            });
        },
    },
    mounted() {
        if (this.$refs.scrollRef) {
            this.$refs.scrollRef.addEventListener('scroll', this.handleScroll);
        }
        console.log('🚀 ~ mounted ~ scrollRef:', this.$refs.scrollRef);
        this.rafIdAnimal = window.requestAnimationFrame(this.animate);
    },
    beforeDestroy() {
        this.rafId && window.cancelAnimationFrame(this.rafId);
        this.rafIdAnimal && window.cancelAnimationFrame(this.rafIdAnimal);
        this.$refs.scrollRef?.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<style scoped>
body {
    box-sizing: border-box;
    background-color: #ccc;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container {
    /* position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    padding: 20px;
    max-width: 800px;
    overflow-y: auto;
    margin: 0 auto;
    height: 600px;
}
.item {
    border-bottom: 1px solid #ccc;
    padding: 10px;
}
.loading {
    padding: 10px;
    color: #999;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.earth {
    margin-left: 20px;
    width: 50px;
    height: 50px;
    background-size: cover;
    border-radius: 50%;
    background-image: url('../../../../assets/images/img.png');
}
</style>
