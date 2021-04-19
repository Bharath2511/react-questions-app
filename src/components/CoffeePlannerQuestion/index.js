import {Component} from 'react'
import './index.css'
import QuestionOption from '../QuestionOption'

const questions = [
  {
    questionType: 'DRINK_TYPE',
    option: '',
  },
  {
    questionType: 'COFFEE_TYPE',
    option: '',
  },
  {
    questionType: 'QUANTITY',
    option: '',
  },
  {
    questionType: 'GRIND_TYPE',
    option: '',
  },
  {
    questionType: 'DELIVER_TYPE',
    option: '',
  },
]

class CoffeePlannerQuestion extends Component {
  state = {
    selectedCoffeePlan: ['', '', '', '', ''],
    showSummary: false,
  }

  selectedOption = optionData => {
    this.setState(previousState => {})
  }

  renderQuestionDetails = questionData => {
    const {questionTitle, optionsData, questionType} = questionData
    const {selectedOptionId} = this.state
    return (
      <div className="question-container">
        <h1 className="question">{questionTitle}</h1>
        <div className="option-container">
          {optionsData.map(option => {
            const {id} = option
            return (
              <QuestionOption
                key={id}
                selectedOptionId={selectedOptionId}
                optionData={option}
                questionType={questionType}
                selectedOption={this.selectedOption}
              />
            )
          })}
        </div>
      </div>
    )
  }

  render() {
    const {questionData} = this.props
    return <>{this.renderQuestionDetails(questionData)}</>
  }
}

export default CoffeePlannerQuestion
