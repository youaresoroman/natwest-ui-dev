import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { FinalScreen } from "./FinalScreen";

describe("FinalScreen", () => {
    it("should render the component", () => {
        const goPrev = jest.fn();
        render(<FinalScreen goPrev={goPrev} />);
        expect(screen.queryByText("You have reached the end of the questionnaire")).toBeInTheDocument();
    });
    it('should call goPrev function when "Back" button is clicked', async () => {
        const goPrev = jest.fn();
        render(<FinalScreen goPrev={goPrev} />);
        const button = screen.getByText("Start Again")
        await act(async () => {
            fireEvent.click(button);
        });

        expect(goPrev).toBeCalledTimes(1);
    });
});
