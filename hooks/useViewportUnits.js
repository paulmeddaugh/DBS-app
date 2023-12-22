import { useCallback, useEffect } from "react";
import { useWindowDimensions } from "react-native";

export default function useViewportUnits () {
    const { height, width, scale: pixelScale , fontScale } = useWindowDimensions();

    const vw = useCallback((vwUnit) => width / 100 * vwUnit, [width]);
    const vh = useCallback((vhUnit) => height / 100 * vhUnit, [height]);

    return { vw, vh };
}