import { createContext } from "react";

const counterContext = createContext(null);

export default counterContext;

//here i  have created context and counterContext will be imported in other files
//to use these states

//it is a good practice to create context object in a separate file
//then import that in a context provider file
//then wrap the main component within context provider
//now where ever u want to use context api then just import that file in which you created context object
