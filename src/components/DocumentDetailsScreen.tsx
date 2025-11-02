import { FileText, Download, Trash2, ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface DocumentDetailsScreenProps {
  onNavigate: (screen: string) => void;
}

const DocumentDetailsScreen = ({ onNavigate }: DocumentDetailsScreenProps) => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      {/* Header */}
      <div className="bg-card shadow-card px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate("dashboard")}
            className="p-2 hover:bg-secondary rounded-lg transition-smooth"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold">Document Details</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8 space-y-6">
        {/* Document Preview */}
        <Card className="p-8 shadow-card rounded-2xl">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-2xl bg-destructive/10 flex items-center justify-center mb-4">
              <FileText className="w-12 h-12 text-destructive" strokeWidth={1.5} />
            </div>
            <h2 className="text-xl font-semibold mb-1">Aadhar Card.pdf</h2>
            <div className="flex items-center gap-2 bg-success/10 text-success px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm font-medium">Verified by Government</span>
            </div>
          </div>
        </Card>

        {/* Metadata */}
        <Card className="p-6 shadow-card rounded-2xl space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Document Name</p>
            <p className="font-semibold">Aadhar Card</p>
          </div>
          
          <div className="h-px bg-border"></div>
          
          <div>
            <p className="text-sm text-muted-foreground">Issued By</p>
            <p className="font-semibold">Unique Identification Authority of India</p>
          </div>
          
          <div className="h-px bg-border"></div>
          
          <div>
            <p className="text-sm text-muted-foreground">Date Uploaded</p>
            <p className="font-semibold">15 January 2025</p>
          </div>
          
          <div className="h-px bg-border"></div>
          
          <div>
            <p className="text-sm text-muted-foreground">Category</p>
            <p className="font-semibold">Identity Proof</p>
          </div>
          
          <div className="h-px bg-border"></div>
          
          <div>
            <p className="text-sm text-muted-foreground">File Size</p>
            <p className="font-semibold">2.4 MB</p>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-2">
            <FileText className="w-5 h-5" />
            View Document
          </Button>
          
          <Button 
            variant="outline"
            className="w-full h-12 rounded-xl border-border flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download
          </Button>
          
          <Button 
            onClick={() => onNavigate("delete-confirmation")}
            variant="outline"
            className="w-full h-12 rounded-xl border-destructive text-destructive hover:bg-destructive/10 flex items-center justify-center gap-2"
          >
            <Trash2 className="w-5 h-5" />
            Delete Document
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DocumentDetailsScreen;
