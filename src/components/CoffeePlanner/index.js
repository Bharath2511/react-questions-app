import {Component} from 'react'
import CoffeePlannerQuestion from '../CoffeePlannerQuestion'
import './index.css'

class CoffeePlanner extends Component {
  state = {
    selectedOption: -1,
    selectedCoffeePlan: [],
  }

  getSelectedOption = optionId => {
    this.setState({selectedOption: optionId, selectedCoffeePlan: ''})
  }

  updateSelectedCoffeePlan = optionTitle => {
    const {selectedCoffeePlan} = this.state
    const updatedCoffeePlan = [...selectedCoffeePlan, optionTitle]
    this.setState(previousState => ({
      selectedOption: previousState.selectedOption,
      selectedCoffeePlan: updatedCoffeePlan,
    }))
  }

  renderCoffeePlanQuestion = () => {
    const {coffeePlannerData} = this.props

    return coffeePlannerData.map(eachPlan => {
      const {id} = eachPlan
      return (
        <CoffeePlannerQuestion
          key={id}
          questionData={eachPlan}
          getSelectedOption={this.getSelectedOption}
          updateSelectedCoffeePlan={this.updateSelectedCoffeePlan}
        />
      )
    })
  }

  render() {
    return (
      <div className="coffee-container">
        <div className="image-container">
          <div className="image-container-content">
            <h1 className="heading">Create a Plan</h1>
            <p className="description">
              We offer an assortment of the best artesian coffees from the globe
              delivered fresh to the door create your plan with this
            </p>
          </div>
        </div>
        <div className="questions-and-answers-container">
          {this.renderCoffeePlanQuestion()}
          <div className="button-container">
            <button className="button" type="button">
              Create my plan!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CoffeePlanner
