import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"
import { ClientOnlyWrapper } from "@/components/ClientOnlyWrapper"

type ToasterProps = React.ComponentProps<typeof Sonner>

const ToasterContent = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

const Toaster = (props: ToasterProps) => {
  return (
    <ClientOnlyWrapper>
      <ToasterContent {...props} />
    </ClientOnlyWrapper>
  );
};

export { Toaster, toast }
