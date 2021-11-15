import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter , Switch , Route } from "react-router-dom";
import Cart from "./components/Cart/cart";
import cart from "./components/Cart/cart";

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Header />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={cart} />

        </Switch>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
