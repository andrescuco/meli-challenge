import { App } from "../App";
import { mockProductDetail, mockSearch } from "../__mocks__/apiMocks";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";

/**
 * Integration test of the entire app flow.
 */
describe("<ProductsSearch />", () => {
  const server = setupServer(
    rest.get("/api/items", (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockSearch));
    }),
    rest.get("/api/items/MLA812447160", (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockProductDetail));
    })
  );

  beforeAll(() => {
    server.listen();
  });
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it("should render results on product search", async () => {
    const { findByRole, findByText, queryByText } = render(<App />);
    const searchInput = await findByRole("textbox");
    const submitButton = await findByRole("button", {
      name: /magnifying glass icon/i,
    });

    fireEvent.change(searchInput, { target: { value: "airpods" } });
    expect(searchInput).toHaveValue("airpods");

    fireEvent.click(submitButton);
    expect(await findByText(/\$ 10,864\.1/i)).toBeInTheDocument();
    expect(
      await findByText(
        "Film Tricapa iPod Nano Touch 6 Generacion Combo 5 Unidades"
      )
    ).toBeInTheDocument();

    fireEvent.click(
      await findByText(
        "Film Tricapa iPod Nano Touch 6 Generacion Combo 5 Unidades"
      )
    );

    if (queryByText(/loading/i)) {
      await waitForElementToBeRemoved(queryByText(/loading/i));
    }

    expect(await findByText(/comprar/i)).toBeInTheDocument();
  });
});
