import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { wrapper } from "./App.test";

it("App snapshot", () => {
  const result = render(wrapper);
  expect(result).toMatchInlineSnapshot(`
    {
      "asFragment": [Function],
      "baseElement": <body>
        <div>
          <header
            class="sc-ktwNLz fZoaKN"
          >
            <div
              class="container"
            >
              <div
                class="sc-hABBGs iVlFdb"
              >
                Where in the world?
              </div>
              <label
                class="sc-brSaGm cvErwe"
              >
                <input
                  type="checkbox"
                />
                dark
                 mode
              </label>
            </div>
          </header>
          <div
            class="container"
          >
            <div>
              <div
                class="sc-eDLKEg lnPYfK"
              >
                <input
                  aria-label="search"
                  class="sc-jTQDJr kqduQW"
                  data-testid="searchTest"
                  placeholder="Search for a country"
                  type="search"
                />
                <div
                  class=" css-b62m3t-container"
                >
                  <span
                    class="css-1f43avz-a11yText-A11yText"
                    id="react-select-7-live-region"
                  />
                  <span
                    aria-atomic="false"
                    aria-live="polite"
                    aria-relevant="additions text"
                    class="css-1f43avz-a11yText-A11yText"
                  />
                  <div
                    class=" css-eq8qy4-control"
                  >
                    <div
                      class=" css-s1bz2-ValueContainer"
                    >
                      <div
                        class=" css-1jqq78o-placeholder"
                        id="react-select-7-placeholder"
                      >
                        Filter by Region
                      </div>
                      <input
                        aria-autocomplete="list"
                        aria-describedby="react-select-7-placeholder"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-readonly="true"
                        class="css-mohuvp-dummyInput-DummyInput"
                        id="react-select-7-input"
                        inputmode="none"
                        role="combobox"
                        tabindex="0"
                        value=""
                      />
                    </div>
                    <div
                      class=" css-105m8y0-IndicatorsContainer"
                    >
                      <span
                        class=" css-62wm9a-IndicatorSeparator"
                      />
                      <div
                        aria-hidden="true"
                        class=" css-11juhu0-DropdownIndicator"
                      >
                        <svg
                          aria-hidden="true"
                          class="css-tj5bde-Svg"
                          focusable="false"
                          height="20"
                          viewBox="0 0 20 20"
                          width="20"
                        >
                          <path
                            d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="grid grid-4"
              >
                <div
                  data-testid="countryItem-0"
                >
                  <a
                    class="sc-beyTiQ iQJjdP"
                    href="/cca0"
                  >
                    <img
                      alt=""
                      class="sc-guDMob hscUSx"
                      src="svg"
                    />
                    <span
                      class="sc-dmyDmy bMAVDv"
                    >
                      <span
                        class="sc-hLQTFJ hkrpAy"
                      >
                        Canada
                      </span>
                      <span>
                        Population: 
                        30,000,000
                      </span>
                      <span>
                        Region: 
                        America
                      </span>
                      <span>
                        Capital: 
                        Toronto
                      </span>
                    </span>
                  </a>
                </div>
                <div
                  data-testid="countryItem-1"
                >
                  <a
                    class="sc-beyTiQ iQJjdP"
                    href="/cca1"
                  >
                    <img
                      alt=""
                      class="sc-guDMob hscUSx"
                      src="svg"
                    />
                    <span
                      class="sc-dmyDmy bMAVDv"
                    >
                      <span
                        class="sc-hLQTFJ hkrpAy"
                      >
                        Norway
                      </span>
                      <span>
                        Population: 
                        30,000,000
                      </span>
                      <span>
                        Region: 
                        Europe
                      </span>
                      <span>
                        Capital: 
                        Oslo
                      </span>
                    </span>
                  </a>
                </div>
                <div
                  data-testid="countryItem-2"
                >
                  <a
                    class="sc-beyTiQ iQJjdP"
                    href="/cca2"
                  >
                    <img
                      alt=""
                      class="sc-guDMob hscUSx"
                      src="svg"
                    />
                    <span
                      class="sc-dmyDmy bMAVDv"
                    >
                      <span
                        class="sc-hLQTFJ hkrpAy"
                      >
                        Hungary
                      </span>
                      <span>
                        Population: 
                        30,000,000
                      </span>
                      <span>
                        Region: 
                        Europe
                      </span>
                      <span>
                        Capital: 
                        Budapest
                      </span>
                    </span>
                  </a>
                </div>
                <div
                  data-testid="countryItem-3"
                >
                  <a
                    class="sc-beyTiQ iQJjdP"
                    href="/cca3"
                  >
                    <img
                      alt=""
                      class="sc-guDMob hscUSx"
                      src="svg"
                    />
                    <span
                      class="sc-dmyDmy bMAVDv"
                    >
                      <span
                        class="sc-hLQTFJ hkrpAy"
                      >
                        Taiwan
                      </span>
                      <span>
                        Population: 
                        30,000,000
                      </span>
                      <span>
                        Region: 
                        Asia
                      </span>
                      <span>
                        Capital: 
                        Taipei
                      </span>
                    </span>
                  </a>
                </div>
                <div
                  data-testid="countryItem-4"
                >
                  <a
                    class="sc-beyTiQ iQJjdP"
                    href="/cca4"
                  >
                    <img
                      alt=""
                      class="sc-guDMob hscUSx"
                      src="svg"
                    />
                    <span
                      class="sc-dmyDmy bMAVDv"
                    >
                      <span
                        class="sc-hLQTFJ hkrpAy"
                      >
                        Sierra Leone
                      </span>
                      <span>
                        Population: 
                        30,000,000
                      </span>
                      <span>
                        Region: 
                        Africa
                      </span>
                      <span>
                        Capital: 
                        Freetown
                      </span>
                    </span>
                  </a>
                </div>
                <div
                  data-testid="countryItem-5"
                >
                  <a
                    class="sc-beyTiQ iQJjdP"
                    href="/cca5"
                  >
                    <img
                      alt=""
                      class="sc-guDMob hscUSx"
                      src="svg"
                    />
                    <span
                      class="sc-dmyDmy bMAVDv"
                    >
                      <span
                        class="sc-hLQTFJ hkrpAy"
                      >
                        Grenada
                      </span>
                      <span>
                        Population: 
                        30,000,000
                      </span>
                      <span>
                        Region: 
                        America
                      </span>
                      <span>
                        Capital: 
                        St. George's
                      </span>
                    </span>
                  </a>
                </div>
                <div
                  data-testid="countryItem-6"
                >
                  <a
                    class="sc-beyTiQ iQJjdP"
                    href="/cca6"
                  >
                    <img
                      alt=""
                      class="sc-guDMob hscUSx"
                      src="svg"
                    />
                    <span
                      class="sc-dmyDmy bMAVDv"
                    >
                      <span
                        class="sc-hLQTFJ hkrpAy"
                      >
                        Ivory Coast
                      </span>
                      <span>
                        Population: 
                        30,000,000
                      </span>
                      <span>
                        Region: 
                        Africa
                      </span>
                      <span>
                        Capital: 
                        Yamoussoukro
                      </span>
                    </span>
                  </a>
                </div>
                <div
                  data-testid="countryItem-7"
                >
                  <a
                    class="sc-beyTiQ iQJjdP"
                    href="/cca7"
                  >
                    <img
                      alt=""
                      class="sc-guDMob hscUSx"
                      src="svg"
                    />
                    <span
                      class="sc-dmyDmy bMAVDv"
                    >
                      <span
                        class="sc-hLQTFJ hkrpAy"
                      >
                        Italy
                      </span>
                      <span>
                        Population: 
                        30,000,000
                      </span>
                      <span>
                        Region: 
                        Europe
                      </span>
                      <span>
                        Capital: 
                        Rome
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div
                class="loadmore"
              >
                <button
                  class="sc-iBdoyZ hrkYqG"
                >
                  Loadmore
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>,
      "container": <div>
        <header
          class="sc-ktwNLz fZoaKN"
        >
          <div
            class="container"
          >
            <div
              class="sc-hABBGs iVlFdb"
            >
              Where in the world?
            </div>
            <label
              class="sc-brSaGm cvErwe"
            >
              <input
                type="checkbox"
              />
              dark
               mode
            </label>
          </div>
        </header>
        <div
          class="container"
        >
          <div>
            <div
              class="sc-eDLKEg lnPYfK"
            >
              <input
                aria-label="search"
                class="sc-jTQDJr kqduQW"
                data-testid="searchTest"
                placeholder="Search for a country"
                type="search"
              />
              <div
                class=" css-b62m3t-container"
              >
                <span
                  class="css-1f43avz-a11yText-A11yText"
                  id="react-select-7-live-region"
                />
                <span
                  aria-atomic="false"
                  aria-live="polite"
                  aria-relevant="additions text"
                  class="css-1f43avz-a11yText-A11yText"
                />
                <div
                  class=" css-eq8qy4-control"
                >
                  <div
                    class=" css-s1bz2-ValueContainer"
                  >
                    <div
                      class=" css-1jqq78o-placeholder"
                      id="react-select-7-placeholder"
                    >
                      Filter by Region
                    </div>
                    <input
                      aria-autocomplete="list"
                      aria-describedby="react-select-7-placeholder"
                      aria-expanded="false"
                      aria-haspopup="true"
                      aria-readonly="true"
                      class="css-mohuvp-dummyInput-DummyInput"
                      id="react-select-7-input"
                      inputmode="none"
                      role="combobox"
                      tabindex="0"
                      value=""
                    />
                  </div>
                  <div
                    class=" css-105m8y0-IndicatorsContainer"
                  >
                    <span
                      class=" css-62wm9a-IndicatorSeparator"
                    />
                    <div
                      aria-hidden="true"
                      class=" css-11juhu0-DropdownIndicator"
                    >
                      <svg
                        aria-hidden="true"
                        class="css-tj5bde-Svg"
                        focusable="false"
                        height="20"
                        viewBox="0 0 20 20"
                        width="20"
                      >
                        <path
                          d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="grid grid-4"
            >
              <div
                data-testid="countryItem-0"
              >
                <a
                  class="sc-beyTiQ iQJjdP"
                  href="/cca0"
                >
                  <img
                    alt=""
                    class="sc-guDMob hscUSx"
                    src="svg"
                  />
                  <span
                    class="sc-dmyDmy bMAVDv"
                  >
                    <span
                      class="sc-hLQTFJ hkrpAy"
                    >
                      Canada
                    </span>
                    <span>
                      Population: 
                      30,000,000
                    </span>
                    <span>
                      Region: 
                      America
                    </span>
                    <span>
                      Capital: 
                      Toronto
                    </span>
                  </span>
                </a>
              </div>
              <div
                data-testid="countryItem-1"
              >
                <a
                  class="sc-beyTiQ iQJjdP"
                  href="/cca1"
                >
                  <img
                    alt=""
                    class="sc-guDMob hscUSx"
                    src="svg"
                  />
                  <span
                    class="sc-dmyDmy bMAVDv"
                  >
                    <span
                      class="sc-hLQTFJ hkrpAy"
                    >
                      Norway
                    </span>
                    <span>
                      Population: 
                      30,000,000
                    </span>
                    <span>
                      Region: 
                      Europe
                    </span>
                    <span>
                      Capital: 
                      Oslo
                    </span>
                  </span>
                </a>
              </div>
              <div
                data-testid="countryItem-2"
              >
                <a
                  class="sc-beyTiQ iQJjdP"
                  href="/cca2"
                >
                  <img
                    alt=""
                    class="sc-guDMob hscUSx"
                    src="svg"
                  />
                  <span
                    class="sc-dmyDmy bMAVDv"
                  >
                    <span
                      class="sc-hLQTFJ hkrpAy"
                    >
                      Hungary
                    </span>
                    <span>
                      Population: 
                      30,000,000
                    </span>
                    <span>
                      Region: 
                      Europe
                    </span>
                    <span>
                      Capital: 
                      Budapest
                    </span>
                  </span>
                </a>
              </div>
              <div
                data-testid="countryItem-3"
              >
                <a
                  class="sc-beyTiQ iQJjdP"
                  href="/cca3"
                >
                  <img
                    alt=""
                    class="sc-guDMob hscUSx"
                    src="svg"
                  />
                  <span
                    class="sc-dmyDmy bMAVDv"
                  >
                    <span
                      class="sc-hLQTFJ hkrpAy"
                    >
                      Taiwan
                    </span>
                    <span>
                      Population: 
                      30,000,000
                    </span>
                    <span>
                      Region: 
                      Asia
                    </span>
                    <span>
                      Capital: 
                      Taipei
                    </span>
                  </span>
                </a>
              </div>
              <div
                data-testid="countryItem-4"
              >
                <a
                  class="sc-beyTiQ iQJjdP"
                  href="/cca4"
                >
                  <img
                    alt=""
                    class="sc-guDMob hscUSx"
                    src="svg"
                  />
                  <span
                    class="sc-dmyDmy bMAVDv"
                  >
                    <span
                      class="sc-hLQTFJ hkrpAy"
                    >
                      Sierra Leone
                    </span>
                    <span>
                      Population: 
                      30,000,000
                    </span>
                    <span>
                      Region: 
                      Africa
                    </span>
                    <span>
                      Capital: 
                      Freetown
                    </span>
                  </span>
                </a>
              </div>
              <div
                data-testid="countryItem-5"
              >
                <a
                  class="sc-beyTiQ iQJjdP"
                  href="/cca5"
                >
                  <img
                    alt=""
                    class="sc-guDMob hscUSx"
                    src="svg"
                  />
                  <span
                    class="sc-dmyDmy bMAVDv"
                  >
                    <span
                      class="sc-hLQTFJ hkrpAy"
                    >
                      Grenada
                    </span>
                    <span>
                      Population: 
                      30,000,000
                    </span>
                    <span>
                      Region: 
                      America
                    </span>
                    <span>
                      Capital: 
                      St. George's
                    </span>
                  </span>
                </a>
              </div>
              <div
                data-testid="countryItem-6"
              >
                <a
                  class="sc-beyTiQ iQJjdP"
                  href="/cca6"
                >
                  <img
                    alt=""
                    class="sc-guDMob hscUSx"
                    src="svg"
                  />
                  <span
                    class="sc-dmyDmy bMAVDv"
                  >
                    <span
                      class="sc-hLQTFJ hkrpAy"
                    >
                      Ivory Coast
                    </span>
                    <span>
                      Population: 
                      30,000,000
                    </span>
                    <span>
                      Region: 
                      Africa
                    </span>
                    <span>
                      Capital: 
                      Yamoussoukro
                    </span>
                  </span>
                </a>
              </div>
              <div
                data-testid="countryItem-7"
              >
                <a
                  class="sc-beyTiQ iQJjdP"
                  href="/cca7"
                >
                  <img
                    alt=""
                    class="sc-guDMob hscUSx"
                    src="svg"
                  />
                  <span
                    class="sc-dmyDmy bMAVDv"
                  >
                    <span
                      class="sc-hLQTFJ hkrpAy"
                    >
                      Italy
                    </span>
                    <span>
                      Population: 
                      30,000,000
                    </span>
                    <span>
                      Region: 
                      Europe
                    </span>
                    <span>
                      Capital: 
                      Rome
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div
              class="loadmore"
            >
              <button
                class="sc-iBdoyZ hrkYqG"
              >
                Loadmore
              </button>
            </div>
          </div>
        </div>
      </div>,
      "debug": [Function],
      "findAllByAltText": [Function],
      "findAllByDisplayValue": [Function],
      "findAllByLabelText": [Function],
      "findAllByPlaceholderText": [Function],
      "findAllByRole": [Function],
      "findAllByTestId": [Function],
      "findAllByText": [Function],
      "findAllByTitle": [Function],
      "findByAltText": [Function],
      "findByDisplayValue": [Function],
      "findByLabelText": [Function],
      "findByPlaceholderText": [Function],
      "findByRole": [Function],
      "findByTestId": [Function],
      "findByText": [Function],
      "findByTitle": [Function],
      "getAllByAltText": [Function],
      "getAllByDisplayValue": [Function],
      "getAllByLabelText": [Function],
      "getAllByPlaceholderText": [Function],
      "getAllByRole": [Function],
      "getAllByTestId": [Function],
      "getAllByText": [Function],
      "getAllByTitle": [Function],
      "getByAltText": [Function],
      "getByDisplayValue": [Function],
      "getByLabelText": [Function],
      "getByPlaceholderText": [Function],
      "getByRole": [Function],
      "getByTestId": [Function],
      "getByText": [Function],
      "getByTitle": [Function],
      "queryAllByAltText": [Function],
      "queryAllByDisplayValue": [Function],
      "queryAllByLabelText": [Function],
      "queryAllByPlaceholderText": [Function],
      "queryAllByRole": [Function],
      "queryAllByTestId": [Function],
      "queryAllByText": [Function],
      "queryAllByTitle": [Function],
      "queryByAltText": [Function],
      "queryByDisplayValue": [Function],
      "queryByLabelText": [Function],
      "queryByPlaceholderText": [Function],
      "queryByRole": [Function],
      "queryByTestId": [Function],
      "queryByText": [Function],
      "queryByTitle": [Function],
      "rerender": [Function],
      "unmount": [Function],
    }
  `);
});
