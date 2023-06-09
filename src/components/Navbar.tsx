import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Text } from "recharts";
import { Colors } from "chart.js";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>

          <Nav.Link to="/about" as={NavLink}>
            <span>About</span>
          </Nav.Link>
        </Nav>

        <Button
          onClick={openCart}
          style={{ width: "3.5rem", height: "2.5rem", position: "relative" }}
          variant="outline-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1010 1010">
            <path
              fill="#3BAFDA"
              d="M1010 505c0 278.904-226.106 505-505 505C226.086 1010 0 783.904 0 505S226.086 0 505 0c278.894 0 505 226.096 505 505z"
            />
            <path
              fill="#FC6E51"
              d="m344.11 427.08 141.42-141.41c8.68-8.67 8.68-22.735 0-31.404v-.02c-8.68-8.67-22.764-8.67-31.405 0L281.281 427.08h62.83z"
            />
            <path
              fill="#454545"
              d="M344.11 437.18h-62.829a10.089 10.089 0 0 1-9.33-6.234 10.09 10.09 0 0 1 2.19-11.007l172.843-172.834c12.132-12.171 33.456-12.231 45.687 0 6.105 6.115 9.469 14.232 9.469 22.863 0 8.63-3.364 16.748-9.47 22.843l-141.419 141.41a10.089 10.089 0 0 1-7.14 2.959zm-38.447-20.2h34.265l138.46-138.45a12.027 12.027 0 0 0 3.551-8.562c0-3.236-1.262-6.273-3.55-8.562-4.596-4.596-12.576-4.586-17.113-.029L305.663 416.98z"
            />
            <path
              fill="#FC6E51"
              d="M665.87 427.08 524.45 285.67c-8.66-8.67-8.66-22.735 0-31.404l.02-.02c8.66-8.67 22.725-8.67 31.405 0L728.719 427.08H665.87z"
            />
            <path
              fill="#454545"
              d="M728.719 437.18H665.87a10.089 10.089 0 0 1-7.14-2.96L517.31 292.812c-12.586-12.595-12.586-33.091 0-45.687 12.23-12.23 33.495-12.23 45.706-.02L735.86 419.94a10.089 10.089 0 0 1 2.19 11.007 10.088 10.088 0 0 1-9.331 6.234zm-58.666-20.2h34.284L548.734 261.387c-4.577-4.557-12.547-4.577-17.123 0-4.734 4.734-4.734 12.428-.02 17.142L670.054 416.98z"
            />
            <path fill="#FFF" d="M222.2 427.08h565.6v41.91H222.2z" />
            <path
              fill="#454545"
              d="M787.8 479.089H222.2c-5.583 0-10.1-4.517-10.1-10.1V427.08c0-5.583 4.517-10.1 10.1-10.1h565.6c5.583 0 10.1 4.517 10.1 10.1v41.91a10.093 10.093 0 0 1-10.1 10.099zm-555.5-20.2h545.4v-21.71H232.3v21.71z"
            />
            <path
              fill="#FFB933"
              d="M321.365 762.264h367.27c20.83 0 38.506-15.348 41.445-35.97l36.77-257.305h-523.7l36.75 257.304c2.96 20.623 20.615 35.97 41.465 35.97z"
            />
            <path
              fill="#454545"
              d="M688.635 772.363h-367.27c-25.683 0-47.807-19.193-51.466-44.64l-36.75-257.304c-.415-2.9.453-5.839 2.367-8.048a10.12 10.12 0 0 1 7.633-3.482h523.702a10.12 10.12 0 0 1 7.633 3.482 10.115 10.115 0 0 1 2.368 8.048l-36.77 257.304c-3.63 25.447-25.744 44.64-51.447 44.64zM254.798 479.09l35.103 245.773c2.23 15.565 15.762 27.302 31.464 27.302h367.27c15.712 0 29.224-11.737 31.444-27.292l35.123-245.783H254.798z"
            />
          </svg>
          <div>
            {cartQuantity === 0 && (
              <div
                className="d-flex justify-content-center align-items-center rounded-circle   text-white "
                style={{
                  background: "red",
                  width: "1.1rem",
                  height: "1.1rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(-220%,34%)",
                }}
              >
                0
              </div>
            )}
          </div>
          {cartQuantity > 0 && (
            <div
              className="rounded-circle bg-success d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.1rem",
                height: "1.1rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%,20%)",
              }}
            >
              {cartQuantity}
            </div>
          )}
        </Button>

        <h3 className="text-warning p-4">Hi...</h3>
      </Container>
    </NavbarBs>
  );
}
