import Welcome from './actions/welcome'
import ShowQuestionBankOptions from './actions/show-question_bank_options'
import ShowMains from './actions/show-mains'
import ShowAdvance from './actions/show-advance'
import ShowEamcet from './actions/show-eamcet'
import ShowContactDetails from './actions/show-contactdetails'
import FinalAction from './actions/final-action'

export const routes = [
  {
    path: 'welcome',
    text: /hi|hello/,
    action: Welcome,
  },
  {
    path: 'question_bank',
    payload: 'QuestionBank',
    action: ShowQuestionBankOptions,
  },
  {
    path: 'mains',
    payload: 'Mains',
    action: ShowMains,
  },
  {
    path: 'advance',
    payload: 'Advance',
    action: ShowAdvance,
  },
  {
    path: 'eamcet',
    payload: 'Eamcet',
    action: ShowEamcet,
  },
  {
    path: 'contactdetails',
    payload: 'ContactDetails',
    action: ShowContactDetails,
  },
  { path: 'end-of-flow', payload: 'end', action: FinalAction },
]
