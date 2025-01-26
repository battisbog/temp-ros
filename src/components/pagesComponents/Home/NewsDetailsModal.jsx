import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function NewsDetailsModal({ isOpen, onClose, selectedNews }) {
  // If no news is selected, don't render anything
  if (!selectedNews) return null;
  console.log(selectedNews);
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{selectedNews.title}</DialogTitle>
          <DialogDescription>{selectedNews.date}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <img
            src={selectedNews.image}
            alt={selectedNews.title}
            className="w-full h-64 object-cover rounded-md"
          />
          <p className="text-sm mt-4">{selectedNews.text}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
