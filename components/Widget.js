import FAQs from './FAQ'
import HeaderBlock from './HeaderBlock'
import TextBlock from './TextBlock'

const WIDGETS = {
  'FAQ': (props) => <FAQs {...props} />,
  'HeaderBlock': (props) => <HeaderBlock {...props} />,
  'TextBlock': (props) => <TextBlock {...props} />
}

const Widget = (props) => {
  const WidgetComponent = WIDGETS[props.widgetType]
  if (!WidgetComponent) {
    console.error(
      `There is no component for widget ${props.widgetType}`
    )
    return false
  }
  return WidgetComponent(props)
}

export default Widget
