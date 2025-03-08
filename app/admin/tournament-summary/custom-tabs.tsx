"use client"

import type * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

// Define the props types explicitly
type CustomTabsProps = {
  defaultValue: string
  children: React.ReactNode
}

type CustomTabsListProps = {
  className?: string
  children: React.ReactNode
}

type CustomTabsTriggerProps = {
  value: string
  className?: string
  children: React.ReactNode
}

type CustomTabsContentProps = {
  value: string
  className?: string
  children: React.ReactNode
}

export function CustomTabs({ defaultValue, children }: CustomTabsProps) {
  return <TabsPrimitive.Root defaultValue={defaultValue}>{children}</TabsPrimitive.Root>
}

export function CustomTabsList({ className, children }: CustomTabsListProps) {
  // Create a div wrapper that accepts the className
  return (
    <div className={className}>
      <TabsPrimitive.List
        className={cn(
          "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground w-full",
        )}
      >
        {children}
      </TabsPrimitive.List>
    </div>
  )
}

export function CustomTabsTrigger({ value, className, children }: CustomTabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      value={value}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        className,
      )}
    >
      {children}
    </TabsPrimitive.Trigger>
  )
}

export function CustomTabsContent({ value, className, children }: CustomTabsContentProps) {
  return (
    <TabsPrimitive.Content
      value={value}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      {children}
    </TabsPrimitive.Content>
  )
}

