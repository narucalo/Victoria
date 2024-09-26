import { NavLink } from "react-router-dom";
import './Navbar.css';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';




var Navbar = React.createClass({
  render: function() {
    return React.createElement(
      "nav",
      { className: "navbar" },
      React.createElement(
        "div",
        { className: "navbar-left" },
        React.createElement(
          "a",
          { href: "/", className: "navbar-logo" },
          // Here, <Icon component={HomeIcon} /> would be replaced with plain text or another implementation
          "Home"
        )
      ),
      React.createElement(
        "div",
        { className: "navbar-center" },
        React.createElement(
          "ul",
          { className: "nav-menu" },
          React.createElement(
            "li",
            null,
            React.createElement("a", { href: "/" }, "Home")
          ),
          React.createElement(
            "li",
            null,
            React.createElement("a", { href: "/products" }, "About")
          ),
          React.createElement(
            "li",
            null,
            React.createElement("a", { href: "/about" }, "Portfolio")
          ),
          React.createElement(
            "li",
            null,
            React.createElement("a", { href: "/contact" }, "Contact")
          )
        )
      ),
      React.createElement(
        "div",
        { className: "navbar-right" },
        React.createElement(
          "a",
          { href: "experienced-web-dev-pdf.pdf", target: "_blank", rel: "noopener noreferrer", className: "resume-link" },
          "My Resume"
        )
      )
    );
  }
});

ReactDOM.render(
  React.createElement(Navbar),
  document.getElementById('root')
);


