import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import CartDisplay from "../CartDisplay";
import "@testing-library/jest-dom"
//solving fetch error
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  });
});

it("Should load Restaurant menu component", async () => {
  await act(async () =>
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu />
                <CartDisplay/> 
            </Provider>
        </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Biriyani (5)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(5);
  expect(screen.getByText("Cart(0)")).toBeInTheDocument();

  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart(1)")).toBeInTheDocument();
  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart(2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(7);
  fireEvent.click(screen.getAllByRole("button",{name:"clear cart"}));

  expect(screen.getByText("Cart is empty add items to the cart!")).toBeInTheDocument()
});
