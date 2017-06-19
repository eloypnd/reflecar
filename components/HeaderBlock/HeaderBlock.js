import PropTypes from 'prop-types'

const HeaderBlock = ({ image, slug, title }) => (
  <section id={slug} className='headerBlock'>
    <img src={image.file.url} alt={image.title} />
    <h1>{title}</h1>
  </section>
)

HeaderBlock.propTypes = {
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default HeaderBlock
