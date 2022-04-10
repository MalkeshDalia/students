import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Maps extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/nadeem159/repos")
      .then((Response) => Response.json())
      .then((users) =>
        this.setState(
          () => {
            return { names: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearch = (event) => {
    console.log(event.target.value);
    const searchfield = event.target.value.toLocaleUpperCase();
    this.setState(() => {
      return { searchfield };
    });
  };
  render() {
    const { names, searchfield } = this.state; //optimization
    const { onSearch } = this; //optimization
    const filterName = names.filter((val) => {
      return val.name.toLocaleUpperCase().includes(searchfield);
    });
    return (
      <div>
        <input type="search" onChange={onSearch} placeholder="Find Name" />
        <br />
        Maps{" "}
        {filterName.map((name) => {
          return <h3 key={name.id}>{name.name}</h3>;
        })}
      </div>
    );
  }
}
