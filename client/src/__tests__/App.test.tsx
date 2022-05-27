import { App } from "../App";
import userEvent from "@testing-library/user-event";

import { mockProductDetail, mockSearch } from "../__mocks__/apiMocks";
import { rest } from 'msw';
import { setupServer } from "msw/node";
import { screen, render, fireEvent } from "@testing-library/react";

describe("<ProductsSearch />", () => {
  const server = setupServer(
    rest.get(
      '/api/items?search=airpods',
      (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockSearch));
      }
    ),
    rest.put(
      '/api/items/MLA935826998',
      (_, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(mockProductDetail)
        );
      }
    )
  );

  beforeAll(() => {
    server.listen();
  });
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it("should render results on product search", async () => {
    const { getByRole, findByText } = render(<App />);
    const searchInput = getByRole('textbox');
    const submitButton = getByRole('button', {
      name: /magnifying glass icon/i
    })

    fireEvent.change(searchInput, { "target": { "value": "airpods" }});
    userEvent.click(submitButton);

    expect(searchInput).toHaveValue('airpods');

    // Render products list after submission
    expect(await findByText("Film Tricapa iPod Nano Touch 6 Generacion Combo 5 Unidades")).toBeInTheDocument();

    screen.logTestingPlaygroundURL();
  })

  it("should go to product detail on click", async () => {

  })
});
