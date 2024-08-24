export async function fetchComponent(componentInfo) {
    const { url, name } = componentInfo;
    try {
        const text = await fetch(url).then();
    } catch (error) {}
}
