import { ReactElement, useState } from "react";

export function useSelectForm (steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

    const next = () => {
        setCurrentStepIndex(i => {
            if (i >= steps.length - 1) {
                return i;
            }

            return i + 1;
        });

    }

    const previous = () => {
        setCurrentStepIndex(i => {
            if (i <= 0) {
                return i;
            }

            return i - 1;
        })
    }

    const goTo = (index: number) => {
        setCurrentStepIndex(index);
    }

    return (
        {
            currentStepIndex,
            step: steps[currentStepIndex],
            steps,
            isFirstStep: currentStepIndex == 0,
            isLastStep: currentStepIndex == steps.length - 1,
            next,
            previous,
            goTo,
        }
    )
}