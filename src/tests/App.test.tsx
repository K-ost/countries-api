import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import nock from "nock";
import App from "../App";
import { API_URI } from "../constants";
import { mockedCountry } from "./factories";

const queryClient = new QueryClient();
export const wrapper = (
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

  it("Router - moving to details page", async () => {
    nock(API_URI).get("/alpha/cca0").reply(200, [countries[0]]);
    const searchInput = screen.getByTestId("searchTest");
    const itemLink = screen.getByTestId("countryItem-0");
    await userEvent.type(searchInput, "stat");
    await userEvent.click(itemLink);
    await screen.findByText(/Capital/);
    expect(screen.getByText(/United States/)).toBeInTheDocument();
    expect(screen.getByText(/Washington/)).toBeInTheDocument();
  });
});
