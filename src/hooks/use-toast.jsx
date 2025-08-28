"use client"

import * as React from "react"

let count = 0

export const ToastContext = React.createContext()

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const toast = ({ title, description, action, duration = 3000 }) => {
    const id = ++count
    const newToast = { id, title, description, action }
    setToasts((prev) => [...prev, newToast])

    // Auto dismiss after duration
    setTimeout(() => dismiss(id), duration)
    return { id }
  }

  const dismiss = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = React.useContext(ToastContext)
  if (!context) throw new Error("useToast must be used within ToastProvider")
  return context
}
