import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  SearchbarStyle,
  SearchInputStyle,
  SearchButtonStyle,
  SearchFormStyle,
  SearchSpanStyle,
} from './Searchbar.styled.js';

export class Searchbar extends Component {
  state = {
    queryValue: '',
  };

  handleChange = e => {
    this.setState({ queryValue: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.queryValue.trim() === '') {
      alert('Enter query');
      return;
    }

    this.props.onSubmitApp(this.state.queryValue);
    this.setState({ queryValue: '' });
  };

  render() {
    const { queryValue } = this.state;

    return (
      <SearchbarStyle>
        <SearchFormStyle onSubmit={this.handleSubmit}>
          <SearchButtonStyle type="submit" disabled={queryValue === ''}>
            <span>
              <FaSearch />
            </span>
          </SearchButtonStyle>

          <SearchInputStyle
            value={queryValue}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchFormStyle>
      </SearchbarStyle>
    );
  }
}
