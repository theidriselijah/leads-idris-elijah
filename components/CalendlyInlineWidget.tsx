import { InlineWidget } from 'react-calendly'

export default function CalendlyInlineWidget() {
  return (
    <div>
        <InlineWidget
            url="https://calendly.com/idriselijah/marketing-blueprint"
            styles={{ height: '1000px' }}
          />
    </div>
  )
}
