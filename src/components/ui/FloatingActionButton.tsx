import { Plus } from 'lucide-react';
import { useState } from 'react';
import Modal from './Modal';
import TaskForm from '../modules/TaskForm';

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 lg:hidden z-40 h-14 w-14 rounded-full bg-projects-600 text-white shadow-lg hover:bg-projects-700 transition-colors flex items-center justify-center"
        aria-label="Add Task"
      >
        <Plus className="h-6 w-6" />
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Quick Add Task"
        size="md"
      >
        <TaskForm
          onSuccess={() => setIsOpen(false)}
          onCancel={() => setIsOpen(false)}
        />
      </Modal>
    </>
  );
}

