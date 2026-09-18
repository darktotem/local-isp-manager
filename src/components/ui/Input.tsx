import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
}

export function Input({ label, hint, error, id, className = '', ...rest }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="field-ui">
      {label && <label htmlFor={inputId} className="field-ui-label">{label}</label>}
      <input
        id={inputId}
        className={`field-ui-input ${error ? 'field-ui-input--error' : ''} ${className}`}
        aria-invalid={Boolean(error)}
        {...rest}
      />
      {error ? (
        <span className="field-ui-error">{error}</span>
      ) : hint ? (
        <span className="field-ui-hint">{hint}</span>
      ) : null}
    </div>
  )
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  hint?: string
  error?: string
}

export function TextArea({ label, hint, error, id, className = '', ...rest }: TextAreaProps) {
  const areaId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="field-ui">
      {label && <label htmlFor={areaId} className="field-ui-label">{label}</label>}
      <textarea
        id={areaId}
        className={`field-ui-textarea ${error ? 'field-ui-input--error' : ''} ${className}`}
        aria-invalid={Boolean(error)}
        {...rest}
      />
      {error ? (
        <span className="field-ui-error">{error}</span>
      ) : hint ? (
        <span className="field-ui-hint">{hint}</span>
      ) : null}
    </div>
  )
}

export default Input