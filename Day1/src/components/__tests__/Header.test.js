import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
  );

        const loginButton=screen.getByRole("button",{name:"Login"});// extra parameter
        // const loginButton=screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a cart(0)", () => {
  render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
  );

        const cartItems=screen.getByText("Cart (0)");

        expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a cart item", () => {
  render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
  );

        const cartItems=screen.getByText(/Cart/);//we can use regex

        expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on onclick", () => {
    render(
      <BrowserRouter>
          <Provider store={appStore}>
              <Header />
          </Provider>
      </BrowserRouter>
    );
  
          const loginButton=screen.getByRole("button",{name:"Login"});// extra parameter
          fireEvent.click(loginButton);//onclick event
          const logoutButton=screen.getByRole("button",{name:"Logout"});
          // const loginButton=screen.getByText("Login");
  
        expect(logoutButton).toBeInTheDocument();
  });

