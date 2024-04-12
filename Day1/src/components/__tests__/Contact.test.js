import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"
 
//Instead of test we can write it
describe("Contact Us Page Test Cases",()=>{
    it("Should load contact us component",()=>{
        //Render
        render(<Contact/>);
        //Querying
        const heading=screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
    })
    
    test("Should load button inside Contsct component",()=>{
        //Render
        render(<Contact/>);
        //Querying
        const button=screen.getByText("Submit")
        //Assertion
        expect(button).toBeInTheDocument();
    })
    
    test("Should load input name inside Contsct component",()=>{
        //Render
        render(<Contact/>);
        //Querying
        const input=screen.getByPlaceholderText("name")
        //Assertion
        expect(input).toBeInTheDocument();
    })
    
    test("Should load 2 input boxes on the Contact component",()=>{
        //Render
        render(<Contact/>);
    
    
        //Querying
        const inputBoxes=screen.getAllByRole("textbox");
    
        //Assertion
        expect(inputBoxes.length).toBe(2)
    })
})



