import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeleteConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmationModal = ({ onConfirm, onCancel }: DeleteConfirmationModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onCancel}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-elevated p-6 w-full max-w-sm animate-scale-in">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          
          <h2 className="text-xl font-semibold mb-2">Delete Document?</h2>
          <p className="text-muted-foreground mb-6">
            Are you sure you want to delete this document? This action cannot be undone.
          </p>
          
          <div className="flex gap-3 w-full">
            <Button
              onClick={onCancel}
              variant="outline"
              className="flex-1 h-11 rounded-xl border-border"
            >
              Cancel
            </Button>
            <Button
              onClick={onConfirm}
              className="flex-1 h-11 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-xl"
            >
              Yes, Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
