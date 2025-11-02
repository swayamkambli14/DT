import { useState } from "react";
import { CloudUpload, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

interface UploadDocumentScreenProps {
  onNavigate: (screen: string) => void;
}

const UploadDocumentScreen = ({ onNavigate }: UploadDocumentScreenProps) => {
  const [documentName, setDocumentName] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    // Validation
    if (!file) {
      alert("Please select a file to upload");
      return;
    }
    
    if (!documentName.trim()) {
      alert("Please enter a document name");
      return;
    }
    
    if (!category) {
      alert("Please select a category");
      return;
    }
    
    setUploading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onNavigate("upload-success"), 300);
          return 100;
        }
        return prev + 20;
      });
    }, 200);
  };

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
          <h1 className="text-xl font-semibold">Upload New Document</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8 space-y-6">
        {/* File Upload Area */}
        <div className="relative">
          <Label className="text-sm font-medium mb-2 block">
            Upload File <span className="text-destructive">*</span>
          </Label>
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileChange}
            accept=".pdf,.jpg,.jpeg,.png"
            required
          />
          <label
            htmlFor="file-upload"
            className="block p-12 border-2 border-dashed border-border rounded-2xl bg-secondary/50 hover:bg-secondary transition-smooth cursor-pointer"
          >
            <div className="flex flex-col items-center text-center">
              <CloudUpload className="w-16 h-16 text-primary mb-4" strokeWidth={1.5} />
              <p className="font-semibold text-lg mb-1">
                {file ? file.name : "Tap to upload file"}
              </p>
              <p className="text-sm text-muted-foreground">
                PDF, JPG, PNG up to 10MB
              </p>
            </div>
          </label>
        </div>

        {/* Upload Progress */}
        {uploading && (
          <div className="space-y-2 animate-fade-in">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Uploading...</span>
              <span className="font-medium text-primary">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {/* Form Fields */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="doc-name" className="text-sm font-medium">
              Document Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="doc-name"
              type="text"
              placeholder="e.g., Aadhar Card"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
              className="h-12 rounded-xl border-input"
              required
              maxLength={100}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="text-sm font-medium">
              Category <span className="text-destructive">*</span>
            </Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger className="h-12 rounded-xl border-input">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="identity">Identity Proof</SelectItem>
                <SelectItem value="address">Address Proof</SelectItem>
                <SelectItem value="education">Educational Certificate</SelectItem>
                <SelectItem value="medical">Medical Records</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <Button
            onClick={() => onNavigate("dashboard")}
            variant="outline"
            className="flex-1 h-12 rounded-xl border-border"
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpload}
            disabled={!file || !documentName || !category || uploading}
            className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
          >
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadDocumentScreen;
