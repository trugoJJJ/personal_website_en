"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

interface CVViewerProps {
  children: React.ReactNode;
  cvPath?: string;
}

export const CVViewer = ({ children, cvPath = "/adam_galecki_cv.pdf" }: CVViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Adam_Galecki_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open(cvPath, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-xl font-bold">CV - Adam Gałęcki</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col h-full">
          {/* PDF Viewer */}
          <div className="flex-1 min-h-[600px] border-t">
            <iframe
              src={`${cvPath}#toolbar=1&navpanes=1&scrollbar=1`}
              className="w-full h-full border-0"
              title="CV - Adam Gałęcki"
            />
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-center gap-4 p-6 border-t bg-gray-50">
            <Button
              onClick={handleDownload}
              className="flex items-center gap-2"
              variant="default"
            >
              <Download className="w-4 h-4" />
              Pobierz CV
            </Button>
            <Button
              onClick={handleOpenInNewTab}
              className="flex items-center gap-2"
              variant="outline"
            >
              <ExternalLink className="w-4 h-4" />
              Otwórz w nowej karcie
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
