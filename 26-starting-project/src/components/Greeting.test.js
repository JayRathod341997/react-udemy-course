import { render,screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting test component", ()=>{
    test('render hello world',()=>{
        render(<Greeting/>);
    
        const helloWorldElemet = screen.getByText('Hello World');
        expect(helloWorldElemet).toBeInTheDocument();
    });

    test('render good',()=>{
        render(<Greeting/>);
    
        const helloWorldElemet = screen.getByText('Good',{exact:false});
        expect(helloWorldElemet).toBeInTheDocument();
    });
})

