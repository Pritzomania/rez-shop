import React from "react";
import Link from "next/link";
import NavStyles from "../components/styles/NavStyles";

function Nav(props) {
  return (
    <NavStyles>
      <Link href="/items">
        <a>Items</a>
      </Link>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
      <Link href="/sell">
        <a>Orders</a>
      </Link>
      <Link href="/account">
        <a>Account</a>
      </Link>
    </NavStyles>
  );
}

export default Nav;
