import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

const Options = props => {
  const {countryCapitalDetails} = props
  const {id, capitalDisplayText} = countryCapitalDetails

  return <option value={id}>{capitalDisplayText}</option>
}

class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  render() {
    const {activeCapitalId} = this.state
    const currentCounteryCapitalObj = countryAndCapitalsList.find(
      each => each.id === activeCapitalId,
    )
    const {country} = currentCounteryCapitalObj
    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select className="select" onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map(each => (
                <Options countryCapitalDetails={each} key={each.id} />
              ))}
            </select>
            <p className="is-capital">is capital of which country</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
