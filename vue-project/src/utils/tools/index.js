export function calculateDOMScore() {
    let score = 0;
    const stack = [{ node: document.body, depth: 0 }];

    while (stack.length > 0) {
        const { node, depth } = stack?.pop();
        if (!node) {
            score += 5;
            continue;
        }
        const weight = this.getNodeWeight(node);
        const { width, height, areaPercent } = this.getNodeMetrics(node);

        // 根据公式计算节点的分数
        const nodeScore = (width || 1) * (height || 1) * (weight || 1) * areaPercent;
        score += nodeScore;

        // 将子节点添加到栈中
        const children = node.children;
        for (let i = 0; i < children.length; i++) {
            stack.push({ node: children[i], depth: depth + 3 });
        }
    }

    return score;
}
