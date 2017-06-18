import marked from 'marked'
import PropTypes from 'prop-types'

const FAQ = ({ answer, question, slug }) => (
  <div id={slug}>
    <h3>{question}</h3>
    <p dangerouslySetInnerHTML={{__html: marked(answer)}} />
  </div>
)

FAQ.propTypes = {
  answer: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired
}

export default FAQ
