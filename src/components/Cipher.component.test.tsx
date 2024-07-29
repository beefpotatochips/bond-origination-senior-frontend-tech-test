
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cipher from "./Cipher";

// Not the cleanest solution, but given my lack of experience
// in the area this seems to be the least invasive solution given restrictions.
// Would be interested to know if there's a cleaner known solution to the issue of css imports in tests!
jest.mock('./Cipher.css', () => ({}));


describe("Cipher Component", () => {

  it("renders the input for encryption text", () => {
    render(<Cipher />);
    const cipherText = screen.getByLabelText("Text:");

    expect(cipherText).toBeInTheDocument();
  });

  it("renders the offset slider", () => {
    render(<Cipher />);
    const offsetSlider = screen.getByLabelText("Offsetting result by: 1");

    expect(offsetSlider).toBeInTheDocument();
  });

  it("renders the positive offset radio button", () => {
    render(<Cipher />);
    const positiveOffset = screen.getByLabelText("Positive");

    expect(positiveOffset).toBeInTheDocument();
  });

  it("renders the negative offset radio button", () => {
    render(<Cipher />);
    const negativeOffset = screen.getByLabelText("Negative");

    expect(negativeOffset).toBeInTheDocument();
  });

  it("renders the text preview", () => {
    render(<Cipher />);
    const textPreview = screen.getByLabelText("Preview:");

    expect(textPreview).toBeInTheDocument();
  });

});
