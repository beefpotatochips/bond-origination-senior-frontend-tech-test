
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cipher from "./components/Cipher";

describe("Cipher Component", () => {
  it("renders the input for encryption text", () => {
    render(<Cipher />);
    const cipherText = screen.getByRole("input[type='text']");

    expect(cipherText).toBeInTheDocument();
  });

  it("renders the offset slider", () => {
    render(<Cipher />);
    const offsetSlider = screen.getByRole("input[type='range']");

    expect(offsetSlider).toBeInTheDocument();
  });

  it("renders the positive offset radio button", () => {
    render(<Cipher />);
    const positiveOffset = screen.getByRole("input[type='radio'][value='positive']");

    expect(positiveOffset).toBeInTheDocument();
  });

  it("renders the negative offset radio button", () => {
    render(<Cipher />);
    const negativeOffset = screen.getByRole("input[type='radio'][value='negative']");

    expect(negativeOffset).toBeInTheDocument();
  });

  it("renders the text preview", () => {
    render(<Cipher />);
    const textPreview = screen.getByRole("p.textPreview");

    expect(textPreview).toBeInTheDocument();
  });

});
