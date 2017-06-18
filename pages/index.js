import { getEntryById } from '../lib/contentful'
import Widget from '../components/Widget'

const Index = ({ title, widgets }) => (
  <div>
    <section>
      <h1>{title}</h1>
    </section>
    {widgets.map(
      (widget, i) => <Widget key={i} {...widget} />
    )}
  </div>
)

Index.getInitialProps = async () => {
  const contentfulContent = await getEntryById('61X3acx1hmKaYYQomAgiy2')
  return contentfulContent
}

export default Index
