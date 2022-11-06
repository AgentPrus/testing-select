import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import CommonSelect from "./CommonSelect";

const mockedOptions = [
  { name: "England", id: 1 },
  { name: "USA", id: 2 },
  { name: "Ukraine", id: 3 },
  { name: "Italy", id: 4 },
  { name: "Spain", id: 5 },
];

describe("Common Select component", () => {
  it("should allow user select option", async () => {
    const user = userEvent.setup();

    render(<CommonSelect options={mockedOptions} />);

    await user.selectOptions(screen.getByRole("combobox"), "USA");

    expect(
      (screen.getByRole("option", { name: "USA" }) as HTMLOptionElement)
        .selected
    ).toBe(true);
  });
});
