import { PositionOfElementsInTheSection } from "../../../types/enums";

export const returnPositionOfElements = (position: PositionOfElementsInTheSection): string => {
    if (position === PositionOfElementsInTheSection.HORIZONTAL)
        return "horizontal";

    if (position === PositionOfElementsInTheSection.HORIZONTAL_INVERSE)
        return "horizontal-inverse";

    return "vertical";
};