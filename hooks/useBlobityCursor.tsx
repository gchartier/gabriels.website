import useBlobity from "blobity/lib/useBlobity";

export function useBlobityCursor() {
    return useBlobity({
        invert: true,
        mode: "bouncy",
        focusableElementsOffsetX: 5,
        focusableElementsOffsetY: 5,
    });
}
