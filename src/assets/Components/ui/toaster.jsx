"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { useToast } from "../../../hooks/use-toast"
import { cn } from "../../../lib/utils"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <ToastPrimitives.Provider>
      {toasts.map(({ id, title, description, action }) => (
        <ToastPrimitives.Root
          key={id}
          className={cn(
            "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md p-4 pr-10 relative w-80",
            "flex flex-col gap-1"
          )}
        >
          {title && <ToastPrimitives.Title className="font-semibold text-gray-900 dark:text-gray-100">{title}</ToastPrimitives.Title>}
          {description && <ToastPrimitives.Description className="text-gray-700 dark:text-gray-300 text-sm">{description}</ToastPrimitives.Description>}

          {action}

          <ToastPrimitives.Close
            onClick={() => dismiss(id)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            ✕
          </ToastPrimitives.Close>
        </ToastPrimitives.Root>
      ))}

      {/* Move toast to bottom-right */}
      <ToastPrimitives.Viewport className="fixed bottom-5 right-5 z-50 flex flex-col gap-2" />
    </ToastPrimitives.Provider>
  )
}
