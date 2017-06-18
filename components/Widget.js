import FAQs from './FAQ'
import TextBlock from './TextBlock'

const WIDGETS = {
  'TextBlock': (props) => <TextBlock {...props} />,
  'FAQ': (props) => <FAQs {...props} />
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
