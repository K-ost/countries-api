import { render, screen } from "@testing-library/react";
import nock from "nock";
import { userEvent } from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import App from "../App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { API_URI } from "../constants";
import { mockedCountry } from "./factories";

const queryClient = new QueryClient();
const wrapper = (
  <MemoryRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </MemoryRouter>
);

const countries = mockedCountry.buildList(12);

describe("App", () => {
  beforeEach(() => {
    nock(API_URI).get("/all").reply(200, countries);
    render(wrapper);
  });

  it("App renders", () => {
    expect(screen.getByText("Where in the world?")).toBeInTheDocument();
  });

  it("Countries is displayed", async () => {
    const list = await screen.findAllByTestId(/countryItem/);
    const names = await screen.findAllByText(/Population/);
    expect(list).toHaveLength(8);
    expect(names[0]).toBeInTheDocument();
  });

  it("Search - country found", async () => {
    const searchInput = screen.getByTestId("searchTest");
    await screen.findAllByText(/Population/);
    expect(screen.queryByText(/United States/)).not.toBeInTheDocument();
    await userEvent.type(searchInput, "stat");
    expect(screen.getAllByText(/United States/)[0]).toBeInTheDocument();
  });

  it("Search - country is not found", async () => {
    const searchInput = screen.getByTestId("searchTest");
    await screen.findAllByText(/Population/);
    await userEvent.type(searchInput, "555");
    expect(
      screen.getByText(/There are no countries matching/)
    ).toBeInTheDocument();
  });
});
