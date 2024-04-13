import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../components/mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

    global.fetch = jest.fn(()=>{
        return Promise.resolve({
            json:()=>{
                return Promise.resolve(MOCK_DATA)
            }
        })
    });

    it("Should Search res list for burger test input",async()=>{
        await act(async () => render(<BrowserRouter><Body/></BrowserRouter>))
        const cardsBeforeSearch=screen.getAllByTestId("resCard")
        expect(cardsBeforeSearch.length).toBe(20);
        const searchBtn=screen.getByRole("button",{name:"Search"});
        const searchInput=screen.getByTestId("searchInput");
        fireEvent.change(searchInput,{target:{value:"burger"}})
        fireEvent.click(searchBtn);

        //Screen should load 4 res cards
        const cardsAfterSearch=screen.getAllByTestId("resCard")
        expect(cardsAfterSearch.length).toBe(3);
    })
    it("Should render top rated restaurants",async()=>{
        await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>));

        const cardsBeforeFilter=screen.getAllByTestId("resCard");
        expect(cardsBeforeFilter.length).toBe(20);

        const buttonForTopRestaurant=screen.getByRole("button",{name:"Top rated Restaurant"});
        fireEvent.click(buttonForTopRestaurant);

        const  cardsAfterFilter=screen.getAllByTestId("resCard");

        expect(cardsAfterFilter.length).toBe(13);

    })