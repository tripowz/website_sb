import React from 'react'

interface Step {
  number: number
  title: string
  completed: boolean
}

interface StepperProps {
  steps: Step[]
  currentStep: number
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            {/* Step circle */}
            <div
              className={`
                flex h-12 w-12 items-center justify-center rounded-full
                text-sm font-medium transition-all duration-300
                ${
                  step.number < currentStep
                    ? 'bg-gray-900 text-white'
                    : step.number === currentStep
                      ? 'bg-gray-900 text-white ring-2 ring-gray-900 ring-offset-2'
                      : 'border-2 border-gray-200 text-gray-400'
                }
              `}
            >
              {step.number < currentStep ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                step.number
              )}
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="flex-1 flex items-center h-1 mx-2 sm:mx-4">
                <div
                  className={`
                    h-1 w-full transition-all duration-300
                    ${steps[index + 1].number <= currentStep
                      ? 'bg-gray-900'
                      : 'bg-gray-200'
                    }
                  `}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step titles */}
      <div className="mt-6 flex justify-between text-center">
        {steps.map((step) => (
          <div key={step.number} className="flex-1">
            <p
              className={`
                text-xs font-medium uppercase tracking-[0.1em] transition-colors
                ${
                  step.number === currentStep
                    ? 'text-gray-900'
                    : 'text-gray-400'
                }
              `}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
