import { Sparkles } from "lucide-react";
import { toast } from "sonner";

export const showComingSoon = (title: string, message: string) => {
  toast.custom((t) => (
    <div className="flex items-start gap-4 rounded-xl border bg-card p-4 shadow-xl">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Sparkles className="w-5 h-5" />
      </div>

      <div className="flex flex-col flex-1">
        <span className="text-sm font-semibold">{title}</span>
        <span className="text-sm text-muted-foreground mb-2">{message}</span>

        <button onClick={() => toast.dismiss(t)} className="text-xs font-medium text-primary hover:underline self-start">
          Got it
        </button>
      </div>
    </div>
  ));
};
