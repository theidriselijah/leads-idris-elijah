import dynamic from "next/dynamic"

const DynamicInlineWidget = dynamic(() => import('react-calendly').then(module => module.InlineWidget), {
  ssr: false,
})

export default function CalendlyInlineWidget() {
  return (
    <div>
        <DynamicInlineWidget
            url="https://calendly.com/idriselijah/marketing-blueprint"
            styles={{ height: '1000px' }}
          />
    </div>
  )
}