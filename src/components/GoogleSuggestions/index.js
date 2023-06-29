// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {googleSearch: ''}

  displaySuggestion = suggestion => {
    this.setState({googleSearch: suggestion})
  }

  searchUserInput = event => {
    this.setState({googleSearch: event.target.value})
  }

  render() {
    const {googleSearch} = this.state
    const {SuggestionsList} = this.props

    const filterSearchRes = SuggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(googleSearch.toLowerCase()),
    )
    return (
      <div className="google-suggestions-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-img"
          alt="google logo"
        />
        <div className="google-suggestions-input-con">
          <div className="google-suggestions-input-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="google-suggestions-search-con"
              alt="search icon"
            />
            <input
              type="search"
              value={googleSearch}
              placeholder="Search Google"
              className="google-suggestions-input"
              onChange={this.searchUserInput}
            />
          </div>
          <ul className="suggestion-items-con">
            {filterSearchRes.map(suggestion => (
              <SuggestionItem
                eachItem={suggestion}
                displaySuggestion={this.displaySuggestion}
                key={suggestion.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
