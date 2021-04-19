// Write your code here.
import {Component} from 'react'
import './index.css'

class QuestionOption extends Component {
  renderOptionsData = propsData => {
    const {
      selectedOptionId,
      optionData,
      questionType,
      selectedOption,
    } = propsData
    const {id, optionTitle, description} = optionData
    const onCardClick = () => {
      selectedOption(optionData)
    }
    const cardClass =
      id === selectedOptionId ? 'selected options-card' : 'options-card'
    const cardTitleClass =
      id === selectedOptionId ? 'card-title highlight-title' : 'card-title'
    const cardDescriptionClass =
      id === selectedOptionId
        ? 'card-description highlight-description'
        : 'card-description'
    const imageSrc =
      id === selectedOptionId
        ? 'https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png'
    return (
      <div
        role="button"
        tabIndex={0}
        className={cardClass}
        onClick={onCardClick}
      >
        <div className="header-section">
          <h1 className={cardTitleClass}>{optionTitle}</h1>
          <img src={imageSrc} alt="coffee-cup" className="coffee-cup" />
        </div>
        <p className={cardDescriptionClass}>{description}</p>
      </div>
    )
  }

  render() {
    return <>{this.renderOptionsData(this.props)}</>
  }
}

export default QuestionOption
