export default function bs_list(haystack: number[], needle: number): boolean {
    let leftIndex = 0;
    let rightIndex = haystack.length - 1;

    while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor(
            leftIndex + (rightIndex - leftIndex) / 2,
        );
        const middleValue = haystack[middleIndex];

        if (middleValue === needle) {
            return true;
        } else if (middleValue > needle) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return false;
}
