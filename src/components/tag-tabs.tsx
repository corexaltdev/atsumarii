import { cn } from '@/lib/utils';

interface TagTabsProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
  className?: string;
}

export default function TagTabs({
  tags,
  selectedTag,
  onTagSelect,
  className,
}: TagTabsProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      <button
        onClick={() => onTagSelect(null)}
        className={cn(
          'px-4 py-2 rounded-full text-sm font-medium transition-colors',
          selectedTag === null
            ? 'bg-primary text-primary-foreground'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        )}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-colors',
            selectedTag === tag
              ? 'bg-primary text-primary-foreground'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
