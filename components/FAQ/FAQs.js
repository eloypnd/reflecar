import FAQ from './FAQ'
import PropTypes from 'prop-types'

const FAQs = ({ content, title }) => (
  <div>
    <h2>{title}</h2>
    {content.map((faq, i) => <FAQ key={i} {...faq} />)}
  </div>
)

FAQs.propTypes = {
  content: PropTypes.array,
  title: PropTypes.string
}

export default FAQs
