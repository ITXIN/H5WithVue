<template>
    <div v-if="hasError">
        <div>
            <p>{{ error }}</p>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hasError: false,
            error: null,
        };
    },
    errorCapture(error, vm, info) {
        this.hasError = true;
        this.error = error.toString();
        console.log(error, vm, info);
    },
    render() {
        return this.$slots.default;
    },
};
</script>
