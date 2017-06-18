import marked from 'marked'
import PropTypes from 'prop-types'

const TextBlock = ({ title, slug, content }) => (
  <section id={slug}>
    <h2>{title}</h2>
    <div dangerouslySetInnerHTML={{__html: marked(content)}} />
  </section>
)

TextBlock.propTypes = {
  content: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default TextBlock
