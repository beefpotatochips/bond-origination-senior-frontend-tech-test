
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cypher from "./components/Cypher";

describe("Cypher Component", () => {
  it("renders the input for encryption text", () => {
    render(<Cypher />);
    const cypherText = screen.getByRole("input[type='text']");

    expect(cypherText).toBeInTheDocument();
  });

  it("renders the offset slider", () => {
    render(<Cypher />);
    const offsetSlider = screen.getByRole("input[type='range']");

    expect(offsetSlider).toBeInTheDocument();
  });

  it("renders the positive offset radio button", () => {
    render(<Cypher />);
    const positiveOffset = screen.getByRole("input[type='radio'][value='positive']");

    expect(positiveOffset).toBeInTheDocument();
  });

  it("renders the negative offset radio button", () => {
    render(<Cypher />);
    const negativeOffset = screen.getByRole("input[type='radio'][value='negative']");

    expect(negativeOffset).toBeInTheDocument();
  });

  it("renders the text preview", () => {
    render(<Cypher />);
    const textPreview = screen.getByRole("p.textPreview");

    expect(textPreview).toBeInTheDocument();
  });

});
